import * as interfacies from '../data/interfacies';

export default function Interfaces() {

    return (
        <div className='container'>
            {Object.keys(interfacies).sort()}
            {Object.keys(interfacies.Fork)}
        </div>
    )
}