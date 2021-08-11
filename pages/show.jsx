import ShowSpecs from "../components/DisplaySpecs/ShowSpecs";
import React, { useState, useEffect } from "react";
import fs from "fs";
import styles from "../styles/specs.module.css";
import ShowTOC from "../components/DisplaySpecs/ShowTOC";

export async function getStaticProps() {
  const SpecsData = fs.readFileSync(
    "./eth2sszspecs/simple-serialize.md",
    "utf8"
  );
  const MerkleProofs = fs.readFileSync(
    "./eth2sszspecs/merkle-proofs.md",
    "utf8"
  );
  const merkleTOC = fs.readFileSync("./eth2sszspecs/merkleTOC.md", "utf8");

  const specsTOC = fs.readFileSync("./eth2sszspecs/specsTOC.md", "utf8");
  return {
    props: {
      SpecsData,
      MerkleProofs,
      merkleTOC,
      specsTOC,
    },
  };
}
export default function Show({ SpecsData, MerkleProofs, merkleTOC, specsTOC }) {
  const [file, setFile] = useState(SpecsData);
  const [toc, setTOC] = useState(specsTOC);
  const [specsActive, setSpecsActive] = useState(true);

  useEffect(() => {
    file == SpecsData ? setSpecsActive(true) : setSpecsActive(false);
    file == SpecsData ? setTOC(specsTOC) : setTOC(merkleTOC);
  });

  function selectFile() {
    return (
      <ul className="nav bg-light nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${specsActive ? `active` : ``} btn`}
            type="btn"
            onClick={() => setFile(SpecsData)}
          >
            SimpleSerialize.md
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            className={`nav-link ${!specsActive ? `active` : ``} btn`}
            onClick={() => setFile(MerkleProofs)}
          >
            Merkle-Proofs.md
          </button>
        </li>
      </ul>
    );
  }

  return (
    <div className="container">
      <div className={`row position-relative ${styles.toc}`}>
        <div
          className={`col-4 d-none d-sm-block position-fixed ${styles.scroll}`}
        >
            <div className='d-flex flex-row'>{selectFile()}</div>
            <div className='d-flex px-5 row'><ShowTOC table={toc} /></div>
          
        </div>
        <div
          className={`col-12 p-0 g-0 m-0 ${styles.scroll}`}
        >
          <ShowSpecs SpecsData={file} />
        </div>
      </div>
    </div>
  );
}
