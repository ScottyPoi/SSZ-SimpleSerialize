import { Type } from "@chainsafe/ssz";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TypeListProps {
  typeNames: string[];
  types: Type<any>[]
  up: (idx: number) => void
  down: (idx: number) => void
  remove: (idx: number) => void
}

export default function TypeList(props: TypeListProps) {
  const [only, setOnly] = useState<string | null>();
  const [first, setFirst] = useState<string | null>();
  const [last, setLast] = useState<string | null>();
  const [middles, setMiddles] = useState<string[] | null>();
  const [empty, setEmpty] = useState<boolean>(true);

    const size = props.typeNames.length;

    useEffect(() => {

      size > 0 ? setEmpty(false) : setEmpty(true);
      if (size > 1) {
        setFirst(props.typeNames[0]);
        setLast(props.typeNames[size - 1]);
      } else {
        setFirst(null);
        setLast(null);
        setOnly(props.typeNames[0]);
      }
      if (size > 2) {
        const keys = Object.keys(props.typeNames).filter(
          (n) => n !== "0" && parseInt(n) !== size - 1
          );
          setMiddles(
            keys.map((key) => {
              return props.typeNames[parseInt(key)];
            })
            );
          } else {
            setMiddles(null);
          }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
          
          function showEmptyMessage() {
            return <Text>UNION TYPES CANNOT BE EMPTY LIST</Text>;
  }

  function showTypeList(): JSX.Element {
    if (empty) {
      return showEmptyMessage();
    } else if (size === 1) {
      return (<div className="btn-group btn-group-sm" role="group">
        <button className="btn btn-primary">0: {only}</button>
        <button className="btn btn-primary" onClick={() => props.remove(0)}>
          X
        </button>
      </div>);
    } else if (size === 2) {
      return (<div className="btn-group-vertical btn-group-sm">
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-primary">0: {props.typeNames[0]}</button>
          <button className="btn btn-primary" onClick={() => props.remove(0)}>
            X
          </button>
          <button className="btn btn-primary" onClick={() => props.down(0)}>
            DOWN
          </button>
        </div>
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-primary">1: {props.typeNames[1]}</button>
          <button className="btn btn-primary" onClick={() => props.remove(1)}>
            X
          </button>
          <button className="btn btn-primary" onClick={() => props.up(1)}>
            UP
          </button>
        </div>
      </div>);
    } else if (size > 2) {
      return (<div className="btn-group-vertical" role="group">
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-primary">0: {first}</button>
          <button className="btn btn-primary" onClick={() => props.remove(0)}>
            X
          </button>
          <button className="btn btn-primary" onClick={() => props.down(0)}>
            DOWN
          </button>
        </div>
        {middles?.map((type, idx) => {
          return (
            <div className="btn-group btn-group-sm" role="group">
              <button className="btn btn-primary">
                {idx + 1}: {type}
              </button>
              <button
                className="btn btn-primary"
                onClick={() => props.remove(idx + 1)}
              >
                X
              </button>
              <button
                className="btn btn-primary"
                onClick={() => props.down(idx + 1)}
              >
                DOWN
              </button>
              <button
                className="btn btn-primary"
                onClick={() => props.up(idx + 1)}
              >
                UP
              </button>
            </div>
          );
        })}
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-primary">
            {size - 1}: {last}
          </button>
          <button className="btn btn-primary" onClick={() => props.remove(1)}>
            X
          </button>
          <button className="btn btn-primary" onClick={() => props.up(1)}>
            UP
          </button>
        </div>
      </div>)
    } else {
        return showEmptyMessage()
    }
  }

  return <div>{showTypeList()}</div>;
}
