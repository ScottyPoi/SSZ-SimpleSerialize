import fs from "fs";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useState } from "react";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const ssz_generic = fs.readFileSync(
    "./tests/tests/formats/ssz_generic/README.md",
    "utf8"
  );
  const ssz_static = fs.readFileSync(
    "./tests/tests/formats/ssz_static/core.md",
    "utf8"
  );
  const eth2TestFormat = fs.readFileSync(
    "./tests/tests/formats/README.md",
    "utf8"
  );
  const eth2TestSpec = fs.readFileSync(
    "./tests/tests/core/pyspec/README.md",
    "utf8"
  );

  return {
    props: {
      ssz_generic,
      ssz_static,
      eth2TestFormat,
      eth2TestSpec,
    },
  };
};

export default function ssztesting({
  ssz_generic,
  ssz_static,
  eth2TestFormat,
  eth2TestSpec,
}) {
  const [tab, setTab] = useState(eth2TestFormat);
  const [tabIdx, setTabIdx] = useState(0);
  const [pic, setPic] = useState("./testrepo.png")
  const [link, setLink] = useState('https://github.com/ethereum/eth2.0-specs/tree/dev/tests/formats')

  const tabs = {
    eth2TestFormat: [eth2TestFormat, "./testrepo.png", 'https://github.com/ethereum/eth2.0-specs/tree/dev/tests/formats'],
    eth2TestSpec: [eth2TestSpec, "./pyspec.png", 'https://github.com/ethereum/eth2.0-specs/tree/dev/tests/core/pyspec'],
    ssz_generic: [ssz_generic, "./sszgeneric.png", 'https://github.com/ethereum/eth2.0-specs/tree/dev/tests/formats/ssz_generic'],
    ssz_static: [ssz_static, "./sszstatic.png", 'https://github.com/ethereum/eth2.0-specs/tree/dev/tests/formats/ssz_static']
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <ul className="nav flex-column nav-pills">
            {Object.keys(tabs).map((tab, idx) => {
              return (
                <li key={idx} className="nav-item">
                  <button
                    className={`nav-link ${tabIdx == idx && "active"}`}
                    onMouseDown={() => setTabIdx(idx)}
                    onMouseUp={() => setPic(tabs[tab][1])}
                    onClick={() => setTab(tabs[tab][0])}
                    onClick={() => setLink(tabs[tab][2])}
                  >
                    {tab}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-9">
              <ReactMarkdown plugins={[gfm]}>{tab}</ReactMarkdown>
            </div>
            <div className="col-3">
                <h3 className='text-center'><a href={link}>View on Github
                              <img
                src={pic}
                alt="generic"
                className="img-thumbnail"
              />
                </a></h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
