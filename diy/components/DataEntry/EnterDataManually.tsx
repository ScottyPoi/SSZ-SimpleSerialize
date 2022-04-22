import { fromHexString, isListType, isVectorType, toHexString, Type } from "@chainsafe/ssz";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import yaml from "js-yaml";
import { nameString } from "../TypeMenus/Union";

interface EnterDataManuallyProps {
  type: Type<any>;
  inputType: string;
  setData: Dispatch<SetStateAction<unknown>>
  value: unknown
  setValue: Dispatch<SetStateAction<unknown>>
  alias: string | undefined
}

export default function EnterDataManually(props: EnterDataManuallyProps) {
  const type: Type<unknown> = props.type;
  const defaultValue = type.defaultValue()
  const string = JSON.stringify(type.toJson(defaultValue));
  const [typing, setTyping] = useState<string>("UNCHANGED");
  const [valid, setValid] = useState<string>("");
  const [value, setValue] = useState<unknown>();

//   function validateValue(): void {
//     const t = typing;
//     try {
//       type.assertValidValue(t);
//       setValid("VALID");
//     } catch {
//       setValid(`NOT A VALID ${nameString(props.type)}`);
//     }
//   }

useEffect(() => {
  setValid("")
}, [])

  useEffect(() => {
    let t = typing
    if (isListType(type)) {
      if (t[0] !== "[") {
        t = "[" + t
      }
      if (t[t.length -1] !== "]") {
        t = t + "]"
      }
    }
    setValid("");
    try {
      const val = inputTypes["JSON"].parse(t!, props.type);
      setValue(val);
      setValid("VALID");
    } catch {

      t === "UNCHANGED" ? setValid("") : t === "" ? setValid("") :
        setValid("NOT VALID DATA FOR TYPE")
        if (isVectorType(type)) {
          if (t[0] !== "[") {
            t = "[" + t
          }
          if (t[t.length -1] !== "]") {
            t = t + "]"
          }
          if (t !== typing) {
            setTyping(t)
          }
        }
    } finally {
      setTyping(t)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typing]);

  //   useEffect(() => {
  //     setTyping(inputTypes[props.inputType].dump(value, props.type));
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [value]);

  function handleClick() {
    if (valid === "VALID") {
      const v = type.fromJson(JSON.parse(typing))
      setValue(v)
      props.setValue(value)
    } else {
      throw new Error(`NOT A VALID ${nameString(type)}`)
    }
  }

  return (
    <div className="container">
      <form className="row needs-validation" noValidate>
        <label htmlFor="manualInput" className="form-label">
          {props.alias && props.alias}:<br/>
          {nameString(props.type)}
        </label>
      {valid}
        <input
          type="text"
          className="form-control"
          id="manualInput"
          // defaultValue={string}
          // value={string}
          placeholder={string}
          onChange={(e) => setTyping(e.target.value)}
          required
        />
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick()}
        >
          Assert Valid Value
        </button> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick()}
          data-bs-dismiss="modal"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

type InputTypeRecord = Record<string, InputType>;

type InputType = {
  parse: <T>(raw: string, type: Type<T>) => T;
  dump: <T>(value: any, type: Type<T>) => string;
};

export const inputTypes: InputTypeRecord = {
  YAML: {
    parse: (raw, type) => type.fromJson(parseYaml(raw)),
    dump: (value, type) =>
      dumpYaml(
        type.toJson(typeof value === "number" ? value.toString() : value)
      ),
  },
  JSON: {
    parse: (raw, type) => type.fromJson(JSON.parse(raw)),
    dump: (value, type) => JSON.stringify(type.toJson(value), null, 2),
  },
  hex: {
    parse: (raw, type) => type.deserialize(fromHexString(raw)),
    dump: (value, type) => toHexString(type.serialize(value)),
  },
};

export function dumpYaml(input: any): string {
  return yaml.dump(input);
}

export function parseYaml(input: string): any {
  return yaml.load(input);
}
