
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import toc from "remark-toc";
import slug from "remark-slug";

export default function OverviewSection(props) {
    const topic = props.topic;
    const text = props.text;
    const prop = props.prop;
    const idx = props.idx;
    return (
        <>
        <div className='col'>
            Milly and {prop} {topic} and {idx}
        </div>
        <div className='col'>
            Milly and <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    </>
    )
}