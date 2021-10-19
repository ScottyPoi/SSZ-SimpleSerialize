import * as React from "react";

function parse(input, size) {
  return (
    <p>
      <span style={{ color: "blue" }}>{input.substring(0, 2)}</span>
      <span style={{ color: "green" }}>{input.substring(2, size)}</span>
      <span style={{ color: "red" }}>{input.substring(size)}</span>
      {input}
    </p>
  );
}

export default function NamedOuputWalk(size, value, hash) {
  return (
    <div className="container">
      {hash ? (
        <textarea
          className="form-control"
          readOnly={true}
          value={parse(value, size)}
        />
      ) : (
        <input
          className="form-control"
          type="text"
          readOnly={true}
          value={parse(value, size)}
        />
      )}
    </div>
  );
}
