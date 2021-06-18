export default function ContainerText(props) {
  let _chunk = props.chunk;
  let _details = props.detail
  let _length = props.length;
  let _idx = props.idx;
  let numberOfLeaves = props.numberOfLeaves;
  let numberOfChunks = props.numberOfChunks;
  let emptyLeaves = props.emptyLeaves;

  const chunk_count = 5;
  let values_per_chunk = 256 / props.size;
  const size = props.size;

  const split = (_length * 2) % 64;
  let red = _idx + 1 == chunk_count ? 0 : _idx % 2 == 1 ? 240 : 0;
  let green = _idx + 1 == chunk_count ? 160 : 0;
  let blue = _idx + 1 == chunk_count ? 0 : _idx % 2 == 0 ? 256 : 180;
  let color = `rgb(${red},${green},${blue})`;

  function getLength() {
    return props.length;
  }

  function getSize() {
    return props.size;
  }

  let valueBlocks = [];

  function parseChunk() {
    let valueBlocks = [];
    for (let i = 0; i < _chunk.length; i += size / 4) {
      valueBlocks.push(_chunk.substring(i, i + size / 4));
    }

    if (_idx === chunk_count - 1) {
      let len = getLength();
      let size = getSize();
      let bits = valueBlocks.slice(0, len % (256 / size));
      let bitBlocks = [];
      let pads = valueBlocks.slice(
        (len % (256 / size)) + 1,
        valueBlocks.length - 1
      );
      let lengthBit = pads[0];
      bits = bits;
      for (let i = 0; i < bits.length; i += size / 4) {
        bitBlocks.push([bits.slice(i, i + size / 4)]);
      }
      return (
        <div className='col' style={{ border: 'solid green'}}>
        <div className="row"
            style={{
              backgroundColor: "green",
              color: "gold",
            }}>
          
            <text style={{ fontSize: "small" }}>0x{_chunk}</text>
</div>
            {_details}
      
          </div>
      );
    } else {
      return (
        <div className='col'
    style={{ border: `solid ${color}`,}}>

        <div
          className="row"
            style={{
             
              backgroundColor: color,
              color: "gold",
            }}
          >
            <text style={{ fontSize: "small", margin: "0" }}>0x{_chunk}</text>
          </div>
          {_details}
</div>
      );
    }
  }
  const parsed = parseChunk();

  return parsed;
}
