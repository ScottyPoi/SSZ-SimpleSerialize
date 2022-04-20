/* eslint-disable @typescript-eslint/no-unused-vars */
import { toHexString, Type } from "@chainsafe/ssz";
import { Modal } from "bootstrap";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import InfoTable from "../OutputBox/InfoTable";

interface UploadFileProps {
  setData: Dispatch<SetStateAction<unknown>>;
  setShowInfo: Dispatch<SetStateAction<ReactElement>>;
  type: Type<any>;
  typeName: string;
}

export default function UploadFile(props: UploadFileProps) {
  const [input, setInput] = useState<any>();
  const asDes = true;

  useEffect(() => {
    input && props.setData(input);
    props.setShowInfo(
      <InfoTable
        top
        sszTypeName={props.typeName}
        data={input}
        type={props.type}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  function processFileContents(contents: string) {
    try {
      setInput(JSON.parse(contents as string));
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  function onUploadFile(file: Blob) {
    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = (e) => {
        if (e.target?.result) {
          if (e.target !== null) {
            processFileContents(e.target.result as string);
          }
        }
        reader.onerror = (e) => {
          throw new Error(`error: ${e}`);
        };
      };
    }
  }

  // function handleClick(): void {
  //   const myModal =
  //     document.getElementById("FileModal") !== null &&
  //     new Modal(document.getElementById("FileModal")!, {
  //       keyboard: false,
  //     });
  //   myModal && myModal.show();
  // }

  return (
    <input
      className="form-control"
      placeholder="Upload Data from File"
      type="file"
      id="formFile"
      title="Upload JSON File"
      onChange={(e) => e.target.files && onUploadFile(e.target.files[0])}
    />
  );
}
