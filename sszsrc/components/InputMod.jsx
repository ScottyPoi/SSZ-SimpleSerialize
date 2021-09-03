/* eslint-disable @typescript-eslint/ban-types */

import * as React from "react";
import { Type, toHexString } from "@chainsafe/ssz";
import { inputTypes } from "../util/input_types";
import { ForkName, typeNames, forks } from "../util/types";
import _createRandomValue from "./RandomValue";
import { SignedBeaconBlock } from "@chainsafe/lodestar-types/lib/altair/sszTypes";

type Props<T> = {
  onProcess: (
    forkName: ForkName,
    name: string,
    input: string | T,
    type: Type<T> | Type<unknown>,
    inputType: string
  ) => void;
  serializeModeOn: boolean;
  sszType: Type<T>;
  serialized: Uint8Array | undefined;
  deserialized: object;
  alert: { error: Function };
  setOverlay: Function;
  // worker: Worker;
};

type State = {
  forkName: ForkName;
  sszTypeName: string;
  input: string;
  serializeInputType: string;
  deserializeInputType: string;
  value: number | bigint | boolean | object | Uint8Array | boolean[] | string;
};

function getRandomType(types: Record<string, Type<unknown>>): string {
  const names = typeNames(types);
  return names[Math.floor(Math.random() * names.length)];
}

const DEFAULT_FORK = "phase0";

class InputMod<T> extends React.Component<Props<T>, State> {
  constructor(props: Props<T>) {
    super(props);
    const types = forks[DEFAULT_FORK];
    const initialType = SignedBeaconBlock;
    const randomType = getRandomType(types);

    this.state = {
      forkName: DEFAULT_FORK,
      input: "",
      sszTypeName: "SignedBeaconBlock",
      serializeInputType: "yaml",
      deserializeInputType: "hex",
      value: "",
    };
  }

  doProcess(): void {
    const { sszTypeName, forkName } = this.state;
    try {
      this.props.onProcess(
        forkName,
        sszTypeName,
        this.parsedInput()[this.state.sszTypeName],
        forks[forkName][sszTypeName],
        this.getInputType()
      );
    } catch (e) {
      this.handleError(e);
    }
  }
  async componentDidMount(): Promise<void> {
    await this.resetWith(this.getInputType(), this.state.sszTypeName);
  }

  setValueAndInput(value: object | string, input: string): void {
    this.setState({ value, input });
  }

  handleError(error: { message: string }): void {
    this.showError(error.message);
    this.props.setOverlay(false);
  }

  showError(errorMessage: string): void {
    this.props.alert.error(errorMessage);
  }

  getRows(): number {
    return Math.min(
      16,
      Math.max(
        4,
        Math.floor((this.state.input.match(/\n/g) || []).length * 1.5)
      )
    );
  }

  names(): string[] {
    return typeNames(this.types());
  }

  basicNames(): string[] {
    const list = [
      "Boolean",
      "Bytes32",
      "Uint8",
      "Uint16",
      "Uint32",
      "Uint64",
      "Uint128",
      "Uint256",
    ];
    return list;
  }

  types(): Record<string, Type<unknown>> {
    return forks["phase0"];
  }

  getInputType(): string {
    const { serializeModeOn } = this.props;
    const { serializeInputType, deserializeInputType } = this.state;
    return serializeModeOn ? serializeInputType : deserializeInputType;
  }

  parsedInput(): T | unknown {
    const inputType = this.getInputType();
    return inputTypes[inputType].parse(
      this.state.input,
      this.types()[this.state.sszTypeName]
    );
  }

  async resetWith(inputType: string, sszTypeName: string): Promise<void> {
    const types = this.types();
    let sszType = types[sszTypeName];

    // get a new ssz type if it's not in our fork
    if (!sszType) {
      sszTypeName = getRandomType(types);
      sszType = types[sszTypeName];
    }
    const { forkName } = this.state;

    this.props.setOverlay(true, `Generating random ${sszTypeName} value...`);
    const value = await _createRandomValue(sszTypeName, forkName);
    const input = inputTypes[inputType].dump(value, sszType);
    if (this.props.serializeModeOn) {
      this.setState({
        serializeInputType: inputType,
      });
    } else {
      this.setState({
        deserializeInputType: inputType,
      });
    }
    this.setState({
      sszTypeName,
      input,
      value,
    });
    this.props.setOverlay(false);
  }

