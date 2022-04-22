import { useState } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";


const types = `
class sszType {
    constructor() {
    }

    this.serialize = // serialize to bytes
    this.deserialize = // deserialize from bytes
    this.hashTreeRoot = // 32 Byte merkle-tree root

}

class BasicType extends SszType {
    constructor() {
        this.chunkCount = 1;
        this.isVariableSize = false;
    }
}
`


const uint = `

class Boolean extends BasicType {
    constructor() {
        super();
        this.bitLength = 1

    }
}

class Uint extends BasicType {
    constructor(options) {
        super()
        this.bitLength = options.bitLength;
        this.hasVariableLength = false;
        this.defaultValue = 0
        
    }
}

class Uint8 extends Uint {
    constructor() {
        super({bitLength: 8})
    }
}
class Uint16 extends Uint {
    constructor() {
        super({bitLength: 16})
    }
class Uint32 extends Uint {
    constructor() {
        super({bitLength: 32})
    }
}
class Uint64 extends Uint {
    constructor() {
        super({bitLength: 64})
    }
}
class Uint128 extends Uint {
    constructor() {
        super({bitLength: 128})
    }
}
class Uint256 extends Uint {
    constructor() {
        super({bitLength: 256})
    }
}
}

`;

const vector = `
class Vector extends CompositeType {
    constructor(options){
    this.elementType = options.elementType;
    this.length = options.length
    }
}

class BitVector extends Vector {
    constructor(options) {
        super({elementType: bit, length: options.length})
    }
}

class ByteVector extends Vector {
    constructor(options) {
        super({elementType: byte, length: options.length})
    }
}

class Bytes32 extends ByteVector {
    constructor() {
        super({length: 32})
    }
}
`;

const list = `

class List extends CompositeType {
    constructor(options) {
    this.elementType = options.elementType;
    this.limit = options.limit;
    }
}

class BitList extends List {
    constructor(options) {
        super({elementType: bit, limit: options.limit})
    }
}

class ByteList extends List {
    constructor(options) {
        super({elementType: byte, limit: options.limit})
    }
}

`

export default function Examples() {
  const [examples, setExamples] = useState([
    uint,
    vector,
    list
  ]);
  const [curExample, setCurExample] = useState(uint);

  const examps = {
      types: types,
    uint: uint,
    vector: vector,
    list: list
  };

  return (
    <div className="col">
      {Object.entries(examps).map(([k, v]) => {
        return (
          <div className="row">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setCurExample(v)}
            >
              {k}
            </button>
          </div>
        );
      })}
      <CopyBlock text={curExample} language="javascript" theme={a11yDark} />
    </div>
  );
}
