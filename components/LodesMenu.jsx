import * as lodes from "@chainsafe/lodestar-types";

export default function LodesMenu(props) {
  const keys = Object.keys(lodes);

  const functions = keys.map((key) => {
    return typeof lodes[key] == "function" && key;
  });
  const objects = keys.map((key) => {
    return typeof lodes[key] == "object" && key;
  });

  function handleFunctionClick(func) {
    props.handleChange(func, lodes);
  }

  function handleMenuClick(func) {
    props.setSubMenu(
      <div className="col">
        {" "}
        <div className="row">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id={`${func}button`}
            onClick={() => handleFunctionClick(func)}
          >
            <h6 className="text-start">{func}</h6>
          </button>
        </div>
        {Object.keys(lodes.ssz).map((k) => {
            return (
        <div className="row">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id={`${func}button`}
            onClick={() => handleSubMenuClick(lodes.ssz[k])}
          >
            <h6 className="text-start">{k}</h6>
          </button>
        </div>

            )
        })}
      </div>
    );
    props.setSubSubMenu(null);
  }
  function handleSubMenuClick(obj) {
    const list = Object.keys(obj);
    props.setSubSubMenu(
      <div className="col">        
      <div className="row">
      <div className="col">        
        {list.map((func) => {
            return (
              <div className="row">
      <h6 className='text-center'>{func}</h6>              
</div>
          );
        })}
</div>
</div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col">
        {functions.map((func) => {
          return (
            lodes[func] && (
              <div className="row">
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  id={`${func}button`}
                  onClick={() => handleMenuClick(func)}
                >
                  <h6 className="text-start">{props.name}</h6>
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
