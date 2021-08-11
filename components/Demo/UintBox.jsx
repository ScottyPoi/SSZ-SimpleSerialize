export default function UintBox(props) {
  const size = props.size;
  let string = `0x${props.value}`;
  string = string.padEnd(66, "0");

  return (
    <div className="container">
        <div className='row justify-content-center py-4'>
            <div className='col-4 text-break border'>
      <p>
        <span style={{ color: "green" }}>{string.substr(0, 2)}</span>
        <span style={{ color: "blue" }}>{string.substr(2, size * 2)}</span>
        <span style={{ color: "red" }}>
          {string.substr(size * 2 + 2, 66 - size * 2)}
        </span>
      </p>

            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-4 border'>
      <p>
        {" "}
        <span style={{ color: "green" }}>{string.substr(0, 2)}</span>
        <span style={{ color: "blue" }}>{string.substr(2, size * 2)}</span>
      </p>
            </div>
        </div>
    </div>
  );
}
