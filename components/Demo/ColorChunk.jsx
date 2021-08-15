export default function ColorChunk(props) {
  return (
    <div className='row text-break'>
      <p>
        <span style={{ color: "blue" }}> {props.value.substring(0, 2)} </span>
        <span>{props.value.substring(2)}</span>
      </p>
    </div>
  );
}
