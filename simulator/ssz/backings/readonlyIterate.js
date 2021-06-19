import {isTreeBacked, ValueOf} from "./tree";

export function readonlyValues(obj) {
  if (isTreeBacked(obj) && obj.readonlyValues) {
    return obj.readonlyValues();
  } else {
    return Object.values(obj);
  }
}

export function readonlyEntries(obj) {
  if (isTreeBacked(obj) && obj.readonlyEntries) {
    return obj.readonlyEntries();
  } else {
    return Object.entries(obj);
  }
}
