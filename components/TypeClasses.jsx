import classObj from "../data/ClassObj";

export default function TypeClasses(props) {
  const ssz = props.ssz;
  function classMenu(obj) {
    const keys = Object.keys(obj);
    if (keys.includes("subs")) {
      return (
        <li className="nav-item">
          <div className="row justify-content-start">
            <div className="col-2">
              <button
                type="button"
                className="btn btn-secondary m-1"
                onClick={() => props.handleChange(obj.name)}
              >
                {obj.name}
              </button>
            </div>
          </div>
          <div className="row justify-content-end">
            {obj.subs.map((sub) => {
              return (
                <div className="col-11">
                  <ul className="nav nav-pills">{classMenu(sub)}</ul>
                </div>
              );
            })}
          </div>
        </li>
      );
    } else if (keys.includes("name")) {
      return (
        ssz[obj.name] && (
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-secondary m-1"
              onClick={() => props.handleChange(obj.name)}
            >
              {obj.name}
            </button>
          </li>
        )
      );
    } else return;
  }

  return <div className="row">{classMenu(classObj)}</div>;
}
