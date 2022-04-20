import { Type } from "@chainsafe/ssz";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface FileModalProps {
  typeName: string;
  type: Type<any>;
  setInfo: Dispatch<SetStateAction<ReactElement>>;
}

export default function FileModal(props: FileModalProps) {
  const [input, setInput] = useState<string>();

  useEffect(() => {
    if (input !== "") {
      try {
        const des = props.type.deserialize(props.type.fromJson(JSON.parse(input!)))
        input && props.setInfo(des);
      } catch {}
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  function processFileContents(contents: string) {
    try {
        setInput(contents as string);
    } catch (error) {
      throw new Error(`${error}`);
    }
    throw new Error("Function not implemented.");
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

  return (
    <div className="modal" id={`FileModal`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Data from File</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismisss="modal"
              aria-label="close"
            ></button>
          </div>
          <div className="modal-body">
            <p>SSZ TYPE</p>
            <br />
            <p>{props.typeName}</p>
            <br />
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              {/* <select>
                <option>JSON</option>
                <option>YAML</option>
                <option>CSL</option>
            </select> */}
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(e) =>
                  e.target.files && onUploadFile(e.target.files[0])
                }
              />
            </div>{" "}
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
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
