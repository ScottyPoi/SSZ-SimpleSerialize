import BooleanControls from "./BooleanControls";
import UintNControls from "./uintNControls";
import ListControls from "./ListControls";
import VectorControls from "./VectorControls";
import BitListControls from "./BitListControls";
import BitVectorControls from "./BitVectorControls";
import ContainerControls from "./ContainerControls";
import UnionControls from "./UnionControls";
import { useState } from "react";
export default function Controls({ ...props }) {
  const [Type, setType] = useState("Boolean");

  return (
    <div className="container">
    
      <div className="d-flex flex-row ">
        <div className="col">
          <ul className="nav nav-tabs bg-secondary" id="typeTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                key="boolean-tab"
                id="boolean-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#boolean"
                onClick={() => setType("Boolean")}
              >
                Boolean
              </button>
            </li>
            <li key="uintn-tab" className="nav-item" role="presentation">
              <button
                id="uintn-tab"
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#uintn"
                onClick={() => setType("UintN")}
              >
                UintN
              </button>
            </li>

            <li key="bitvector-tab" className="nav-item" role="presentation">
              <button
                id="bitvector-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#bitvector"
                onClick={() => setType("BitVector")}
              >
                BitVector
              </button>
            </li>
            <li key="vector-tab" className="nav-item" role="presentation">
              <button
                id="vector-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#vector"
                onClick={() => setType("Vector")}
              >
                Vector
              </button>
            </li>
            <li key="bitlist-tab" className="nav-item" role="presentation">
              <button
                id="bitlist-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#bitlist"
                onClick={() => setType("BitList")}
              >
                BitList
              </button>
            </li>
            <li key="list-tab" className="nav-item" role="presentation">
              <button
                id="list-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#list"
                onClick={() => setType("List")}
              >
                List
              </button>
            </li>

            <li key="container-tab" className="nav-item" role="presentation">
              <button
                id="container-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#container"
                onClick={() => setType("Container")}
              >
                Container
              </button>
            </li>
            <li key="union-tab" className="nav-item" role="presentation">
              <button
                id="union-tab"
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="true"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#union"
                onClick={() => setType("Union")}
              >
                Union
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div>
          {Type === "UintN" ? (
            <UintNControls />
          ) : Type === "Boolean" ? (
            <BooleanControls />
          ) : Type === "BitVector" ? (
            <BitVectorControls />
          ) : Type === "BitList" ? (
            <BitListControls />
          ) : Type === "Vector" ? (
            <VectorControls />
          ) : Type === "List" ? (
            <ListControls />
          ) : Type === "Container" ? (
            <ContainerControls />
          ) : Type === "Union" ? (
            <UnionControls />
          ) : (
            <BooleanControls />
          )}
        </div>
      </div>
    </div>
  );
}
