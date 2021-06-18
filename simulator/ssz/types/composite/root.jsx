import {ByteVectorType} from "./byteVector";
import {CompositeType} from "./abstract";
import {isTypeOf, Type} from "../type";
import React from 'react';


/**
 * Allow for lazily evaulated expandedType thunk
 */


export const ROOT_TYPE = Symbol.for("ssz/RootType");

export function isRootType(type) {
  return isTypeOf(type, ROOT_TYPE);
}

export class RootType extends React.Component {
  _expandedType;

  constructor(options) {
    super({length: 32});
    this._expandedType = options.expandedType;
    this._typeSymbols.add(ROOT_TYPE);
  }

  get expandedType() {
    if (typeof this._expandedType === "function") {
      this._expandedType = this._expandedType();
    }
    return this._expandedType;
  }
}
