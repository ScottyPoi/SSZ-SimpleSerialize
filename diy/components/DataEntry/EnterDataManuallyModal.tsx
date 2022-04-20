import { isUnionType, Type } from "@chainsafe/ssz";
import EnterDataManually from "./EnterDataManually";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface EnterDataManuallyModalProps {
  type: Type<any>;
  setData: Dispatch<SetStateAction<unknown>>;
  data: unknown;
  alias: string | undefined
  setInfo: (dataSet: unknown) => void
}

export default function EnterDataManuallyModal(
  props: EnterDataManuallyModalProps
) {
  const type = props.type;
  const [inputType, setInputType] = useState<string>("JSON");
  const [value, setValue] = useState<unknown>();

  useEffect(() => {
    props.setInfo(value)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (isUnionType(type) && type.types.length < 1) {
    return (<></>)
  } else {

  return (
    <div className="modal" id="EnterDataManuallyModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Enter Data Manually</h5>
            <select
              className="form-select"
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            >
              <option value="JSON">JSON</option>
              <option value="YAML">YAML</option>
              <option value="hex">hex</option>
            </select>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <EnterDataManually
              setData={props.setData}
              inputType={inputType}
              type={props.type}
              value={value}
              setValue={setValue}
              alias={props.alias}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save change
            </button>
          </div>
        </div>
      </div>
    </div>
  )};
}
