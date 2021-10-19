import * as lst from "@chainsafe/lodestar-types";

function parse(obj) {
  return (
    <div className="col">
      {Object.keys(obj)
        .sort()
        .map((k) => {
          const type = typeof obj[k];
          return type == "object" ? k != "_typeSymbols" && k != "fieldInfos" && (
            <div className="row">
              {k}: {parse(obj[k])}
            </div>
          ) : (
            type != "undefined" && (
              <div className="row">{`${k}: ${
                type == "number"
                  ? obj[k]
                  : type == "boolean"
                  ? obj[k]
                  : type == "function"
                  ? obj[k].toString()
                  : type
              }`}</div>
            )
          );
        })}
    </div>
  );
}

export default function Lodes() {
  return (
    <div className="container">
      <div className="row">{parse(lst.ssz.altair)}</div>
    </div>
  );
}
