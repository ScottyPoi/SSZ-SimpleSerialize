import { toHexString, Type } from "@chainsafe/ssz";

function toBase64(data: Uint8Array) {
    var binstr = Array.prototype.map.call(data, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
}

type SerializeOutputTypeRecord = Record<string, SerializeOutputType>;

type SerializeOutputType = {
  dump: (value: Uint8Array) => string;
};

type DeserializeOutputTypeRecord = Record<string, DeserializeOutputType>;

type DeserializeOutputType = {
  dump: <T>(value: any, type: Type<T>) => string,
};

export const serializeOutputTypes: SerializeOutputTypeRecord = {
  hex: {
    dump: (value) => toHexString(value),
  },
  base64: {
    dump: (value) => toBase64(value),
  },
};

export const deserializeOutputTypes: DeserializeOutputTypeRecord = {
  json: {
    dump: (value, type) => JSON.stringify(type.toJson(value), null, 2),
  },
};