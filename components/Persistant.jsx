import * as psm from '@chainsafe/persistent-merkle-tree'
import ShowFunction from './ShowFunction'

export default function Persistant(props) {
    return (
        <div className='row row-cols-4'>
            {Object.entries(psm).map(([key, val]) => {
                return (
                    <div className='col' >
                        {key}: {typeof val == "function" ? <ShowFunction mod={psm} func={key} /> : "not a function"}
                    </div>
                )
            })}
        </div>
    )
}