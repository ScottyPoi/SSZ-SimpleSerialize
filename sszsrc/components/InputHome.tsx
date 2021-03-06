/* eslint-disable @typescript-eslint/ban-types */

import * as React from "react";
import { Type, toHexString } from "@chainsafe/ssz";
// import {ModuleThread, spawn, Thread, Worker} from "threads";
import { ChangeEvent } from "react";
// import {withAlert} from "react-alert";
import InputBar from "./display/InputBar";
import { inputTypes } from "../util/input_types";
import { ForkName, typeNames, forks } from "../util/types";
import _createRandomValue from "./RandomValue";

type Props<T> = {
  onProcess: (
    forkName: ForkName,
    name: string,
    input: string | T,
    type: Type<T>,
    inputType: string
  ) => void;
  serializeModeOn: boolean;
  sszType: Type<T>;
  sszTypeName: string;
  hashTreeRoot: Uint8Array | undefined;
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
  value: object | string;
  bytes: number
};

function getRandomType(types: Record<string, Type<unknown>>): string {
  const names = typeNames(types);
  return names[Math.floor(Math.random() * names.length)];
}

const DEFAULT_FORK = "altair";

class InputHome<T> extends React.Component<Props<T>, State> {
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
      sszTypeName: "Uint32",
      serializeInputType: "yaml",
      deserializeInputType: "hex",
      value: "",
      bytes: 32,
    };
  }

  async componentDidMount(): Promise<void> {
    await this.resetWith(this.getInputType(), this.state.sszTypeName);
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
      "CommitteeBits"
    ];
    return list;
  }

  compositeNames(): object {
    const composites = {
      CommitteeIndices: "List<Type<Uint64>, Limit<2048>>",
      DepositDataRootList: "List<Type<Uint256>, Limit<2**32>>",
      HistoricalStateRoots: "Vector<Type<Uint256>, Length<2048>",
      AttestationSubnets: "BitVector<Length<64>>",
    };
    return composites;
  }

  types(): Record<string, Type<unknown>> {
    return forks[this.state.forkName];
  }

  getInputType(): string {
    const { serializeModeOn } = this.props;
    const { serializeInputType, deserializeInputType } = this.state;
    return serializeModeOn ? serializeInputType : deserializeInputType;
  }

  parsedInput(): T {
    const inputType = this.getInputType();
    return inputTypes[inputType].parse(
      this.state.input,
      this.types()[this.state.sszTypeName]
    );
  }

  async resetWith(inputType: string, sszTypeName: string): Promise<void> {
    const types = this.types();
    let sszType = types[sszTypeName];
    let bytes = sszType.getMaxSerializedLength();
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
      bytes
    });
    this.props.setOverlay(false);
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
  }

  doProcess(): void {
    const { sszTypeName, forkName } = this.state;
    try {
      this.props.onProcess(
        forkName,
        sszTypeName,
        this.parsedInput(),
        this.types()[sszTypeName],
        this.getInputType()
      );
    } catch (e) {
      this.handleError(e);
    }
  }

  processFileContents(contents: string | ArrayBuffer | null): void {
    try {
      if (!this.props.serializeModeOn) {
        this.setInput(toHexString(new Uint8Array(contents)));
      } else {
        this.setInput(contents);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  onUploadFile(file: Blob): void {
    if (file) {
      const reader = new FileReader();
      const processFileContents = this.processFileContents.bind(this);
      const handleError = this.handleError.bind(this);
      if (this.props.serializeModeOn) {
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
      reader.onload = (e) => {
        if (e.target) {
          processFileContents(e.target.result);
        }
      };
      reader.onerror = (e: unknown) => {
        if (e instanceof Error) {
          handleError(e);
        }
      };
    }
  }

  render(): JSX.Element {
    const { serializeModeOn } = this.props;
    const { serializeInputType } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h3 className="row justify-content-center border-bottom">Input</h3>

            <br />
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field has-addons">
                </div>
                <div>
                  <div>
                    <div className="form"                                            >
                      <label for="ssztypeselect">Select SSZ Type</label>
                      <select
                        className="form-select"
                        id="ssztypeselect"
                        aria-label="ssz type"
                        value={this.state.sszTypeName}
                        onChange={this.setSSZType.bind(this)}
                      >
                        {this.basicNames().map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <textarea
              className="form-control"
              id="input"
              rows={this.state.input && this.getRows()}
              value={this.state.input}
              onChange={(e) => this.setInput(e.target.value)}
            />
            {/* <label for="setInput" className="form-label">Max: {2**(this.state.bytes * 8)-1}</label>
<input type="range" value={this.state.input} onChange={(e) => this.setInput(e.target.value)} onMouseUp={this.doProcess.bind(this)}  className="form-range" min="0" max={2**(this.state.bytes * 8)-2} id="setInput"></input> */}
          <div 
  onMouseUp={this.doProcess.bind(this)}
> {serializeModeOn && (
          <InputBar 
          max = {2**(this.state.bytes * 8)-1}
          doProcess={() => this.doProcess.bind(this)}
          set={this.setInput.bind(this)}
          input={this.state.input}
          boolean={this.state.sszTypeName == "Boolean"}
          serializeModeOn={this.props.serializeModeOn}
          sszType={this.props.sszType}
          sszTypeName={this.props.sszTypeName}
          serialized={this.props.serialized}
          deserialized={this.props.deserialized}
          hashTreeRoot={this.props.hashTreeRoot}
          />
 )}</div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="/developers-eth-blocks.png"
                alt="ethereum building blocks"
                height='200px'
                width='200px'              />
            </div>
            <div className="row">
              <button
                className="button is-primary is-medium is-fullwidth is-uppercase is-family-code submit"
                disabled={!(this.state.sszTypeName && this.state.input)}
                onClick={this.doProcess.bind(this)}
              >
                {serializeModeOn ? "Serialize" : "Deserialize"}
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputHome;
