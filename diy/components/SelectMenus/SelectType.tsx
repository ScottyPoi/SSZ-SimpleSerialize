import { Type } from "@chainsafe/ssz";
import { Modal } from "bootstrap";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SelectTypeProps {
  type: Type<any>;
  setType: Dispatch<SetStateAction<Type<unknown>>>;
  typeName: string;
  setTypeName: Dispatch<SetStateAction<string>>;
  nativeTypes: Record<string, string[]>;
  setAlias: Dispatch<SetStateAction<boolean>>;
  // setTypeDescription: Dispatch<SetStateAction<string>>;
  aliasList: Record<string, Type<unknown>>;
}

export type aliasList = Record<string, Type<any>>;

export default function SelectType(props: SelectTypeProps) {
  const [typeName, setTypeName] = useState<string>(props.typeName);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [typeDescription, setTypeDescription] = useState<
    Record<string, string>
  >({
    Byte: "Uint8",
    Bytes32: "Vector<elementType: Byte, length: 32>",
  });
  const aliasList = props.aliasList

  useEffect(() => {
    if (Object.keys(aliasList).includes(typeName)) {
      props.setType(aliasList[typeName]);
      props.setAlias(true);
      props.setTypeName(typeName);
      // props.setTypeDescription(typeDescription[typeName]);
    } else {
      props.setAlias(false);
      props.setTypeName(typeName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeName]);

  return (
    <div
      className="col-2 h-100 "
      style={{
        textDecorationColor: "darkblue",
        backgroundColor: "whitesmoke",
      }}
    >
      <div className="row">
        <h4 className="text-center">Select Type</h4>
        <h5 className="text-center">Native SSZ Types</h5>
        {/* <CreateType /> */}

        <select
          onChange={(e) => setTypeName(e.target.value)}
          style={{
            textDecorationColor: "darkblue",
            backgroundColor: "whitesmoke",
            scrollbarWidth: "none",
            border: "none",
          }}
          className="form-select form-select-md"
          size={13}
          aria-label="size 3 select example"
          value={props.typeName}
        >
          {Object.keys(props.nativeTypes).map((type, idx) => {
            return props.nativeTypes[type].map((_type) => {
              return (
                <option key={_type} value={_type}>
                  {_type}
                </option>
              );
            });
          })}
          {/* <option disabled>Lodestar Types</option>
              {[...Object.keys(ssz.altair), ...Object.keys(ssz)].filter((n) => !typeNames.includes(n)).sort().map((type) => {
                return <option key={type} value={type}>{type}</option>;
              })} */}
        </select>
        <h5 className="text-center border bottom">Alias Types</h5>
        <button
          type="button"
          className="btn btn-secondary"
          // onClick={() => handleAddType()}
        >
          Add ++
        </button>
        <select
          onChange={(e) => setTypeName(e.target.value)}
          style={{
            textDecorationColor: "darkgrey",
            backgroundColor: "lightgrey",
            scrollbarWidth: "none",
            border: "none",
          }}
          className="form-select form-select-md"
          size={13}
          aria-label="select alias type"
          value={props.typeName}
        >
          {Object.keys(props.aliasList).map((alias, idx) => {
            return (
              <option key={idx} value={alias}>
                {alias}
              </option>
            );
          })}
        </select>
      </div>
      <div className="row"></div>
    </div>
  );
  // function handleAddType(): void {
  //   const modal = document.getElementById("AliasModal") 
  //   const myModal =
  //     modal !== null &&
  //     new Modal(modal, {
  //       keyboard: false,
  //     });
  //     modal !== null &&
  //   myModal && myModal.show();
  // }
}
