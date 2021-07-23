import {getSSZType, createRandomValue} from "../components/worker/helpers";


export default function _createRandomValue(sszTypeName: string, forkName: string) {
    const type = getSSZType(sszTypeName, forkName);
    const value = createRandomValue(type);
    return value;
  }
