import * as React from 'react';
import {CompositeType, Type, toHexString} from '@chainsafe/ssz'
import Output from "./Output";
import Input from "./Input";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";
import {ForkName} from "../util/types";
import Serial from "./Serial";
import { Tree } from '@chainsafe/persistent-merkle-tree';
import {visualizeTree} from './Serial';


type Props = {
  serializeModeOn: boolean;
};

type State<T> = {
  forkName: string
  tree: Tree | undefined;
  name: string;
  input: object;
  sszType: Type<any> | undefined;
  error: string | undefined;
  serialized: Uint8Array | undefined;
  hashTreeRoot: Uint8Array | undefined;
  deserialized: object;
  showOverlay: boolean;
  overlayText: string;
  outputString: string;
  length: number;
  names: Array<T> | undefined
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
      length: 0,
      tree: undefined,
      names: undefined,
      outputString: ""
    };
    // this.worker = new Worker(new URL("./worker.js);
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

  async process<T>(forkName: ForkName, name: string, input: object, type: Type<T> | CompositeType<any>, outputString: string): Promise<void> {
    let error;
    this.setOverlay(true, this.props.serializeModeOn ? "Serializing..." : "Deserializing...");
    const {serialized, root, length, tree} = Serial(type, input)
    this.setState({
      hashTreeRoot: root,
      serialized: serialized,
      outputString: outputString,
      length: length,
      tree: tree,
    });
    this.setOverlay(false);

    const deserialized = input;

    this.setState({forkName: forkName, name: name, input: input, sszType: type, error: error, deserialized: deserialized});
  }

  render(): JSX.Element {
    const {sszType, error, serialized, hashTreeRoot, deserialized} = this.state;
    const {serializeModeOn} = this.props;
    const bounceLoader = <BounceLoader css="margin: auto;" />;

    return (
      <div className='container'>
        <LoadingOverlay
          active={this.state.showOverlay}
          spinner={bounceLoader}
          text={this.state.overlayText}
        >
        </LoadingOverlay>
          <div className='row p-0 m-0'>
          <div className='row'>
                  <div className="container">
                    {this.state.tree && (
                      <div className="row justify-content-center">
                        <button
                          type="button"
                          className={`btn btn-primary`}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={toHexString(this.state.tree.rootNode.root)}
                        >
                          Hash Tree Root Node
                        </button>
                      </div>
                    )}
                    {this.state.tree && visualizeTree(this.state.tree.rootNode)}
                  </div>

        </div>            <div className='col'>
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
            <div className='col p-0 m-0'>
              <Output
                deserialized={deserialized}
                serializeModeOn={serializeModeOn}
                serialized={serialized}
                hashTreeRoot={hashTreeRoot}
                error={error}
                sszType={sszType}
                sszTypeName={this.state.name}
                outputString={this.state.outputString}
                length={this.state.length}
                tree={this.state.tree}
              />
            </div>
          </div>
        </div>
    );
  }
}
