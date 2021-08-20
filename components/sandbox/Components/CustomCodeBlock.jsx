import React from "react";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

export default function CustomCodeBlock(props) {
    
      // if any language selected or javascript by default

  const { className, copy, children } = props;

  const language =
    className?.split("-")[0] === "language"
      ? className.split("-")[1]
      : "javascript";

  return copy ? (
    <CopyBlock
      text={children}
      language={language}
      theme={dracula}
      wrapLines
      codeBlock
    />
  ) : (
    <CodeBlock text={children} language={language} theme={dracula} wrapLines />
  );
}