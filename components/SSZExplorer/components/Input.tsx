/* eslint-disable @typescript-eslint/ban-types */

import * as React from "react";
import { Type, toHexString, CompositeType, ContainerType } from "@chainsafe/ssz";
// import {ModuleThread, spawn, Thread, Worker} from "threads";
import { ChangeEvent } from "react";
// import {withAlert} from "react-alert";

import { inputTypes } from "../util/input_types";
import { ForkName, typeNames, forks } from "../util/types";
import _createRandomValue from "./RandomValue";
import {
  serializeOutputTypes,
  deserializeOutputTypes,
} from "../util/output_types";
import NamedOutput from "./display/NamedOutput";
import styles from "./input.module.css";
import { Tree } from "@chainsafe/persistent-merkle-tree";

type Props<T> = {
  onProcess: (
    forkName: ForkName,
    name: string,
    input: string | T,
    type: Type<unknown>,
    inputType: string
  ) => void;
  serializeModeOn: boolean;
  sszType: Type<T>;
  serialized: Uint8Array | undefined;
  deserialized: object;
  hashTreeRoot: Uint8Array | undefined;
  // alert: { error: Function };
  setOverlay: Function;
  length: number;
  tree: Tree;
  leaves: number[];
  // worker: Worker;
};

type State = {
  forkName: ForkName;
  sszTypeName: string;
  input: string;
  serializeInputType: string;
  deserializeInputType: string;
  value: any;
  activeLine: number;
  outputString: string;
  singleProofNode: number
  singleProof: Uint8Array[];
};

function getRandomType(types: Record<string, Type<unknown>>): string {
  const names = typeNames(types);
  return names[Math.floor(Math.random() * names.length)];
}

const DEFAULT_FORK = "altair";

class Input<T> extends React.Component<Props<T>, State> {
  // worker: Worker;
  // typesWorkerThread: ModuleThread<SszWorker> | undefined;

  constructor(props: Props<T>) {
    super(props);
    const types = forks[DEFAULT_FORK];
    const initialType = getRandomType(types);
    // this.worker = props.worker;

    this.state = {
      forkName: DEFAULT_FORK,
      input: "",
      sszTypeName: "AggregateAndProof",
      serializeInputType: "yaml",
      deserializeInputType: "hex",
      value: "",
      activeLine: 0,
      outputString: "",
      singleProofNode: 0,
      singleProof: []
    };
  }

  async componentDidMount(): Promise<void> {
    await this.resetWith(this.getInputType(), this.state.sszTypeName);
  }

  makeProof(): void {
    this.setState({ singleProof: this.props.tree.getSingleProof(BigInt(this.state.singleProofNode)) });
  }

  // async componentWillUnmount(): Promise<void> {
  //   await Thread.terminate(this.typesWorkerThread as ModuleThread<SszWorker>);
  // }

  setValueAndInput(value: object | string, input: string): void {
    this.setState({ value, input });
  }

  componentDidUpdate(prevProps: { serializeModeOn: boolean }): void {
    if (prevProps.serializeModeOn !== this.props.serializeModeOn) {
      if (!this.props.serializeModeOn) {
        this.setInputType("hex");
        if (this.props.serialized) {
          this.setInput(toHexString(this.props.serialized));
        }
      } else {
        this.setInputType(this.state.serializeInputType);
        if (this.props.deserialized) {
          this.setState({ value: this.props.deserialized });
          this.setInput(
            inputTypes[this.state.serializeInputType].dump(
              this.props.deserialized,
              this.props.sszType
            )
          );
        }
      }
    }
  }

  // handleError(error: { message: string }): void {
  //   this.showError(error.message);
  //   this.props.setOverlay(false);
  // }

