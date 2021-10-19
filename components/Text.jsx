import { useState, useEffect } from "react";
import styles from './Text.module.css'

function splitText(text) {
  return text.split(" ");
}

export default function Text(props) {
  const [text, setText] = useState("jibboo for you");
  const [active, setActive] = useState(0);

function isBold(word) {
    const boldWord = active == word ? styles.boldWord : styles.plainWord
    return boldWord
}

  return (
    <div className="container">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      Yo
      <p>{text}</p>
      {splitText(text).map((word, idx) => {
        return (
          <div key={idx} className="row justify-content-start">
              <div className='col-2'><h1 onMouseOver={() => setActive(idx)}><p>{word}</p></h1></div>
              <div className='col-2'><p className={`${isBold(idx)}`}>{idx}</p></div>
          </div>
        );
    })}{" "}
    <p>{active}</p>
    </div>
  );
}
