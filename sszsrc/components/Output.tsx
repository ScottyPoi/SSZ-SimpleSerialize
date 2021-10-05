/* eslint-disable @typescript-eslint/ban-types */

import * as React from "react";
import NamedOutput from "./display/NamedOutput";
import ErrorBox from "./display/ErrorBox";
import { saveAs } from "file-saver";
import {
  serializeOutputTypes,
  deserializeOutputTypes,
} from "../util/output_types";
import { Type, toHexString, ContainerType } from "@chainsafe/ssz";
import {
  BranchNode,
  hashObjectToUint8Array,
  LeafNode,
  Node,
  Tree,
} from "@chainsafe/persistent-merkle-tree";
import {visualizeTree} from './Serial';

type Props<T> = {
  error: string | undefined;
  serialized: Uint8Array | undefined;
  hashTreeRoot: Uint8Array | undefined;
  serializeModeOn: boolean;
  deserialized: T;
  sszType: Type<T>;
  sszTypeName: string;
  outputString: string;
  length: number;
  tree: Tree;
  // names: Array<T> | undefined;
};

type State = {
  showError: boolean;
  outputType: string;
  nodes;
  values;
};

export default class Output<T> extends React.Component<Props<T>, State> {
  constructor(props: Props<T>) {
    super(props);
    this.state = {
      showError: false,
      outputType: "hex",
      nodes: [new LeafNode(new Uint8Array(32))],
      // values: this.props.tree.getHashObject("0")
    };
  }

  static getDerivedStateFromProps<T>(nextProps: Props<T>): object {
    return { showError: !!nextProps.error };
  }

  componentDidUpdate(prevProps: { serializeModeOn: boolean }): void {
    if (prevProps.serializeModeOn !== this.props.serializeModeOn) {
      if (!this.props.serializeModeOn) {
        this.setOutputType("yaml");
        this.setState({ values: this.props.tree.getHashObject("0") });
      } else {
        this.setOutputType("hex");
      }
    }
  }

  hideError(): void {
    this.setState({ showError: false });
  }

  setOutputType(outputType: string): void {
    this.setState({ outputType: outputType });
  }

  downloadFile(contents: Uint8Array | string, type: string): void {
    const fileContents = new Blob([contents]);
    saveAs(fileContents, this.props.sszTypeName + "." + type);
  }

  validate(str1, str2) {
    return str1 == `0x${str2}` ? "true" : "false";
  }

  // parseBranch(node) {
  //   let nods = []
  //   if (node.isLeaf()) {
  //     return node
  //   } else {
  //     const left = node.left;
  //     const right = node.right;
  //     nods.push(this.parseBranch(right))
  //     nods.push(this.parseBranch(left))
  //     return nods
  //   }
  // }

  // treeNodes(tree: Tree) {
  // let idx = 1;
  // let _root = tree.rootNode
  // let _left = null;
  // let _right = null;
  // let nodeList = [_root]
  // if (!_root.isLeaf()) {
  //   nodeList.push(this.parseBranch(_root.left))
  //   nodeList.push(this.parseBranch(_root.right))
  // }
  // return nodeList

  //   }

  //   function findNodes(root: BranchNode) {
  //     let left = root.left;
  //     let right = root.right;
  //     w

  //   }

  levelOrder(tree) {
    const levels = [];

    if (!tree) {
      return levels;
    }

    const queue = [tree.rootNode];
    while (queue.length) {
      const queueLength = queue.length;
      const level = [];

      for (let i = 0; i < queueLength; i++) {
        const node = queue.shift();

        if (!node.isLeaf()) {
          queue.push(node.left);
        }
        if (!node.isLeaf()) {
          queue.push(node.right);
        }

        level.push(node);
      }
      levels.push(level);
    }
    return levels;
  }

