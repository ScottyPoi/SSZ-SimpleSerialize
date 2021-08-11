import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import toc from "remark-toc";
import slug from "remark-slug";

export default function ShowSpecs(props) {
  return (
      <div className='row justify-content-end '>
          <div className='col-8 p-0'>
          <ReactMarkdown plugins={[slug, toc, gfm]}>{props.SpecsData}</ReactMarkdown>
          </div>
      </div>

  );
}
