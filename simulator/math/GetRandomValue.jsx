export default function GetRandomValue(type) {


    let randomValue = type === "Boolean" ?
    getRandomBool() :
    type === "Uint8" ?
     getRandomUint(8) :
    type === "Uint16" ?
     getRandomUint(16) :
    type ==="Uint32" ?
     getRandomUint(32) :
    type === "Uint64" ?
     getRandomUint(64) :
    type === "Uint128" ?
     getRandomUint(128) :
    type === "Uint256" ?
     getRandomUint(256) :
     type === "BitVector" ?
     makeRandomBitVector() :
     type === "BitList" ?
     makeRandomBitList() :
     type === "Vector" ?
     makeRandomVector() :
     type === "List" ?
     makeRandomList() :
     type === "Container" ?
     makeRandomContainer() :
     makeRandomUnion();

     return randomValue

    function getRandomBasicType() {
        let types = ["Boolean", "Uint8", "Uint16", "Uint32", "Uint64", "Uint128", "Uint256"]
        let type = types[Math.floor(Math.random() * types.length)]
        return type
    }

    function getRandomUint(N) {
        let val = Math.floor(Math.random() * 2**N)
        let type = `Uint${N}`
        return [type, val]
    }

    function getRandomBool() {
        let bool = Math.random() > 0.5 ? true : false;
        return ["Boolean", bool];
    }

    function makeRandomBitVector() {
        let length = Math.floor(Math.random() * 2**16) + 1;
        return [`BitVector[${length}]`, "Root (BitVector)"]
    }

    function makeRandomBitList() {
        let limit = Math.floor(Math.random() * 2**16) + 1
        return [`BitList[${limit}]`, "Root (BitList)"]
    }

    function makeRandomList() {
        let type = getRandomBasicType();
        let limit = Math.floor(Math.random() * 2**16 + 1)
        return [`List[${type}, ${limit}]`, "Root (List)"]
    }

    function makeRandomVector() {
        let type = getRandomBasicType();
        let length = Math.floor(Math.random() * 2**16) + 1;
        return [`Vector[${type}, ${length}]`, "Root (Vector)"]
    }

    function makeRandomUnion() {
        return [`Union[...]`, "Root (Union)"]
    }

    function makeRandomContainer() {
        return [`Container[...]`, "Root (Container)"]
    }


    return 
}


