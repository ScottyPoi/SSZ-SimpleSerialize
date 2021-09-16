import * as React from 'react';
import {Type} from '@chainsafe/ssz'
import Output from "./Output";
import Input from "./Input";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";
import {ForkName} from "../util/types";
import Serial from "./Serial";


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
  outputString: string;
};

export default class Serialize<T> extends React.Component<Props, State<T>> {
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

  async process<T>(forkName: ForkName, name: string, input: T, type: Type<T>, outputString: string): Promise<void> {
    let error;
    this.setOverlay(true, this.props.serializeModeOn ? "Serializing..." : "Deserializing...");
    const {serialized, root} = Serial(type, input)
    this.setState({
      hashTreeRoot: root,
      serialized: serialized,
      outputString: outputString
    });
    this.setOverlay(false);

    const deserialized = input;

    this.setState({forkName, name, input, sszType: type, error, deserialized});
  }

  render(): JSX.Element {
    const {sszType, error, serialized, hashTreeRoot, deserialized} = this.state;
    const {serializeModeOn} = this.props;
    const bounceLoader = <BounceLoader css="margin: auto;" />;

    return (
      <div className='section serialize-section is-family-code'>
        <LoadingOverlay
          active={this.state.showOverlay}
          spinner={bounceLoader}
          text={this.state.overlayText}
        >
        </LoadingOverlay>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Input
                serializeModeOn={serializeModeOn}
                onProcess={this.process.bind(this)}
                sszType={sszType}
                serialized={serialized}
                deserialized={deserialized}
                setOverlay={this.setOverlay.bind(this)}
                // worker={this.worker}
              />
            </div>
            <div className='col'>
              <Output
                deserialized={deserialized}
                serializeModeOn={serializeModeOn}
                serialized={serialized}
                hashTreeRoot={hashTreeRoot}
                error={error}
                sszType={sszType}
                sszTypeName={this.state.name}
                outputString={this.state.outputString}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
