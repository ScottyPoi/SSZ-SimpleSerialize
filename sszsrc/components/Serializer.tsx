import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {Type} from "@chainsafe/ssz";
import Output from "./Output";
import Input from "./Input";
// import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import {ForkName} from "../util/types";
import {ModuleThread, spawn, Thread} from "threads";
import {SszWorker} from "./worker";
import { WorkerImplementation } from "threads/dist/types/master";
import {serialize} from '../pages/worker'

type Props = {
  serializeModeOn: boolean;
};

type State<T> = {
  name: string;
  input: T;
  sszType: Type<T> | undefined;
  error: string | undefined;
  serialized: Uint8Array | undefined;
  hashTreeRoot: Uint8Array | undefined;
  deserialized: string | undefined;
  showOverlay: boolean;
  overlayText: string;
  forkName: string | undefined
};

export default function Serialize<T>(props: Props) {

    const serializeModeOn = props.serializeModeOn
    const [forkName, setForkName] = useState(undefined)
    const [name, setName] = useState("")
    const [input, setInput] = useState(undefined)
    const [deserialized, setDeserialized] = useState(undefined)
    const [sszType, setSSZType] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [serialized, setSerialized] = useState(undefined)
    const [hashTreeRoot, setHashTreeRoot] = useState(undefined)
    const [showOverlay, setShowOverlay] = useState(undefined)
    const [overlayText, setOverlayText] = useState("")
    
    

  

  

  function setOverlay(showOverlay: boolean, overlayText = ""): void {
    setShowOverlay(showOverlay);
    setOverlayText(overlayText)
  }

//   async function componentDidMount(): Promise<void> {
//     this.serializationWorkerThread = await spawn<SszWorker>(workerRef);
//   }

//   async function componentWillUnmount(): Promise<void> {
//     await Thread.terminate(this.serializationWorkerThread as ModuleThread<SszWorker>);
//   }

  async function process(forkName: ForkName, name: string, input: T, type: Type<T>) {
    setOverlay(true, serializeModeOn ? "Serializing..." : "Deserializing...")
    const data = serialize(name, forkName, input)
      
        setHashTreeRoot(data.root)
        setSerialized(data.serialized)
        this.setOverlay(false);;

    // note that all bottom nodes are converted to strings, so that they do not have to be formatted,
    // and can be passed through React component properties.

    setForkName(forkName);
    setName(name);
    setInput(input);
    setSSZType(type);
    setDeserialized(input)
  }


  

    const bounceLoader = <BounceLoader css="margin: auto;" />;

    return (
      <div className='section serialize-section is-family-code'>
        {/* <LoadingOverlay
          active={showOverlay}
          spinner={bounceLoader}
          text={overlayText}
        >
        </LoadingOverlay> */}
        <div className='container'>
          <div className='columns is-desktop'>
            <div className='column'>
              <Input
                serializeModeOn={serializeModeOn}
                onProcess={process}
                sszType={sszType}
                serialized={serialized}
                deserialized={deserialized}
                setOverlay={setOverlay}
                // worker={workerRef}
              />
            </div>
            <div className='column'>
              <Output
                deserialized={deserialized}
                serializeModeOn={serializeModeOn}
                serialized={serialized}
                hashTreeRoot={hashTreeRoot}
                error={error}
                sszType={sszType}
                sszTypeName={name}
              />
            </div>
          </div>
        </div>
      </div>
    );
  
}
