
import { useEffect, useState } from "react";
import AliasesVisual from "./AliasesVisual";
export default function Carousel(props) {
  
    const [example, setExample] = useState(0)



  
    return (
      <div className='d-block'>
<AliasesVisual idx={example} />
      </div>
  )
}
