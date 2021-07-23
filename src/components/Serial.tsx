import { BasicType } from "@chainsafe/ssz";
import {getSSZType, createRandomValue} from "../components/worker/helpers";


export default function serialize(sszType: BasicType<unknown> | CompositeType<object>, input: object) {
    const type = sszType;
    const serialized = type.serialize(input);
    const root = type.hashTreeRoot(input);
    return {serialized, root};
  }