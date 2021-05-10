import {Type, fromHexString, toHexString} from "@chainsafe/ssz";


type InputTypeRecord = Record<string, InputType>

type InputType = {
  parse: <T>(raw: string, type: Type<T>) => T,
  dump: <T>(value: any, type: Type<T>) => string,
}

export const inputTypes: InputTypeRecord = {

  json: {
    parse: (raw, type) => type.fromJson(JSON.parse(raw)),
    dump: (value, type) => JSON.stringify(type.toJson(value), null, 2),
  },
  hex: {
    parse: (raw, type) => type.deserialize(fromHexString(raw)),
    dump: (value, type) => toHexString(type.serialize(value)),
  },
};