import { CopyBlock, monoBlue } from "react-code-blocks";
import { useState, useEffect } from "react";
import TopBar from "./Components/TopBar";

import * as helpers from "./components";

export default function DisplayFunctions() {
  const [language, changeLanguage] = useState("python");
  const [funct, changeFunct] = useState(helpers.getpoweroftwoceil);
  const [demoLanguage, changeDemoLanguage] = useState(
    helpers.getpoweroftwoceil["python"]
  );
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const [helpies, setHelpies] = useState(helpers);
  const [funlabel, setfunlabel] = useState(helpies[funct]);

  const theme = monoBlue

  useEffect(() => {
    changeDemoLanguage(funct["python"]);
  }, [funct]);

  function toggleFunction(event) {
    changeFunct(helpers[event]);
    changeDemoLanguage(helpers[event]["python"]);
  }

  console.log(helpers);
  console.log(typeof helpers);
  console.log(Object.keys(helpers));
  console.log(Object.keys(funct));
  console.log(typeof Object.keys(helpers)[3]);
  console.log(typeof Object.keys(funct)[1]);

  function handleLangChange(lang) {
    changeDemoLanguage(funct[lang]);
    changeLanguage(lang);
  }

  return (
    <div className="row">
      <div className="col-3">
        {" "}
        <div className='btn-group-vertical'>
        {Object.keys(helpies).map((func, idx) => {
          return (
              <button type="button"  onClick={() => toggleFunction(func)} className='btn border btn-light'>{func}</button>
              );
            })}
            </div>
      </div>
      <div className="col-9">
        <h5>{}</h5>
        <CopyBlock
          language={language}
          text={demoLanguage}
          showLineNumbers={false}
          theme={theme}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}
