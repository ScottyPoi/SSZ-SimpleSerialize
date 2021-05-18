import { CopyBlock, dracula } from "react-code-blocks";
import { useState } from "react";
import { sample, TopBar, getpoweroftwoceil} from "./components";


export default function Functions() {

  const [language, changeLanguage] = useState("javascript");
  const [funct, changeFunct] = useState(getpoweroftwoceil)
  const [languageDemo, changeDemo] = useState(getpoweroftwoceil["javascript"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  return (
    <div>
      <TopBar
        language={{
          value: language,
          onChange: (e) => {
            changeDemo(funct[e.target.value]);
            return changeLanguage(e.target.value);
          },
          options: Object.keys(funct).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          )),
        }}
        toggle={{
          checked: lineNumbers,
          onChange: (e) => toggleLineNumbers(!lineNumbers),
        }}
      />
      <div>
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={false}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}
