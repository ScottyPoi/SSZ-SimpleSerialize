import React from 'react'
import {Type} from "@chainsafe/ssz";
import {ssz, Epoch} from "@chainsafe/lodestar-types";

const EpochType: Type<Epoch> = ssz.Epoch;

const e = EpochType.defaultValue();


export default function Tester(props): React.ReactElement {
    return (
        <div>
            {e}
        </div>
    )
}