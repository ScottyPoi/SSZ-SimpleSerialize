import styles from "../styles/UintText.module.css";

function pair(bits) {
  let pairs = []
  let array = Array.from(bits);
  for (let i=0;i<array.length;i+=2) {
pairs.push(array.slice(i,i+2))
  };
  return pairs
};

export default function BitListText(props) {
  // _chunk is an array of hex strings

  let _chunk = props.chunk;
  let _length = props.length;
  let _idx = props.idx;
  let _limit = props.limit;

  const chunk_count = props.chunk_count;

  let red = _idx + 1 == chunk_count ? 0 : _idx % 2 == 1 ? 240 : 0;
  let green = _idx + 1 == chunk_count ? 160 : 0;
  let blue = _idx + 1 == chunk_count ? 0 : _idx % 2 == 0 ? 256 : 180;
  let color = `rgb(${red},${green},${blue})`;
      let reversed = Array.from(_chunk).reverse();
      reversed = reversed.join("");
  function parseChunk() {
    if (_idx === 0 && chunk_count === 1) {
      let len = _length * 2;
      let split = len % 512;
      let split2 = split + 2;
      let pads = _chunk.substring(split + 2, 512);
      let lengthBit = _chunk.substring(split, split + 2);
      let fulls = _chunk.substring(0, split);
      let bits = [];
      for (let i = 0; i < fulls.length; i += 2) {
        bits.push(fulls.substring(i, i + 2));
      }
      let pad = [];
      for (let i = 0; i < pads.length; i += 2) {
        pad.push(pads.substring(i, i + 2));
      }


      return (
        <div className="row text-break ">
          <div className="col">
          <div className="row" style={{border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div> 

            <div
              className="row"
              style={{ border: `solid ${color}`, display: `block` }}
            >
              <span className={`${styles.hex}`}>
                {bits.map((value, idx) => {
                  return (
                    <span key={`bit${idx}`} style={{ border: "solid green 1px" }}>{value}</span>
                  );
                })}
                ,<span className={`${styles.delimeter}`}>{lengthBit}</span>
                <span className={`${styles.padding}`}>
                  {pad.map((value, idx) => {
                    return (
                      <span key={`pad${idx}`} style={{ border: "solid green 1px" }}>{value}</span>
                    );
                  })}
                </span>
              </span>
            </div>
          </div>
        </div>
      );
    } else if (
      _length <= _idx * 256 &&
      _idx == chunk_count - 1 &&
      chunk_count > 1 
    ) {
      let split = 256 - (_limit % 256);
      let split2 = _length >= _idx * 256 ? 256 - (_length % 256) : 255;
      let bits = _chunk.slice(split);
      let delimeter = _chunk[split];
      let empties = _chunk.slice(split, split2);
      let fulls = _chunk.slice(split2);
      let pads = _chunk.slice(0, split - 1);

      return (
        <div className="row text-break ">
                    <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid black 1px`, color: 'gold', backgroundColor: 'red'}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid red`}}
          >
            <span className={`${styles.hex}`}>
              {/* {_length >= _idx * 256 ? `${fulls.reverse().toString()},` : null} */}
              <span className={`${styles.empties}`}>
                {/* {empties.reverse().toString()}, */}
              </span>
              <span className={`${styles.padding}`}>
                {pair(_chunk).map((pair, idx) => {
                  return <span key={`pair${idx}`} style={{border: 'solid red 1px'}}>{pair}</span>
                })}
              </span>
            </span>
          </div>
          </div>
          </div>
        </div>
      );
    } else if (
      _length < (_idx + 1) * 256 &&
      _idx == chunk_count - 1 &&
      chunk_count > 1
    ) {
      let split = (_length*2 % 512);
      let bits = _chunk.substring(0,split);
      let lengthBit = _chunk.substring(split, split+2);

      let pads = _chunk.substring((split+2));

      return (
        <div className="row text-break ">
                    <div className="col">
          <div className="row" style={{border: 'solid green 1px', color: 'gold', backgroundColor: 'green'}}>0x{parseInt(reversed, 2).toString(16)}</div> 
          <div
            className="col"
            style={{ border: `solid green`, display: `block` }}
          >
            <span className={`${styles.hex}`}>
              {pair(bits).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: 'solid green 1px'}}>{pair}</span>
              })}
              <span style={{ backgroundColor: "black", color: "gold"}}>{lengthBit}</span>
              <span className={`${styles.padding}`}>
                {pair(pads).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: 'solid red 1px'}}>{pair}</span>
              })}
              </span>
            </span>
          </div>
          </div>
        </div>
      );
    } else if (_idx == chunk_count - 1 && chunk_count > 1) {
      let split = 256 - (_limit % 256);
      let split2 = _length >= _idx * 256 ? 256 - (_length % 256) : 255;
      let bits = _chunk.slice(split);
      let delimeter = _chunk[split];
      let empties = _chunk.slice(split, split2);
      let fulls = _chunk.slice(split2);
      let pads = _chunk.slice(0, split - 1);

      return (
        <div className="row text-break ">
                              <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid red`, display: `block` }}
          >
            <span className={`${styles.hex}`}>
              {/* {_length >= _idx * 256 ? fulls.reverse().toString() : null}, */}
              <span className={`${styles.empties}`}>
                {/* {empties.reverse().toString()} */}
              </span>
              <span className={`${styles.padding}`}>
                {pair(_chunk).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: `solid ${color} 1px`}}>{pair}</span>
              })}
              </span>
            </span>
            {`]`}
          </div></div></div>
        </div>
      );
    } else if (
      _idx < chunk_count &&
      chunk_count > 1 &&
      _length > (_idx + 1) * 256
    ) {
      let split = 256 - (_limit % 256);
      let split2 = _length < 256 ? 255 - _length : 255;
      let bits = _chunk.slice(split);
      let delimeter = _chunk[split];
      let empties = _length < 256 ? _chunk.slice(0, split2) : [];
      let fulls = _length < 256 ? _chunk.slice(split2) : _chunk;
      let pads = _chunk.slice(0, split - 1);

      return (
        <div className="row text-break ">
                              <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid  ${color}`, display: `block` }}
          >
            <span style={{ color: color }}>
              {pair(_chunk).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: `solid ${color} 1px`}}>{pair}</span>
              })}
              <span className={`${styles.empties}`}>
                {/* {empties.reverse().toString()} */}
              </span>
            </span>
          </div>
        </div></div></div>
      );
    } else if (_idx === 0 && chunk_count > 1) {
      let split = (_length*2 % 512);
      let split2 = _length < 256 ? 255 - _length : 255;
      let bits = _chunk.substring(0,split);
      let lengthBit = _chunk.substring(split, split+2);
      let pads = _chunk.substring(split+2);

      return (
        <div className="row text-break ">
          <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: 'green'}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid  green`, display: `block` }}
          >
            <span className={`${styles.hex}`}>
              {pair(bits).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: 'solid green 1px'}}>{pair}</span>
              })}
              <span className={`${styles.delimeter}`}>{lengthBit},</span>
              <span className={`${styles.padding}`}>
                {pair(pads).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: 'solid red 1px'}}>{pair}</span>
              })}
              </span>
            </span>
          </div>
        </div></div></div>
      );
    } else if (props.empty) {
      return (
        <div className="row text-break ">
          <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid ${color}`, display: `block`, color: color }}
          >
            <span className={`${styles.hex}`}>
              <span className={`${styles.empties}`}>
                {_chunk}eggs
              </span>
            </span>
          </div></div></div>
        </div>
      );
    } else if (
      _length >= _idx * 256 &&
      _length < (_idx + 1) * 256 &&
      _limit >= (_idx + 1) * 256
    ) {
      let split = (_length*2 % 512);
      // let fulls = _chunk.slice(split).reverse();
      let bits = _chunk.slice(0, split);
      let lengthBit = _chunk.substring(split, split+2);
      let pads = _chunk.substring((split+2))
      return (
        <div className="row text-break ">
          <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid green`, display: `block` }}
          >
            <span className={`${styles.hex}`}>
              {pair(bits).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: 'solid green 1px'}}>{pair}</span>
              })}
              <span className={`${styles.delimeter}`}>{lengthBit}</span>
              <span className={`${styles.padding}`}>
                {pair(pads).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: 'solid red 1px'}}>{pair}</span>
              })}
              </span>
            </span>
          </div></div></div>
        </div>
      );
    } else if (_length > (_idx + 1) * 256) {
      return (
        <div className="row text-break ">
          <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div
            className="col"
            style={{ border: `solid ${color}`, display: `block`, color: color }}
          >
            <span>{_chunk}gofuckyaself,</span>
            {`]`}1
          </div>
        </div></div></div>
      );
    } else {
      return (
        <div className="row text-break">
          <div className="col">
          <div className="row justify-content-center" ><div className='col d-inline-flex' style={{justifyContent: 'center' ,border: `solid ${color} 1px`, color: 'gold', backgroundColor: color}}>0x{parseInt(reversed, 2).toString(16)}</div>          </div>
<div className='row'>
          <div style={{ color: "red", border: `solid ${color}` }}>                {pair(_chunk).map((pair, idx) => {
                return <span key={`pair${idx}`} style={{ border: `solid ${color} 1px`}}>{pair}</span>
              })}</div>
        </div></div></div>
      );
    }
  }
  const parsed = parseChunk();

  return parsed;
}
