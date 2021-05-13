import { BasicType, CompositeType, Type } from "@chainsafe/ssz";
import { useState } from "react";
import { presets, PresetName } from "./Presets";


export default function Serializer({ ...props }) {
  const [serialized, setSerialized] =
    useState<Uint8Array | undefined>(undefined);
  const [hashTreeRoot, setHashTreeRoot] =
    useState<Uint8Array | undefined>(undefined);
  const [presetName, setPresetName] =
    useState<PresetName | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [input, setInput] = useState<object | InputToProcess | undefined>(undefined);
  const [deserialized, setDeserialized] =
    useState<object | undefined>(undefined);
  const [sszType, setSSZType] =
    useState<
      BasicType<unknown> | CompositeType<object> | Type<object> | undefined
    >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [overlayText, setOverlayText] = useState<string>("");

//   setInput(props.input)

  type InputToProcess = {
    presetName: PresetName;
    sszTypeName: string;
    input: object;
  };

  type Props = {
    sszTypeName: string;
    presetName: string;
    input: object;
  };

  type Result = {
    serialized: Uint8Array | undefined;
    root: Uint8Array | undefined;
  };

  const serialize = ({ ...props }: Props): Result => {
    const type = getSSZType(props);
    const serialized = type.serialize(props.input);
    const root = type.hashTreeRoot(props.input);
    return { serialized, root };
  };

  function getSSZType(data: {
    sszTypeName: string;
    presetName: string;
    input: object;
  }): BasicType<unknown> | CompositeType<object> {
    return presets[data.presetName][data.sszTypeName];
  }

  const process = ({ ...input }: InputToProcess): Result => {
    let result: Result = serialize({ ...input });
    return result


  };



  let processed = process(props.input);
  setSerialized(processed.serialized);
  setHashTreeRoot(processed.root);


  return (
    <div>
      foo
      <br />
      presetName: {presetName}
      <br />
      name: {name}
      <br />
      input: {input}
      <br />
      sszType: {sszType}
      <br />
      deserialized: {deserialized}
      <br />
      serialized: {serialized}
      <br />
      hashTreeRoot: {hashTreeRoot}
      <br />
    </div>
  );
}
