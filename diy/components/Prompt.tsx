/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { EventEmitter } from "stream";

type ProptProps = {
    log: EventEmitter
}


export default function Prompt(props: ProptProps) {
    
    const [typeDefinitions, setTypeDefinitions ] = useState<Record<any, string>>( {
        BooleanType: "boolean: true or false",
        UintType: "uintN: N-bit unsigned integer (where N in [8, 16, 32, 64, 128, 256])",
        VectorType: "vector: ordered fixed-length homogeneous collection, with N values ",
        ListType: "list: ordered variable-length homogeneous collection, limited to N values ",
        BitVectorType: "bitvector: ordered fixed-length collection of boolean values, with N bits ",
        BitListType: "bitlist: ordered variable-length collection of boolean values, limited to N bits ",
        UnionType: "union: union type containing one of the given subtypes ",
        ContainerType: "container: ",
        Example_MessageType: "Container<sndId: uint16, rcvId: uint16, message: List<elementType: Uint<byteLength: 8>, limit: 1024>>"
    })
    const [message, setMessage] = useState("");



    
    props.log.on("TypeSelected", (t) => {
        setMessage(typeDefinitions[t])
    })




    return (
        <h4>
            {message}
        </h4>
    )


}