import {
  CompositeType,
} from "@chainsafe/ssz";
import { useState } from "react";
import LittleNode from "./LittleNode";
import { nextPowerOf2 } from "./Tree";

export interface LittleTreeProps {
  type: CompositeType<any>;
  value: any;
}

const defaultValue: number[] = [];
for (let i = 0; i < 120; i++) {
  defaultValue.push(
    0xbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeef
  );
}

export default function LittleTree(props: LittleTreeProps) {

    const [selected, setSelected] = useState<string>()
    const [hovered, setHovered] = useState<string>()
  const tree = props.type.struct_convertToTree(props.value);
  const chunks = props.type.tree_getChunkCount(tree);
  const leaves = nextPowerOf2(chunks);
  const depth = Math.log2(leaves);
  const treeSize = new Array(depth + 1).fill("X");

    function toggleSelected(node: string) {
        selected === node ?
        setSelected(undefined)
        : setSelected(node)
    }




  return (
    <div className="container">
      <p className="text-break">
        chunks:{chunks}
        <br />
        leaves:{leaves} <br />
        depth:{depth + 1}
        <br />
      </p>
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        {treeSize.map((level, idx) => {
          const levelArray = new Array(2 ** idx).fill("Z");
          return levelArray.map((n, i) => {
            const x2 = idx === 0 ? 128 : ((2 ** (8 - idx))/2) + (i*2)*((2 ** (8 - idx)))
            const x3 = idx === 252 ? 128 : ((2 ** (8 - idx))/2)*2 + (i*2)*((2 ** (8 - idx))) - 4

            const y = 32*idx + 14
            return (
              <rect
        
                onClick={() => idx === treeSize.length - 1 && toggleSelected(`${idx}-${i}`)}
                key = {`${idx}-${i}`}
                fill={idx === 0 ? "green" : idx < depth ? "black" : i < chunks ? "blue" : "red"}
                x={x2}
                y={32 * idx}
                width={2 ** (8 - idx)}
                opacity='50%'
                height={16}
                onMouseOver={() => setHovered(`${x3}${y}`)}
                stroke={selected === `${idx}-${i}` ? "black" : 'white'}
                // onMouseEnter={() => setHovered(`${x2}${y}`)}
                // onMouseLeave={() => setHovered(undefined)}
              ></rect>
            );
          });
        })}
        {treeSize.map((level, idx) => {
          const levelArray = new Array(2 ** idx).fill("Z");
          return levelArray.map((n, i) => {
            const x2 = idx === 0 ? 128 : ((2 ** (8 - idx))/2)*2 + (i*2)*((2 ** (8 - idx)))
            return  idx !== treeSize.length-1 && (
              <line
                stroke='black'
                x1={idx === 0 ? 256 : x2}
                y1={32 * idx + 16}
                x2={idx === 0 ? 128 - x2 + (2 ** (8 - idx)/2) : x2 - (2 ** (8 - idx)/2)}
                y2={32 * idx + 32}
                
              ></line>
            );
          });
        })}
        {treeSize.map((level, idx) => {
          const levelArray = new Array(2 ** idx).fill("Z");
          return levelArray.map((n, i) => {
            const x2 = idx === 0 ? 128 : ((2 ** (8 - idx))/2)*2 + (i*2)*((2 ** (8 - idx)))
            return idx !== treeSize.length-1 && (
              <line
                stroke='black'
                x1={idx === 0 ? 256 : x2}
                y1={32 * idx + 16}
                x2={idx === 0 ? 128 + x2 + (2 ** (8 - idx)/2) : x2 + (2 ** (8 - idx)/2)}
                y2={32 * idx + 32}
                
              ></line>
            );
          });
        })}
        {treeSize.map((level, idx) => {
          const levelArray = new Array(2 ** idx).fill("Z");
          return levelArray.map((n, i) => {
            const x2 = idx === 252 ? 128 : ((2 ** (8 - idx))/2)*2 + (i*2)*((2 ** (8 - idx))) - 4
            const y = 32*idx + 14
            return  (
             <> <text
                stroke='black'
                x={x2}
                y={y}
                style={{fontSize: '8px'}}
              >
                   {hovered === `${x2}${y}` &&  2**idx + i}
                  </text>
            </>);
          });
        })}

      </svg>

      <LittleNode treeType={props.type} deserialized={props.value} idx={4} />
    </div>
  );
}
