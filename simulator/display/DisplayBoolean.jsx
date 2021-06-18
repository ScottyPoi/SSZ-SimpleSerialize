import BooleanText from "../graphics/text/BooleanText";
import BuildTree from "../graphics/trees/BuildTree";
import { createHash } from "crypto";
import styles from "../graphics/styles/UintText.module.css";
import HashRootText from "../graphics/text/HashRootText";
export default function BooleanDisplay(props) {
  function toHexString(byteArray) {
    return Array.prototype.map
      .call(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
      })
      .join("");
  }

  let value = props.value;
  let serialized = `0x${toHexString(props.serialized)}`;
  let bytes32 = `0x${toHexString(props.bytes32)}`;
  let hash = createHash("sha256");
  hash.update(props.bytes32);
  hash = hash.digest("hex");
  return (
    <div className="col">
      <div className={`row justify-content-center text-break`}>
        <HashRootText hash={hash} displaySize='xx-large' />
      </div>
      <div className="row justify-content-center">
            <BuildTree NUMBER_OF_VALUES={1} />
          </div>
          <div className="row justify-content-center text-break">
        <BooleanText serialized={serialized} asBytes32={bytes32} />
      </div>
    </div>
  );
}
