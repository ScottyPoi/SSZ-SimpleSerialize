import * as React from "react";
import {
  CompositeType,
  Type,
  toHexString,
  RootType,
  BigIntUintType,
  ByteVectorType,
  ContainerType,
} from "@chainsafe/ssz";
import Input from "./Input";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";
import { ForkName } from "../util/types";
import Serial from "./Serial";
import { GindexBitstring, Tree, Node, BranchNode } from "@chainsafe/persistent-merkle-tree";
import { visualizeTree } from "./Serial";
import NamedOutput from "./display/NamedOutput";

type Props = {
  serializeModeOn: boolean;
};

type FieldInfo = {
  isBasic: boolean;
  gIndexBitString: GindexBitstring;
  gIndex: bigint;
};

type State<T> = {
  forkName: string;
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
  names: (string | number)[];
  gIndices: bigint[];
  fieldMap: Record<string, string>;
  nameTypes: {
    [k: string]: (string | number)[];
  };
  typeIdx: Record<string, Record<string, Type<any>>> | undefined;
  casingMap: Map<string, FieldInfo>;
  gTypes: Type<unknown>[]
  // propertyTypes: { [k: string]: (Node | Tree)[]}
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
      outputString: "",
      fieldMap: {},
      gIndices: [],
      nameTypes: { _: [""] },
      typeIdx: undefined,
      casingMap: undefined,
      gTypes: [],
      // propertyTypes: undefined,
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

  async process<T>(
    forkName: ForkName,
    name: string,
    input: object,
    type: CompositeType<any>,
    outputString: string
  ): Promise<void> {
    let error;
    this.setOverlay(
      true,
      this.props.serializeModeOn ? "Serializing..." : "Deserializing..."
    );
    const {
      sszType,
      serialized,
      root,
      tree,
      length,
      names,
      gIndices,
      fieldMap,
      nameTypes,
      typeIdx,
      casingMap,
      gTypes,
      // propertyTypes
    } = Serial(type, input);
    this.setState({
      hashTreeRoot: root,
      serialized: serialized,
      outputString: outputString,
      length: length,
      tree: tree,
      names: names,
      gIndices: gIndices,
      fieldMap: fieldMap,
      nameTypes: nameTypes,
      typeIdx: typeIdx,
      casingMap: casingMap,
      gTypes: gTypes,
      // propertyTypes: propertyTypes
    });
    this.setOverlay(false);

    const deserialized = input;

    this.setState({
      forkName: forkName,
      name: name,
      input: input,
      sszType: type,
      error: error,
      deserialized: deserialized,
    });
  }

  render(): JSX.Element {
    const {
      sszType,
      error,
      serialized,
      hashTreeRoot,
      deserialized,
      nameTypes,
      casingMap,
      length,
      tree,
      gTypes
      // propertyTypes
    } = this.state;
    const { serializeModeOn } = this.props;
    const bounceLoader = <BounceLoader css="margin: auto;" />;
    const leaves = sszType && (sszType as ContainerType<unknown>).tree_getLeafGindices(tree).map((i) => {return Number(i)}).sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })

    return (
      <div className="container">
        <LoadingOverlay
          active={this.state.showOverlay}
          spinner={bounceLoader}
          text={this.state.overlayText}
        ></LoadingOverlay>
      <div className="row">
        <Input
          serializeModeOn={true}
          onProcess={this.process.bind(this)}
          sszType={sszType}
          serialized={serialized}
          deserialized={deserialized}
          setOverlay={this.setOverlay.bind(this)}
          hashTreeRoot={hashTreeRoot}
          length={length}
          tree={tree}
          leaves={leaves}
          // worker={this.worker}
        />
      </div>
        <div className="row p-0 m-0">
          <div className="row">
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
              {this.state.tree &&
                visualizeTree(
                  this.state.tree,
                  this.state.tree.rootNode,
                  1,
                  this.state.fieldMap ? this.state.fieldMap : null,
                  this.state.sszType
                )}
            </div>

          </div>
          <div className="row pt-4 mt-4">

                 
              {nameTypes && casingMap && 
                    Object.entries(nameTypes).map(([key, value], idx) => {
                      // let propers = v.filter((s) => isNaN(parseInt(s as string)));
                      // let numpers = v.filter((s) => !isNaN(parseInt(s as string)));
                      let strings = value.map((p) => {
                        return p
                        //  == "length" ? `length: ${numpers.length}` : p;
                      });

                      return strings.length > 0 && (
                        <div className='col'>
                        {strings.filter((s) => s != "").map((string, idx) => {
                          return (
                        <NamedOutput
                          name={idx == 0 ? key.toUpperCase() : ""}
                          value={`${string}`} 
                          textarea={false}
                        />
                          )
                        })}
                        
                        
                        
                        {/* <div className='row'>
                          
                        <NamedOutput
                    name={
                      ""
                      // this.fieldInfos()[idx][0]
                    }
                    value={Object.entries(this.fieldInfos()[idx][1]).map(([k,v]) => {return `${k} = ${v}   -  `}).toString()}
                    textarea={true} />

                        </div> */}
                        </div>
                      );
                    })}
          </div>
<div className='row'>
  {/* {propertyTypes && Object.entries(propertyTypes).map(([k,v]) => {
    return  (
      <div className='col'>{k}
     {visualizeTree(new Tree(v[0] as BranchNode), v[0] as BranchNode, 1, null)}
     </div>   
    )
  })} */}
</div>
          {/* <div className="row p-0 m-0">
            <Output
              deserialized={deserialized}
              serializeModeOn={true}
              hashTreeRoot={hashTreeRoot}
              serialized={serialized}
              error={error}
              sszType={sszType}
              sszTypeName={this.state.name}
              outputString={this.state.outputString}
              length={this.state.length}
              tree={this.state.tree}
              names={this.state.names}
              gIndices={this.state.gIndices}
              fieldMap={this.state.fieldMap}
              nameTypes={nameTypes}
              typeIdx={this.state.typeIdx}
              casingMap={this.state.casingMap}
            />
          </div> */}
        </div>
      </div>
    );
  }
}
