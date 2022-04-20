import { Tree } from "@chainsafe/persistent-merkle-tree";
import {CopyIcon } from '@chakra-ui/icons'
import {
  CompositeType,
  isBasicType,
  isBitListType,
  isCompositeType,
  isContainerType,
  isListType,
  isUnionType,
  isVectorType,
  toHexString,
  Type,
} from "@chainsafe/ssz";
import { Select, Text } from "@chakra-ui/react";
import { UnionObject } from "../DataEntry/RandomData";
import { dataSet } from "../DataEntry/randUint";
import { nameString } from "../TypeMenus/Union";
import { saveAs } from "file-saver";
import { useState } from "react";

interface InfoTableProps {
  type: Type<any>;
  data: dataSet;
  tree?: Tree;
  container?: boolean;
  leaves?: bigint[];
  sszTypeName: string;
  top?: boolean;
  // setProofNode: Function;
}

<CopyIcon />;

function getProofNodes(leaf: number) {
  let l = leaf;
  let nodes = [];
  while (l > 1) {
    if (l % 2 === 0) {
      nodes.push(l + 1);
      l = l / 2;
    } else {
      nodes.push(l - 1);
      l = (l - 1) / 2;
    }
  }
  return nodes;
}

export default function InfoTable(props: InfoTableProps) {
  // const _tree = props.tree;
  const data = props.data;
  const [proofString, setProofString] = useState<[string, string]>();
  const serialized = props.type.serialize(data);
  const hashTreeRoot = props.type.hashTreeRoot(data);
  const deserialized = props.type.deserialize(serialized);
  const json = JSON.stringify(props.type.toJson(deserialized));
  // const containerLeaves = props.leaves ? props.leaves : isContainerType(props.type) ? props.type.tree_getLeafGindices(props.type.struct_convertToTree(props.data)) : undefined

  function merkleAccordion(compType: CompositeType<any>) {
    const tree = compType.struct_convertToTree(deserialized);
    const leafGindices = isContainerType(compType)
      ? Object.keys(compType.fields).map((field) => {
          return compType.getPropertyGindex(field);
        })
      : compType.tree_getLeafGindices(tree);
    proofString || setProofString([leafGindices[0].toString(), "0"]);
    return (
      <div className="row ps-4 ms-2">
        <div className="col-3">Merkle Proof By Leaf</div>
        <div
          className="col-3 text-break py-0 mb-1 px-2 mx-2"
          style={{ maxHeight: "200px", overflowY: "scroll" }}
        >
          <Select onChange={(e) => setProofString} value={proofString}>
            {leafGindices.map((g, idx) => {
              return (
                <option onClick={() => setProofString([g.toString(), idx.toString()])} value={[g.toString(), idx.toString()]}>
                  {g.toString()}{" "}
                  {props.leaves && props.leaves[idx + 1].toString()}{" "}
                  {isContainerType(compType) &&
                    `: ${Object.keys(compType.fields)[idx]}`}{" "}
                  = [{getProofNodes(Number(g)).toString()}]
                </option>
              );
            })}
          </Select>{" "}
        </div>
        <div className="col-5">
          {proofString && merkleAccordionItem(proofString, tree, compType)}
        </div>
      </div>
    );
  }

  function merkleAccordionItem(
    [g, idx]: [string, string],
    tree: Tree,
    compType: CompositeType<any>
  ) {
    return (
      <div>
        <h4>
          {g.toString()}
          {props.leaves && props.leaves[Number(idx) + 1].toString()}{" "}
          {isContainerType(compType) &&
            `: ${Object.keys(compType.fields)[Number(idx)]}`}{" "}
          {`->`} [{getProofNodes(Number(g)).toString()}]<br />
        </h4>
        <p className="text-break">
          [
          {tree.getSingleProof(BigInt(g)).map((p, idx) => {
            return (
              <span
                style={{
                  backgroundColor: `#${idx % 2 === 0 ? "ffffff" : "cccccc"}`,
                }}
              >
                {toHexString(p)}
                {idx !== tree.getSingleProof(BigInt(g)).length - 1 && `,`}
              </span>
            );
          })}
          ]
        </p>
      </div>
    );
  }

  const serial = Array.from(toHexString(serialized)).map((v, idx) => {
    return (
      <span
        key={idx}
        style={{ fontWeight: Math.floor(idx / 2) === 1 ? "bold" : "normal" }}
      >
        {v}
      </span>
    );
  });

  function downloadFile(contents: Uint8Array | string, type: string): void {
    const fileContents = new Blob([contents]);
    saveAs(fileContents, props.sszTypeName + "." + type);
  }

  return (
    <div style={{ fontSize: "0.8rem" }}>
      <div className="row my-2 justify-content-start">
        {/* {props.top && json && (
          <div className="d-grid col-6 text-break overflow-auto">
            <button type="button" onClick={() => downloadFile(json, "json")}>
              SAVE DATA AS JSON FILE
            </button>
          </div>
        )} */}
        {props.top && json && (
          <div className="d-grid col-4 text-break overflow-auto">
                    <button
                      type="button"
                      onClick={() => downloadFile(json, "json")}
                    >
                      DOWNLOAD
                    </button>
                    {/* <br />
                    {json} */}
                  </div>
        )}
      </div>

      <div className="row justify-content-between border-bottom my-1 mx-4 px-2">
        <div className="col-2">
          Serialized
          {isVectorType(props.type) && (
            <div className="row">
              {`(length: ${props.type.getFixedSerializedLength()})`}
            </div>
          )}
          {isListType(props.type) && isBitListType(props.type) ? (
            <div className="row">
              {`(length: ${(data as unknown[]).length} / ${props.type.limit})`}
            </div>
          ) : (
            <div className="row">
              {isListType(props.type) &&
                !isBitListType(props.type) &&
                `(length: ${(data as unknown[]).length} / ${
                  props.type.getMaxSerializedLength() /
                  // @ts-ignore
                  props.type.elementType.byteLength
                })`}
            </div>
          )}
          {isListType(props.type) && (
            <div className="row">
              {`(bytes: ${props.type.tree_getSerializedLength(
                // @ts-ignore
                props.type.struct_convertToTree(data)
              )} / ${
                isBitListType(props.type)
                  ? props.type.limit / 8
                  : props.type.getMaxSerializedLength()
              })`}
            </div>
          )}
        </div>
        <div className="col-1">
          <CopyIcon />
        </div>

        <div
          className="col-8 text-break py-0 mb-1 px-2 mx-2"
          style={{ maxHeight: "100px", overflowY: "scroll" }}
        >
          {serial}
        </div>
      </div>
      <div className="row justify-content-between border-bottom py-0 my-0  mx-4 px-2">
        <div className="col-2">Hash Tree Root</div>
        <div className="col-1">
          <CopyIcon/>
        </div>
        <div
          className="col-8 text-break py-0 my-0 px-2 mx-2"
          // style={{ maxHeight: "100px", overflowY: "scroll" }}
        >
          <Text className="text-break py-0 mb-1">
            {toHexString(hashTreeRoot)}
          </Text>
        </div>
      </div>
      {(isUnionType(props.type) || isListType(props.type)) && (
        <div className="row justify-content-between border-bottom my-1 mx-4 py-1 px-2">
          <div className="col-2 me-0 pe-0">Merkle Root - G-2</div>
          <div className="col-1 mx-0 ps-1">
            <CopyIcon/>
          </div>
          <div className="col-8  mx-0 px-0">
            {toHexString(
              props.type.struct_convertToTree(deserialized).getRoot(BigInt(2))
            )}
          </div>
        </div>
      )}
      {isListType(props.type) && (
        <div className="row justify-content-between border-bottom my-1 mx-4 py-1 px-2">
          <div className="col-2 mx-0 px-0">Length - G-3</div>
          <div className="col-1">{/* <CopyIcon/> */}</div>
          <div className="col-8">
            {toHexString(
              props.type.struct_convertToTree(deserialized).getRoot(BigInt(3))
            )}
          </div>
        </div>
      )}
      {isUnionType(props.type) && (
        <div className="row justify-content-between border-bottom my-1 mx-4 py-1 px-2">
          <div className="col-2 me-0 pe-0">
            Selector - G-3
            {parseInt(
              toHexString(
                props.type.struct_convertToTree(deserialized).getRoot(BigInt(3))
              )
            )}
          </div>
          <div className="col-1 mx-0 px-0">
            {
              props.type.deserialize(props.type.serialize(deserialized))
                .selector
            }
            :{" "}
            {nameString(
              props.type.types[
                props.type.deserialize(props.type.serialize(deserialized))
                  .selector
              ]
            )}
          </div>
          <div className="col-8 mx-0 px-0">
            {toHexString(
              props.type.struct_convertToTree(deserialized).getRoot(BigInt(3))
            )}
          </div>
        </div>
      )}
      {isCompositeType(props.type) && <>{merkleAccordion(props.type)}</>}
      <div className="table-responsive my-1 ms-4 py-1 ps-3">
        <table className="table table-sm">
          <tbody style={{ fontSize: "0.7rem" }}>
            {isBasicType(props.type) && (
              <tr>
                <th scope="row">Serialized</th>
                <td>(Padded)</td>
                <td>
                  <Text className="text-break">
                    {toHexString(hashTreeRoot)}
                  </Text>

                  {/* <textarea readOnly className="text-break" value={`0x${serial}`} /> */}
                </td>
              </tr>
            )}

            {isListType(props.type) && (
              <tr>
                <th scope="row">
                  Length ({(data as any[]).length})
                  <br />
                  (G-Index 3)
                </th>
                <td>
                  <CopyIcon/>
                </td>

                <td className="text-break">
                  {/* {toHexString(new NumberUintType({byteLength: 32}).serialize(props.type.tree_getLength(props.type.struct_convertToTree(deserialized))))} */}

                  {/* {props.type.tree_getLength(props.type.struct_convertToTree(deserialized))} */}
                  {toHexString(
                    props.type
                      .struct_convertToTree(deserialized)
                      .getRoot(BigInt(3))
                  )}
                </td>
              </tr>
            )}

            {isCompositeType(props.type) ? (
              <>
                {/* {props.type.struct_getChunkCount(deserialized) > 1 && (
                  <tr>
                    <th scope="row">Merkle Proof by Leaf:</th>
                    <td colSpan={2}>
                      <table className="table">
                        <tbody>{showTree(props.type)}</tbody>
                      </table>
                    </td>
                  </tr>
                )} */}
                <tr>
                  <th scope="row">
                    Values
                    {isUnionType(props.type) && (
                      <>
                        <br />
                        {`{`}selector: {(deserialized as UnionObject).selector}
                        {`}`}
                      </>
                    )}
                    <br />({(data as unknown[]).length})
                  </th>
                  <td>
                    <CopyIcon/>
                  </td>

                  <td>
                    {isUnionType(props.type) ? (
                      <div className="text-break overflow-auto">
                        <InfoTable
                          type={
                            props.type.types[
                              (deserialized as UnionObject).selector
                            ]
                          }
                          data={(deserialized as UnionObject).value}
                          sszTypeName={nameString(
                            props.type.types[
                              (deserialized as UnionObject).selector
                            ]
                          )}
                        />
                      </div>
                    ) : isContainerType(props.type) ? (
                      Object.entries(props.type.fields).map(
                        ([key, type], idx) => {
                          return (
                            <div key={key} className="">
                              {key}:{" "}
                              <InfoTable
                                type={type}
                                data={props.data[key]}
                                sszTypeName={nameString(type)}
                              />
                            </div>
                          );
                        }
                      )
                    ) : (
                      <div className="text-break overflow-auto">
                        [{data.toString()}]
                      </div>
                    )}
                  </td>
                </tr>
              </>
            ) : (
              <tr>
                <th scope="row">Value</th>
                <td>
                  <CopyIcon/>
                </td>

                <td>
                  <div className="text-break overflow-auto">
                    {deserialized.toString()}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
