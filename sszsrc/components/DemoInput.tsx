/* eslint-disable @typescript-eslint/ban-types */

import * as React from "react";
import { Type, toHexString } from "@chainsafe/ssz";
// import {ModuleThread, spawn, Thread, Worker} from "threads";
import { ChangeEvent } from "react";
// import {withAlert} from "react-alert";

import { inputTypes } from "../util/input_types";
import { ForkName, typeNames, forks } from "../util/types";
import _createRandomValue from "./RandomValue";
import Serial from './Serial';

type Props<T> = {
  onProcess: (
    forkName: ForkName,
    name: string,
    input: string | T,
    type: Type<T | unknown>,
    inputType: string
  ) => void;
  serializeModeOn: boolean;
  sszType: Type<T>;
  serialized: Uint8Array | undefined;
  deserialized: object;
  alert: { error: Function };
  setOverlay: Function;
  inputType: string;
  defaultInput: string | boolean;
  sszTypeName: string;
  input: object | string | boolean
  // worker: Worker;
};

function getRandomType(types: Record<string, Type<unknown>>): string {
  const names = typeNames(types);
  return names[Math.floor(Math.random() * names.length)];
}

const DEFAULT_FORK = "phase0";

// export default function DemoInput<T>(props: Props<T>) {
//   const serializeModeOn = props.serializeModeOn
//   const onProcess =  props.onProcess
//   const sszTypeName = props.sszTypeName
//   const serialized = props.serialized
//   const deserialized = props.deserialized
//   const setOverlay = props.setOverlay
//   const inputType = props.inputType
//   const defaultInput = props.defaultInput

//   const forkName: ForkName = "phase0"
//   const [input, setInput] = React.useState<string>(defaultInput)
//   const sszType: Type<T | unknown> = types()[sszTypeName]
//   const serializeInputType: string = "yaml"
//   const deserializeInputType: string = "hex"
//   const [value, setValue] = React.useState<number | bigint | boolean | object | Uint8Array | boolean[] | undefined | string>("")

//   React.useEffect(() => {
//     resetWith(getInputType(), sszTypeName);
//   }, [])

//   function setValueAndInput(value: object | string, input: string): void {
//     setValue(value);
//     setInput(input)
//   }

//   function handleError(error: { message: string }): void {
//     alert(error.message);
//     setOverlay(false);
//   }

//   // function showError(errorMessage: string): void {
//   //   alert.error(errorMessage);
//   // }

//   function toggleBool(): void {
//     (input == "true") ? setInput("false") : setInput("true");
//     doProcess();
//   }

//   function getInputType(): string {
//     return serializeModeOn ? serializeInputType : deserializeInputType;
//   }

//   function types(): Record<string, Type<T | unknown>> {
//     return forks[forkName];
//   }

//   function parsedInput(): T | unknown{
//     const inputType = getInputType();
//     return inputTypes[inputType].parse(
//       input,
//       types()[sszTypeName]
//     );
//   }

//   function doProcess(): void {

//     try {
//       onProcess(
//         forkName,
//         sszTypeName,
//         parsedInput(),
//         types()[sszTypeName],
//         getInputType()
//       );
//     } catch (e) {
//       handleError(e);
//     }
//   };

//     async function resetWith(inputType: string, sszTypeName: string): Promise<void> {
//     let sszType = types()[sszTypeName];

//     // get a new ssz type if it's not in our fork
//     if (!sszType) {
//       sszTypeName = getRandomType(types());
//       sszType = types()[sszTypeName];
//     }

//     setOverlay(true, `Generating random ${sszTypeName} value...`);
//     const _value = _createRandomValue(sszTypeName, forkName);
//     const _input = inputTypes[inputType].dump(value, sszType);
//     setInput(_input);
//     setValue(_value)
//     setOverlay(false);
//   }

//   return (
//        <div className="container">
//          <div className="row justify-content-center">
//            <div className="col">
//              <h3 className="row justify-content-center border-bottom">Input</h3>
//              <div className="row">
//                <div className="col">{sszTypeName}</div>
//                <div className="col">
//                  <div className="form-check form-switch">
//                    <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="flexSwitchCheckChecked"
//                     onChange={() => toggleBool()}
//                     onClick={() => doProcess()}
//                     checked={input == "true"}
//                   />
//                   <label
//                     className="form-check-label"
//                     for="flexSwitchCheckChecked"
//                   >
//                     {input}
//                   </label>
//                 </div>
//                 {/* <textarea
//               className="form-control"
//               id="input"
//               rows={this.state.input && this.getRows()}
//               value={this.state.input}
//               onChange={(e) => this.setInput(e.target.value)}
//             /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="row">
//             <button
//               className="button is-primary is-medium is-fullwidth is-uppercase is-family-code submit"
//               disabled={!(sszTypeName && input)}
//               onClick={() => doProcess()}
//             >
//               {serializeModeOn ? "Serialize" : "Deserialize"}
//             </button>
//             <br />
//           </div>
//         </div>
//       </div>
//     )

// }

class DemoInput<T> extends React.Component<Props<T>, State> {
  // worker: Worker;
  // typesWorkerThread: ModuleThread<SszWorker> | undefined;

  constructor(props: Props<T>) {
    super(props);
    const types = forks[DEFAULT_FORK];
    const initialType = this.props.inputType;
    const calculated = Serial(this.props.sszType, this.props.input)

    // this.worker = props.worker;

    this.state = {
      forkName: DEFAULT_FORK,
      input: this.props.input,
      sszTypeName: initialType,
      serializeInputType: "yaml",
      deserializeInputType: "hex",
      value: "",
      calculated: calculated
    };
  }

  // async componentDidMount(): Promise<void> {
  //   await this.resetWith(this.getInputType(), this.state.sszTypeName);
  // }

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

  toggleBool(): void {
    this.state.input == "true" ? this.setInput("false") : this.setInput("true");
    this.doProcess();
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

  async process<T>(
    forkName: ForkName,
    name: string,
    input: T,
    type: Type<T>
  ): Promise<void> {
    let error;
    const { serialized, root } = Serial(type, input);
    this.setState({
      hashTreeRoot: root,
      serialized: serialized,
    });
    this.setOverlay(false);

    const deserialized = input;

    this.setState({
      forkName,
      name,
      input,
      sszType: type,
      error,
      deserialized,
    });
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
    const value = _createRandomValue(sszTypeName, forkName);
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
        <div className="row justify-content-around">
          <div className="col">
            <label for="input" className="px-3 col-form-label">
              {this.state.sszTypeName}
            </label>
            </div>
            <div className='col'>
            <input
              id="input"
              value={this.state.input}
              onChange={(e) => this.setInput(e.target.value)}
              className="form-control form-control-sm"
              type="text"
              aria-label=".form-control-sm example"
            />
          </div>
          <div className='col'>
            {this.state.calculated.root}
          </div>
        <div className="col">
          <button
            className="button is-primary is-medium is-fullwidth is-uppercase is-family-code submit"
            disabled={!(this.state.sszTypeName && this.state.input)}
            onClick={this.doProcess.bind(this)}
          >
            {serializeModeOn ? "Serialize" : "Deserialize"}
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default DemoInput;
