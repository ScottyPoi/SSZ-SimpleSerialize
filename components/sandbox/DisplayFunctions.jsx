import { CopyBlock, monoBlue } from "react-code-blocks";
import { useState, useEffect } from "react";

import { functionsList } from "./AllFunctions";

export default function DisplayFunctions() {
  const [language, changeLanguage] = useState("python");
  const [funct, changeFunct] = useState(functionsList.getpoweroftwoceil);
  const [demoLanguage, changeDemoLanguage] = useState(
    functionsList.getpoweroftwoceil.python
  );
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const [helpies, setHelpies] = useState(functionsList);
  const [funlabel, setfunlabel] = useState(helpies[funct]);

  const theme = monoBlue;

  useEffect(() => {
    changeDemoLanguage(funct["python"]);
  }, [funct]);

  function toggleFunction(event) {
    changeFunct(functionsList[event]);
    changeDemoLanguage(functionsList[event]["python"]);
  }

  console.log(functionsList);
  console.log(typeof functionsList);
  console.log(Object.keys(functionsList));
  console.log(Object.keys(funct));
  console.log(typeof Object.keys(functionsList)[3]);
  console.log(typeof Object.keys(funct)[1]);

  function handleLangChange(lang) {
    changeDemoLanguage(funct[lang]);
    changeLanguage(lang);
  }

  return (
    <div className="row">
      <div className="col-3">
        {" "}
        <div className="btn-group-vertical">
          {Object.keys(helpies).map((func, idx) => {
            return (
              <button
                type="button"
                onClick={() => toggleFunction(func)}
                className="btn border btn-light"
              >
                {func}
              </button>
            );
          })}
        </div>
      </div>
      <div className="col-9">
      <div className='container'>
          <h4>python</h4>        <CopyBlock
          language={language}
          text={demoLanguage}
          showLineNumbers={false}
          theme={theme}
          wrapLines={true}
          codeBlock
        />
        </div>
        {(funct.javascript != undefined) ? (
          <div className='container'>
          <h4>javascript</h4>
          <CopyBlock
            language={language}
            text={funct.javascript}
            showLineNumbers={false}
            theme={theme}
            wrapLines={true}
            codeBlock
          />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
