import { Type } from "@chainsafe/ssz";
import EventEmitter from "events";
import { Dispatch, SetStateAction, useState } from "react";

interface AliasModalProps {
    type: Type<unknown>
    typeName: string
    addToList: (alias: string, type: Type<unknown>) => void
    SimpleSerialize: EventEmitter
    setType: Dispatch<SetStateAction<Type<unknown>>>
    setTypeName: Dispatch<SetStateAction<string>>
}

export default function AliasModal(props: AliasModalProps) {
    
    const [name, setName] = useState<string>(props.typeName)
    const [added, setAdded] = useState<boolean>(false)

    function handleClick() {
        props.addToList(name, props.type)
        props.setTypeName(name)
        props.setType(props.type)
        setAdded(true)
    }

    return (
        <div className="modal" id={`AliasModal`} tabIndex={-1}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>
                            Add Type Alias
                        </h5>
                        <button type='button' className="btn-close" data-bs-dismisss='modal' aria-label="close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{props.typeName}</p>
                        {added ? "ADDED" : (
                            <>Alias Type Name: <input className="form-input" placeholder={props.typeName} onChange={(e) => setName(e.target.value)} />
</>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type='button' className="btn btn-secondary" data-bs-dismiss='modal'>Close</button>
                        <button type='button' className="btn btn-primary" data-bs-dismiss='modal' onClick={handleClick}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}