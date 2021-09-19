export default function SSZMenu(props) {
    const ssz = props.ssz
    const name = props.name
    const list = [...props.lst];
    return (
      <div className="d-flex flex-row mx-3">
        <div className="col">
          <h3 className="text-center">{name}</h3>
          <ul className="nav nav-pills">
            {list.map((func, idx) => {
              return (
                ssz[func] && (
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-secondary m-1"
                      onClick={() => props.handleChange(func)}
                    >
                      {func}
                    </button>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    );
  }