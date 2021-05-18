import { CopyBlock, dracula } from "react-code-blocks";
import { useState, useEffect } from "react";
import { sample, TopBar, getpoweroftwoceil, getpoweroftwofloor} from "./components";


export default function Functions() {

  const [language, changeLanguage] = useState("python");
  const [funct, changeFunct] = useState(getpoweroftwofloor)
  const [languageDemo, changeDemo] = useState(getpoweroftwofloor["python"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);

  useEffect(() => {
    changeDemo(funct["python"])
  }, [funct]);

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