  render(): JSX.Element {
    const {
      error,
      serialized,
      deserialized,
      hashTreeRoot,
      serializeModeOn,
      sszType,
      tree,
      names,
    } = this.props;
    const { showError, outputType } = this.state;

    let serializedStr, hashTreeRootStr;
    let deserializedStr = "";
    if (serializeModeOn) {
      const serializedOutput = serializeOutputTypes[outputType];
      serializedStr =
        serialized && serializedOutput ? serializedOutput.dump(serialized) : "";
      hashTreeRootStr =
        hashTreeRoot && serializedOutput
          ? serializedOutput.dump(hashTreeRoot)
          : "";
    } else {
      const deserializedOuput = deserializeOutputTypes[outputType];
      deserializedStr =
        deserialized !== undefined && deserializedOuput
          ? deserializedOuput.dump(deserialized, sszType)
          : "";
    }

    let counter = 0;
    return (
      <div className="container p-0">
        <div className='row'>
                  <div className="container">
                    {this.props.tree && (
                      <div className="row justify-content-center">
                        <button
                          type="button"
                          className={`btn btn-primary`}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={toHexString(this.props.tree.rootNode.root)}
                        >
                          Hash Tree Root Node
                        </button>
                      </div>
                    )}
                    {tree && visualizeTree(tree.rootNode)}
                    {/* {this.levelOrder(tree).map((lvl: Array<any>, idx) => {
                      const level = lvl;
                      const numberOfColumns = 2 ** idx;
                      const numberOfBottomLeaves = level.length;
                      const emptyLeaves =
                        numberOfColumns - numberOfBottomLeaves;
                      const emptyArray = new Array(emptyLeaves);
                      return (
                        <div className="row justify-content-center">
                          {level.map((node: Node, idx2: number) => {
                            const colorL =
                              !node.isLeaf() && toHexString(node.left.root).substr(0, 8) == "0x000000"
                                ? "danger"
                                : idx == this.levelOrder(tree).length - 1
                                ? "warning"
                                : !node.isLeaf() && node.left.isLeaf()
                                ? "light"
                                : // : !node.isLeaf() && node.right.isLeaf()
                                  // ? "light"
                                  "secondary";
                            const colorR =
                            !node.isLeaf() && toHexString(node.right.root).substr(0, 8) == "0x000000"

                                ? "danger"
                                : idx == this.levelOrder(tree).length - 1
                                ? "warning"
                                : !node.isLeaf() && node.left.isLeaf()
                                ? "light"
                                : !node.isLeaf() && node.right.isLeaf()
                                ? "light"
                                : "secondary";
                            counter = node.isLeaf() ? counter : counter + 2
                            return (
                              <>
                                <div className="col">
                                  <div className="row justify-content-center">
                                    {node.isLeaf() ? (
                                      <>
                                      <div className="col">
                                        <div className="row justify-content-center">
                                          <button
                                            type="button"
                                            className={`btn-outline btn-${colorL}`}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={""
                                            }
                                          >
                                            *
                                          </button>
                                        </div>
                                      </div>
                                    </>
                                    ) : (
                                      <>
                                        <div className="col">
                                          <div className="row justify-content-center">
                                            <button
                                              type="button"
                                              className={`btn-outline btn-${colorL}`}
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title={toHexString(
                                                node.left.root
                                              )}
                                            >
                                              Node L: {counter}
                                            </button>
                                                <div className="row justify-content-center">

                                          </div>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="row justify-content-center">
                                            <button
                                              type="button"
                                              className={`btn-outline btn-${colorR}`}
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title={toHexString(
                                                node.right.root
                                              )}
                                            >
                                              Node R {counter + 1}
                                            </button>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      );
                    })} */}
                  </div>

        </div>
        <h3 className="row justify-content-center border-bottom">Output</h3>
        {showError ? (
          <ErrorBox error={error} hideError={this.hideError.bind(this)} />
        ) : (
          <>
            <div className="row py-3">
              <div className="form">
                <label for="output type">Output Type</label>
                <select
                  className="form-select"
                  id="output type"
                  aria-label="select output type"
                  value={outputType}
                  onChange={(e) => this.setOutputType(e.target.value)}
                >
                  {Object.keys(
                    serializeModeOn
                      ? serializeOutputTypes
                      : deserializeOutputTypes
                  ).map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              {serializeModeOn ? (
                <>
                  <NamedOutput
                    name="HashTreeRoot"
                    value={hashTreeRootStr}
                    textarea={false}
                  />
                  <NamedOutput
                    name="Length"
                    value={this.props.length.toString()}
                    textarea={false}
                  />
                  {this.props.valid && (
                    <NamedOutput
                      name="Valid"
                      value={this.props.tree.toString()}
                      textarea
                    />
                  )}
                  <NamedOutput
                    name="Serialized"
                    value={serializedStr}
                    textarea
                  />
                  <button
                    disabled={!this.props.serialized}
                    onClick={() =>
                      this.downloadFile(this.props.serialized, "ssz")
                    }
                  >
                    {"Download data as .ssz file"}
                  </button>
                </>
              ) : (
                <>
                  <textarea
                    className="form-control"
                    rows={8}
                    value={deserializedStr}
                    readOnly={true}
                  />
                  <button
                    disabled={!deserializedStr}
                    onClick={() =>
                      this.downloadFile(deserializedStr, this.state.outputType)
                    }
                  >
                    {"Download data as ." + this.state.outputType + " file"}
                  </button>
                </>
              )}
            </div>
            <div className="row">
              <h5>{this.validate(serializedStr, this.props.outputString)}</h5>
            </div>
          </>
        )}
      </div>
    );
  }
}
