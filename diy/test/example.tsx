

import { NumberUintType, ListType, ContainerType, toHexString } from "@chainsafe/ssz";


export default function Example() {

    const ExampleMessageType = new ContainerType({fields: {
        sndId: new NumberUintType({byteLength: 16}),
        rcvId: new NumberUintType({byteLength: 16}),
    payload: new ListType({elementType: new NumberUintType({byteLength: 8}), limit: 2048})
}})


const message = {
    sndId: 12,
    rcvId: 13,
    payload: [1,2,3,4,5]
}

const serialized: Uint8Array = ExampleMessageType.serialize(message);
const deserialized = ExampleMessageType.deserialize(serialized);
const equals = ExampleMessageType.equals(message, deserialized)

return (
    <div>


message: {Object.entries(message).toString()};
serialized: {toHexString(serialized)};
deserialized: {Object.entries(deserialized).toString()};
equals(message, deserialized) = {equals.toString()};
    </div>
)
// {sndId: 12, rcvId: 13, payload: [1,2,3,4,5]}
// 0x___
// {sndId: 12, rcvId: 13, payload: [1,2,3,4,5]}
// true


}