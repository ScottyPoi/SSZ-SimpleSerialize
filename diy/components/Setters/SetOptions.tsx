import { isBitVectorType, isContainerType, isListType, isUnionType, isVectorType, Type } from "@chainsafe/ssz";
import { Dispatch, SetStateAction } from "react";
import SetElementType from "./SetElementType";
import SetLength from "./setLength";
import { SetLimit } from "./SetLimit";

interface SetOptionsProps {
    newField: Type<unknown>;
    setNewField: Dispatch<SetStateAction<Type<unknown>>>;
    length: number;
    limit: number;
    elementType: Type<unknown>;
    setLength: Dispatch<SetStateAction<number>>;
    setLimit: Dispatch<SetStateAction<number>>;
    setElementType: Dispatch<SetStateAction<Type<unknown>>>;
    aliasList: Record<string, Type<any>>
}

export default function SetOptions(props: SetOptionsProps) {

    const [length, setLength] = [props.length, props.setLength];
    const [limit, setLimit] = [props.limit, props.setLimit]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [elementType, setElementType] = [props.elementType, props.setElementType]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [newField, setNewField] = [props.newField, props.setNewField]
    // const [u_selected, setU_Selected] = useState<Type<unknown>>(new Number64UintType())
    // const [u_length, setU_Length] = useState<number>(1);
    // const [u_limit, setU_Limit] = useState<number>(256);
    // const [u_elementType, setU_ElementType] = useState<Type<unknown>>(
    //   new NumberUintType({ byteLength: 1 })
    // );
    // const [c_selected, setC_Selected] = useState<Type<unknown>>(new Number64UintType())
    // const [c_length, setC_Length] = useState<number>(1);
    // const [c_limit, setC_Limit] = useState<number>(256);
    // const [c_elementType, setC_ElementType] = useState<Type<unknown>>(
    //   new NumberUintType({ byteLength: 1 })
    // );


    return (

        
        isVectorType(newField) ? (
            <div className="row my-2">
      {!isBitVectorType(newField) && (
          <div className="col">
          <SetElementType aliasList={props.aliasList} setEType={setElementType} />
        </div>
      )}
      <div className="col">
        <SetLength currentLen={length} setVectorLen={setLength} />
      </div>
    </div>
  ) : isListType(newField) ? (
      <div className="row">
      <div className="col">
        <SetElementType aliasList={props.aliasList} setEType={setElementType} />
      </div>

      <div className="col">
        <SetLimit
          curLimit={limit}
          perChunk={256}
          setLimit={setLimit}
          />
      </div>
    </div>
  ) : isUnionType(newField) ? (
      <>
      {/* <div className="row">
      <SetContainerField  
                  newField={u_selected}
                  setNewField={setU_Selected}
                  length={u_length}
                  limit={u_limit}
                  elementType={u_elementType}
                  setLength={setU_Length}
                  setLimit={setU_Limit}
                  setElementType={setU_ElementType}
                  
                  />
    </div> */}
      {/* <div className="row">
        <SetOptions 
                          newField={u_selected}
                          setNewField={setU_Selected}
                          length={u_length}
                          limit={u_limit}
                          elementType={u_elementType}
                          setLength={setU_Length}
                          setLimit={setU_Limit}
                          setElementType={setU_ElementType}
        />
    </div> */}
                  PLEASE CREATE TYPE ALIAS FOR UNION SUBTREE</>
  ) : isContainerType(newField) ? (
    <>PLEASE CREATE TYPE ALIAS FOR CONTAINER SUBTREE</>
    
    //   <>
    //   <div className="row">

      
    //   <SetContainerField 
    //   newField={c_selected}
    //   setNewField={setC_Selected}
    //   length={c_length}
    //   limit={c_limit}
    //   elementType={c_elementType}
    //   setLength={setC_Length}
    //   setLimit={setC_Limit}
    //   setElementType={setC_ElementType}
    //   />
    //   </div>
    //   <div className="row">
    //       <SetOptions 
    //             newField={c_selected}
    //             setNewField={setC_Selected}
    //             length={c_length}
    //             limit={c_limit}
    //             elementType={c_elementType}
    //             setLength={setC_Length}
    //             setLimit={setC_Limit}
    //             setElementType={setC_ElementType}
    //       />
    //   </div>
    //   </>
      ) :
      
      (
          <></>
          )
          )
      }