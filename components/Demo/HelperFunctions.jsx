import ReactMarkdown from "react-markdown";

export default function HelperFunctions(props) {
    return (
        <div className='container'>
            <ReactMarkdown>{props.text}</ReactMarkdown>
        </div>
    )
}