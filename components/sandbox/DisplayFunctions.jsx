import { CopyBlock, dracula } from "react-code-blocks";
import { useState, useEffect } from "react";
import TopBar from './Components/TopBar';

import * as helpers from './components';

export default function DisplayFunctions() {
  const [language, changeLanguage] = useState("python");
  const [funct, changeFunct] = useState(helpers.getpoweroftwoceil);
  const [languageDemo, changeDemo] = useState(helpers.getpoweroftwoceil["python"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const [helpies, setHelpies] = useState(helpers)
  const [funlabel, setfunlabel] = useState(helpies[funct])



  useEffect(() => {
    changeDemo(funct["python"]);
  }, [funct]);

  function toggleFunction(event) {
    changeFunct(helpers[event.target.value])
    changeDemo(helpers[event.target.value]["python"])
  }

  console.log(helpers);
  console.log(typeof helpers)
  console.log(Object.keys(helpers))
  console.log(Object.keys(funct))
  console.log(typeof Object.keys(helpers)[3])
  console.log(typeof Object.keys(funct)[1])

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
        selectfunction={{
          value: helpies[funct],
          onChange: (e) => {
            return toggleFunction(e)
          },
          options: Object.keys(helpies).map((key) => (
            <option key={key} value={key}>
            {key}
            </option>
          )),
        }}
      ></TopBar>
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