  // showError(errorMessage: string): void {
  //   this.props.alert.error(errorMessage);
  // }

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
    return forks[this.state.forkName];
  }

  getInputType(): string {
    const { serializeModeOn } = this.props;
    const { serializeInputType, deserializeInputType } = this.state;
    return serializeModeOn ? serializeInputType : deserializeInputType;
  }

  parsedInput(): string {
    const inputType = this.getInputType();
    return inputTypes[inputType].parse(
      this.state.input,
      this.types()[this.state.sszTypeName]
    ) as string;
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
    this.setOutput();
  }

  setFork(e: ChangeEvent<HTMLSelectElement>): void {
    this.setState({ forkName: e.target.value as ForkName }, async () => {
      await this.resetWith(this.getInputType(), this.state.sszTypeName);
    });
  }

  setInputType(inputType: string): void {
    const { sszTypeName, value } = this.state;
    const sszType = this.types()[sszTypeName];
    const input = inputTypes[inputType].dump(value, sszType);
    if (this.props.serializeModeOn) {
      this.setState({ serializeInputType: inputType, sszTypeName, input });
    } else {
      this.setState({ deserializeInputType: inputType, sszTypeName, input });
    }
  }

  async setSSZType(e: ChangeEvent<HTMLSelectElement>): Promise<void> {
    await this.resetWith(this.getInputType(), e.target.value);
  }

  setInput(input: string): void {
    this.setState({ input });
    this.setOutput();
  }

  setOutput() {
    const outputString = this.getOutputString();
    this.setState({ outputString: outputString });
  }

  doProcess(): void {
    const { sszTypeName, forkName } = this.state;
    try {
      this.props.onProcess(
        forkName,
        sszTypeName,
        this.parsedInput(),
        this.types()[sszTypeName],
        this.getOutputString()
      );
    } catch (e) {
      console.log(e);
    }
  }

  // processFileContents(contents: string | ArrayBuffer | null): void {
  //   try {
  //     if (!this.props.serializeModeOn) {
  //       this.setInput(toHexString(new Uint8Array(contents)));
  //     } else {
  //       this.setInput(contents);
  //     }
  //   } catch (error) {
  //     this.handleError(error);
  //   }
  // }

  // onUploadFile(file: Blob): void {
  //   if (file) {
  //     const reader = new FileReader();
  //     const processFileContents = this.processFileContents.bind(this);
  //     const handleError = this.handleError.bind(this);
  //     if (this.props.serializeModeOn) {
  //       reader.readAsText(file);
  //     } else {
  //       reader.readAsArrayBuffer(file);
  //     }
  //     reader.onload = (e) => {
  //       if (e.target) {
  //         processFileContents(e.target.result);
  //       }
  //     };
  //     reader.onerror = (e: unknown) => {
  //       if (e instanceof Error) {
  //         handleError(e);
  //       }
  //     };
  //   }
  // }

  isBold(idx: number) {
    return this.state.activeLine == idx ? styles.boldLine : styles.normalLine;
  }

  isWord(string: string): Boolean {
    return string.substr(0, 1) == "w";
  }

  getValue(line) {
    const serialLength =
      this.types()[this.state.sszTypeName].getMaxSerializedLength();
    const splits = line.split(" ");
    const split = line.split("");
    const currentTypeString =
      line[0].substring(0, 1) == /[a-zA-Z]/ &&
      line[0].substring(0, 1).replace(/\:/, "");
    const currentType =
      line[0].substring(0, 1) == /[a-zA-Z]/ &&
      Object.keys(this.types()).includes(currentTypeString) &&
      this.types()[currentTypeString];
    const length = currentType ? currentType.getMaxSerializedLength() : 16;
    const value = splits.map((word, idx) => {
      const isNum: Boolean =
        /[a-z]/.test(line.charAt(0)) && /\d/.test(line.charAt(line.length - 2));
      const num =
        typeof parseInt(word.replace(/\D/g, ""), 10) == "number" &&
        parseInt(word.replace(/\D/g, ""), 10);

      const bigNum =
        num && length >= 8
          ? BigInt(num)
          : num && length < 8
          ? num.toString(16)
          : 1;

      return word.substr(0, 2) == "0x"
        ? word.substring(2)
        : word.substr(0, 3) == "'0x"
        ? word.substring(3, word.length - 1)
        : isNum
        ? `${bigNum.toString(16).padStart(2, "0").padEnd(length, "0")}`
        : word.substr(0, 1) == "'"
        ? `${num
            .toString(16)
            .padStart(2, "0")
            .padEnd(serialLength * 2, "0")}`
        : word.substring(0, 1) == /[a-zA-Z]/
        ? null
        : word.substring(0, 1) == ">"
        ? null
        : word.substr(-1, 1) == ":"
        ? null
        : word == "true"
        ? "01"
        : word == "false"
        ? "00"
        : "noooo";
    });
    return value[value.length - 1];
  }

  outputString() {
    return this.state.input
      .split(`\n`)
      .map((line, idx) => {
        let offset = this.state.input.split(`\n`).length;
        let newIdx = idx + offset;
        return line != "" ? this.getValue(line) : "";
      })
      .join("");
  }

  getOutputString(): string {
    const str = this.outputString();
    return str;
  }
  render(): JSX.Element {
    const { serializeModeOn, hashTreeRoot, serialized, deserialized, sszType, tree, leaves } =
      this.props;
    const { serializeInputType } = this.state;

    let serializedStr, hashTreeRootStr;
    let deserializedStr = "";
    const serializedOutput = serializeOutputTypes["hex"];
    serializedStr =
      serialized && serializedOutput ? serializedOutput.dump(serialized) : "";
    hashTreeRootStr =
      hashTreeRoot && serializedOutput
        ? serializedOutput.dump(hashTreeRoot)
        : "";

    const chunkInfo = (
      <div className='col p-2'>
        <div className='row'>{`Chunk Names: ${sszType && (sszType as ContainerType<any>).tree_getPropertyNames().toString().toUpperCase()}`}</div>
        <div className='row'>{`Chunk Count: ${sszType && (this.props.sszType as CompositeType<any>).tree_getChunkCount(tree).toString()}`}</div>
        <div className='row'>{`Chunk Depth: ${sszType && (this.props.sszType as CompositeType<any>).getChunkDepth().toString()}`}</div>
        <div className='row'>{`Value Node Idices: ${leaves && leaves.toString()} `}</div>
        <div className='row'>{`Value Node Data: ${leaves && leaves.map((l) => {return `  [${l}: Some Data] `})} `}</div>
      </div>
)
    return (
      <div className="container">
        <div className="row p-3 justify-content-center">
          <div className="col-4">
            <div className="row p-3 justify-content-center">
              <div className="form text-center">
                <h3>Select SSZ Type</h3>
              </div>
              <div className="row p-3 justify-content-center">
                <select
                  className="form-select text-center"
                  id="ssztypeselect"
                  aria-label="ssz type"
                  value={this.state.sszTypeName}
                  style={{ width: "50%" }}
                  onChange={this.setSSZType.bind(this)}
                >
                  {this.names().map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="row p-4 justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  disabled={!(this.state.sszTypeName && this.state.input)}
                  onClick={this.doProcess.bind(this)}
                >
                  {serializeModeOn ? "Serialize" : "Deserialize"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
                            <textarea
                              className="form-control"
                              id="input"
                              rows={this.state.input && this.getRows()}
                              value={this.state.input}
                              onChange={(e) => this.setInput(e.target.value)}
                            />
                          </div> */}
        <div className="row overflow-auto">
          <div className="col overflow-auto">
            <div
              className="row overflow-auto border"
              style={{ height: "300px" }}
            >
              {this.state.input.split(`\n`).map((line, idx) => {
                return (
                  <div
                    onMouseOver={() => this.setState({ activeLine: idx })}
                    className={`d-flex flex-row text-break border ${this.isBold(
                      idx
                    )}`}
                  >
                    {line.substr(-1, 1) == "'" ? (
                      line
                    ) : line.substr(-1, 1) == ":" ? (
                      <span style={{ color: "red" }}>{line}</span>
                    ) : line.substr(-1, 1) == "-" ? (
                      <span style={{ color: "blue" }}>{line}</span>
                    ) : (
                      <span style={{ color: "green" }}>{line}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col border text-break">
            <p>
              <br />
              <NamedOutput
                name="HashTreeRoot"
                value={hashTreeRootStr}
                textarea={false}
              />
              <NamedOutput name={`SERIALIZED (Length: ${this.props.length} Bytes)`} value={serializedStr} textarea />
              <div className='row py-2 m-2 border'>
                <h3 className='text-center'>CHUNK INFO</h3>
                <div className=''>
                  {this.props.sszType && chunkInfo}
                </div>
              </div>
               <div className="row py-2">
                <div className="col">
                  <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-secondary"
                          type="button"
                          onClick={() => this.makeProof()}
                        >
                         <h3> create single proof</h3>
                        </button>
                      </div>
                      <div className="col">
                        <div className='row'>
<div className='col-6'>
                        <h3>NODE:</h3>

</div>
<div className='col'>

                          <h4><input
                          value={this.state.singleProofNode.toString()}
                          onChange={(e) => {
                            this.setState({
                              singleProofNode: Number(e.target.value),
                            });
                          }}
                        /></h4>
</div>

                        </div>

                      </div>
                  </div>
                </div>
                <div className="col">
                  <NamedOutput
                    name={"Single Proof"}
                    value={this.state.singleProof.map((a) => {return toHexString(a)}).toString()}
                    textarea={true}
                  />
                </div>
              </div>
              {/* {this.state.input.split(`\n`).map((line, idx) => {
              
              let offset = this.state.input.split(`\n`).length;
              let newIdx = idx + offset;
              return (
                line != "" && (
                  <span
                  onMouseOver={() => this.setState({ activeLine: newIdx })}
                  className={`${this.isBold(idx)}`}
                  >
                    {this.getValue(line)}
                    </span>
                    )
                    );
                  })}  */}
            </p>
          </div>
        </div>
        {/* <div className="row border text-break">{toHexString(serialized)}</div> */}
        {/* <div className="row border text-break">{this.getOutputString()}</div> */}
      </div>
    );
  }
}

export default Input;
