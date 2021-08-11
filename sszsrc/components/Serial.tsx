import { BasicType } from "@chainsafe/ssz";
import {getSSZType, createRandomValue} from "../components/worker/helpers";


export default function Serial(sszType: BasicType<unknown> | CompositeType<object>, input: object | string | boolean | Uint8Array | undefined) {
    const type = sszType;
    const serialized = type.serialize(input);
    const root = type.hashTreeRoot(input);
    return {serialized, root};
  }