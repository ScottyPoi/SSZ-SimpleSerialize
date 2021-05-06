export default function BooleanForm(props) {

    const value = props.value;
    const changeValue = props.changeValue


    return (
        <form>
          <label>
            <select value={value} onChange={changeValue}>
              <option value="1">true</option>
              <option value="0">false</option>
            </select>
          </label>
        </form>
    )
}