import { NumberUintType } from "./uint";
import { BooleanType } from "./boolean";

export default function byteType() {
  return <NumberUintType byteLength={1}></NumberUintType>;
}
export function number32Type() {
  return <NumberUintType byteLength={4}></NumberUintType>;
}
export function booleanType() {
  return <BooleanType />;
}
