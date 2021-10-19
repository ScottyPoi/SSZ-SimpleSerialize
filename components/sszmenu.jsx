import * as ssz from "@chainsafe/ssz";
import { useState } from "react";
export default function SSZMenu(props) {


  const ssz = props.ssz;
  const name = props.name;
  const list = [...props.lst];
  const mod = ssz == ssz ? "ssz" : "pmt"

  function showSubMenu() {
    return (
      <div className='box list-group'>
        {list.map((func, idx) => {
          return (
            ssz[func] && (
                <button
                id={`${func}tab`}
                  type="button"
                  className={`list-group-item list-group-item-action ${props.active == props.name && `active`}`}
                  onClick={() => props.handleChange(func, ssz)}
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
        <h6>{name}</h6>
      </button>
  );
}
