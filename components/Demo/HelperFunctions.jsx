import ReactMarkdown from "react-markdown";
import DisplayFunctions from '../sandbox/DisplayFunctions';

export default function HelperFunctions(props) {
    return (
        <div className='container'>
            <div className='row'>
            <ReactMarkdown>{props.text}</ReactMarkdown>
                </div>
                <div className='row'>
<DisplayFunctions />
                </div>
           
        </div>
    )
}