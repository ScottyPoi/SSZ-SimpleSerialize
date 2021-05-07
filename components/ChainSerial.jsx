import { BasicType } from '@chainsafe/ssz';

export default function ChainSerial(props) {

    const array = new Uint8Array
    const serial = props.value
    serial.toBytes()
    function serializeToBytes(value) {
        let v = value;
      const MAX_BYTE = 0xff;
      for (let i = 0; i < this.byteLength; i++) {
        output[offset + i] = v & MAX_BYTE;
        v = Math.floor(v / 256);
      }
    return this.byteLength;
  }

    return (
        <div>
            <br />
            serial: {`${serial}`}
        </div>
    )
}