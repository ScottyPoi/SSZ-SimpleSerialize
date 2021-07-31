import { useState } from "react";
import UintNControls from "../simulator/controls/uintNControls";
import DemoInputGroup from '../src/components/DemoInputGroup';
import TabsDemo from '../src/components/TabsDemo'

export default function VisualWalkthru(props) {
  const [bool, setBool] = useState(false);
  const [uint8, setUint8] = useState(0);
  const [uint16, setUint16] = useState(0);
  const [uint32, setUint32] = useState(0);
  const [uint64, setUint64] = useState(0);
  const [uint128, setUint128] = useState(0);
  const [uint256, setUint256] = useState(0);

  return (
    <div className='container-fluid border px-4'>
<TabsDemo />
</div>
  );
}
