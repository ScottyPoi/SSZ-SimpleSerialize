import Controls from '../simulator/controls/Controls';

export default function Visualizer(props) {
    return (
        <div className='container' style={{backgroundColor: '#e1ddff', color: 'black'}}>
            <div className='row'>
                <Controls />
            </div>
        </div>
    )
}