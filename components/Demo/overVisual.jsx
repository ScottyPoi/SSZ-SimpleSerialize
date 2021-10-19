import { Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import FullOverview from "./FullOverview";

export default function OverVisual(props) {
    return (
        <div className='container p-4 text-center'>
            <ReactMarkdown>{props.text}</ReactMarkdown>
            <div className='row'>
            <div className='btn-group'>
            </div>
            </div>

        </div>
    )
}