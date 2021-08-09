import TypingVisual from "./TypingVisual"
import AliasesVisual from "./AliasesVisual"
export default function OverviewVisual(props) {
    
    const section = props.topic == "Typing" ? (<TypingVisual />) : (<AliasesVisual />)

    
    return (
        <div className='row'>
            Fee
            {props.topic}
            {section}
        </div>
    )
}