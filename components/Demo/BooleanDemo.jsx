export default function Boolean() {
  return (
    <div>
      <div className="row justify-content-center">
        
        
        <p className='text-center'>as 32 Byte leaf:</p>
        <div className="col text-break border">
          <p>
            <span style={{ color: "blue" }}>0x</span>
            <span style={{ color: "green" }}>01</span>
            <span style={{ color: "red" }}>
              00000000000000000000000000000000000000000000000000000000000000
            </span>
          </p>
        </div>
      </div>
      <div classNaeme="row justify-content-center">
        <p className="text-center">^</p>
      </div>
      <div className="row justify-content-center border">
        <div className="co">
          <p className='text-center'>
            serialized: <span style={{ color: "blue" }}>0x</span>
            <span style={{ color: "green" }}>01</span>
          </p>
        </div>
      </div>
    </div>
  );
}
