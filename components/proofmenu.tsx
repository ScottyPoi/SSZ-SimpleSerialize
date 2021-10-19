import proofInterfaces from '../data/proofInterfaces'
export default function ProofMenu(props) {
    const keys = Object.keys(proofInterfaces)

  function showSubMenu() {
    return (
      <div className='box list-group'>
        {keys.map((func, idx) => {
          return (
            proofInterfaces[func] && (
                <button
                id={`${func}tab`}
                  type="button"
                  className={`list-group-item list-group-item-action ${props.active == props.name && `active`}`}
                  onClick={() => props.handleChange(func, null, true, proofInterfaces[func])}
                >
                  {/* <h6 className='text-start'>{mod}</h6> */}
                    <h6 className='text-end'>{func}</h6>
                  
                </button>
            )
          );
        })}

      </div>
    )
  }

  function handleClick() {
props.setSubMenu(showSubMenu());
props.setGroup(props.name);
props.resetSubs()
return
  }
  

  return (
      <button
        className={`list-group-item list-group-item-action ${props.active == props.name && `active`}`}
        type="button"
        id={`${props.name}menu`}
        onClick={() => handleClick()}
      >
        <h6>Proof</h6>
      </button>
  );
}