  numOrObj(type, level) {
    console.log(` type:  eh? ${Object.keys(type)}`);
    return (
      <>
        {typeof type == "number" ? (
          <div
            style={{ fontSize: this.sizes[level - 1] }}
            className="row justify-content-end"
          >
            Uint[64]
          </div>
        ) : Object.keys(type).length == 32 ? (
          <div
            style={{ fontSize: this.sizes[level - 1] }}
            className="row justify-content-end"
          >
            Uint[256]
          </div>
        ) : Object.keys(type).length == 48 ? (
          <div
            style={{ fontSize: this.sizes[level - 1] }}
            className="row justify-content-end"
          >
            ByteVector[48]
          </div>
        ) : Object.keys(type).length == 96 ? (
          <div
            style={{ fontSize: this.sizes[level - 1] }}
            className="row justify-content-end"
          >
            ByteVector[96]
          </div>
        ) : (
          <div className="container p-0">{this.newSubTree(type, level)}</div>
        )}
      </>
    );
  }

  sizes = {
    0: "xx-small",
    1: "x-small",
    2: "small",
    3: "medium",
    4: "large",
    5: "x-large",
    6: "xx-large",
    7: "xxx-large",
  };

  areSame(list0, list1, list2, idx, downOne) {
    const keys1 = Object.keys(list1);
    const keys2 = Object.keys(list2);
    return keys1[0] == keys2[0] ? (<div id={`${list0[keys1[0]]}`} className='row p-0' key={idx}>{this.newSubTree(list0[keys1[0]], downOne)}</div>)
    : `${keys1} and ${keys2}`
  }

  // noDups(obj) {
  //   let keys = Object.keys(obj);
  //   const keyList = keys.map((k) => {
  //     return k;
  //   });
  //   console.log(
  //     `keylist: ${
  //       keys.length
  //     } -- ${keys.toString()} -- is array?  ${Array.isArray(keys)}`
  //   );
  //   let uniqueKeys = keys.filter((k, idx) => idx == keys.indexOf(k));
  //   return uniqueKeys;
  // }

  newSubTree(list, level) {
    const _level = level;
    const downOne = level - 1;
    const keys = Object.keys(list)
    const uniqueKeys = keys;

    console.log(
      `key -- ${Object.keys(list).map((l) => {
        return list[l];
      })}`
    );

    console.log(`keys is array?
    : ${Array.isArray(uniqueKeys)}, length: ${
      uniqueKeys.length
    } level: ${level}`);

    return keys[0] == "0" ? (
      keys.length >= 2 ? (this.areSame(list[uniqueKeys[0]], list[uniqueKeys[2]], list, 765, downOne)) :
(      uniqueKeys.map((l, idx) => {
        return (<div id={`${Object.keys(list[l])}`} className='row p-0' key={idx}>{this.newSubTree(list[l], downOne)}</div>)
      }))
    ) : (
      <>
        {uniqueKeys.map((l, idx) => {
          console.log(`woodley: ${Object.keys(l)} -- $${idx}`);
          return (
            <div id={`${l}${idx}`} key={idx} className="row p-0 border-bottom">
              <div
                style={{ fontSize: `${this.sizes[_level]}` }}
                className="col-3 p-0"
                key={idx}
              >
                {l}:
              </div>
              <div
                style={{ fontSize: this.sizes[downOne] }}
                className="col-9 p-0 text-end"
              >
                {this.numOrObj(list[l], downOne)}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  render(): JSX.Element {
    const { serializeModeOn } = this.props;
    const { sszTypeName, value } = this.state;
    console.log(`hey!  value: ${Object.keys(value).length}`);
    return (
      <div className="container">
        <div className="row">
          <h1 id={"typeName"}>{sszTypeName}</h1>
          {this.newSubTree(value, 7)}{" "}
        </div>
      </div>
    );
  }
}

export default InputMod;
