import { Type } from "@chainsafe/ssz";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { nameString } from "../TypeMenus/Union";
import UploadFile from "../DataEntry/UploadFile";

interface InputProps {
  type: Type<any>;
  makeInfo: () => Promise<void>;
  aliasList: Record<string, Type<any>>;
  setData: Dispatch<SetStateAction<unknown>>;
  setShowInfo: Dispatch<SetStateAction<ReactElement>>;
}

export default function InputBox(props: InputProps) {
  // function handleEnterData() {
  //   const myModal =
  //     document.getElementById(`EnterDataManuallyModal`) !== null &&
  //     new bootstrap.Modal(document.getElementById(`EnterDataManuallyModal`)!, {
  //       keyboard: false,
  //     });
  //   myModal && myModal.show();
  // }

  return (
    <div className="input-group m-1 input-group-sm">
      <UploadFile type={props.type} typeName={nameString(props.type)} setData={props.setData} setShowInfo={props.setShowInfo} />
      <button
        onClick={async () => await props.makeInfo()}
        className="btn btn-secondary m-1"
        type="button"
      >
        Use Random Data
      </button>
      <button
        type="button"
        className="btn btn-secondary m-1"
        // onClick={() => handleEnterData()}
      >
        Enter Data Manually
      </button>
    </div>
  );
}
