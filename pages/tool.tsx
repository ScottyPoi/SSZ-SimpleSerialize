export default function tool() {
  const windows = [
    "tools for type, make value",
    "Look at thing",
    "Proof and Nav tools",
    "visualize proof"
];

  const col1 = [
      "Choose Type",
      "Make Value (or upload)",
      "Type Functions",
      "Value Functions",
      "Tree Functions"
  ]

  const col2 = [
"deserialized JSON/YAML",
"console return for functions",
  ]

  const col3 = [
"Proof and other functions",
"console return for proof functions"
  ]

  const col4 = [

  ]

  const cols = [col1, col2, col3, col4]

  return (
    <div className="container border border-3">
      <div
        className="row row-auto-cols m-4 p-4"
        style={{ backgroundColor: "#abcdef" }}
      >
        {windows.map((window, idx) => {
          let str = ((windows.length * idx) % 9).toString();
          let color = `#`.padEnd(7, str);
          return (
            <div
              className="col border g-3 m-4"
              style={{ backgroundColor: color, paddingBottom: "100%" }}
            >
              <h1 style={{ color: "white" }}>{window}</h1>
            {cols[idx].map((row, idx) => {
                let rowColor = `#a`.padEnd(7, (idx*7%9).toString())
                return (
                <div className='row border m-3' style={{ backgroundColor: rowColor, paddingBottom: "100%"}}>
                    {row}
                </div>
            )})}
            </div>
          );
        })}
      </div>
    </div>
  );
}
