/* eslint-disable max-len */

import * as React from "react";

export default function Header(): JSX.Element {
  return (
    <div className='section'>
      <div className='container'>
        <h1 className='title is-family-code'>
          Simple Serialize
          <span className='is-size-6'>
            <img src="https://img.shields.io/badge/ETH2_Spec_Version-0.11.2-2e86c1.svg"/>
          </span>
        </h1>
        <p>Simple Serialize (SSZ) is a serialization and merkleization standard created specifically for Eth2. Find the specification{" "}
          <a target="_blank" rel="noreferrer" href="../../pages/show">here.</a></p>
      </div>
    </div>
  );
}
