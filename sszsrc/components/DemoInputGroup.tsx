import DemoInput from "./DemoInput";

import * as React from "react";
import { Type } from "@chainsafe/ssz";
import DemoOutput from "./DemoOutput";
import InputHome from "./InputHome";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";
import { ForkName, typeNames, forks } from "../util/types";
import Serial from "./Serial";
import _createRandomValue from "./RandomValue";


type Props = {
  serializeModeOn: boolean;
};

type State<T> = {
  name: string;
  input: T;
  sszType: Type<T> | undefined;
  error: string | undefined;
  serialized: Uint8Array | undefined;
  hashTreeRoot: Uint8Array | undefined;
  deserialized: string | undefined;
  showOverlay: boolean;
  overlayText: string;
};

export default class DemoInputGroup<T> extends React.Component<
  Props,
  State<T>
> {
  // worker: Worker;
  // serializationWorkerThread: ModuleThread<SszWorker> | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      forkName: undefined,
      name: "",
      input: undefined,
      deserialized: undefined,
      sszType: undefined,
      error: undefined,
      serialized: undefined,
      hashTreeRoot: undefined,
      showOverlay: false,
      overlayText: "",
    };
    // this.worker = new Worker(new URL("./RandomValue.tsx", import.meta.url));
  }

  setOverlay(showOverlay: boolean, overlayText = ""): void {
    this.setState({
      showOverlay,
      overlayText,
    });
  }

  // async componentDidMount(): Promise<void> {
  //   this.serializationWorkerThread = await spawn<SszWorker>(this.worker);
  // }

  // async componentWillUnmount(): Promise<void> {
  //   await Thread.terminate(this.serializationWorkerThread as ModuleThread<SszWorker>);
  // }

  async process<T>(
    forkName: ForkName,
    name: string,
    input: T,
    type: Type<T>
  ): Promise<void> {
    let error;
    this.setOverlay(
      true,
      this.props.serializeModeOn ? "Serializing..." : "Deserializing..."
    );
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

  calculate<T>(
    input: T,
    type: Type<T>
  ): object {
    const { serialized, root } = Serial(type, input);
    return {
      serialized,
      root
    }
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

  render(): JSX.Element {
    const { error, serialized, hashTreeRoot, deserialized } =
      this.state;
    const { serializeModeOn } = this.props;
    const bounceLoader = <BounceLoader css="margin: auto;" />;

    return (
      <div className="container-fluid p-3">
        <div className="row justify-content-end">
          <div className="col">
            {this.basicNames().map((basicType, idx) => {
              const val = _createRandomValue(basicType, "phase0")
              const sszType = this.types()[basicType];

              return (
                <div key={idx} className="row justify-content-evenly">
                  <div className="col">
                    {`${sszType}`}
                    <DemoInput
                      serializeModeOn={serializeModeOn}
                      onProcess={this.process.bind(this)}
                      sszType={ sszType}
                      serialized={serialized}
                      deserialized={deserialized}
                      setOverlay={this.setOverlay.bind(this)}
                      inputType={basicType}
                      input={val}
                      // worker={this.worker}
                    />
                  </div>
                  <div className="col">
                    <DemoOutput
                      deserialized={deserialized}
                      serializeModeOn={serializeModeOn}
                      serialized={serialized}
                      hashTreeRoot={hashTreeRoot}
                      error={error}
                      sszType={sszType}
                      sszTypeName={this.state.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
