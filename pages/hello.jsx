import React from 'react';
import Image from 'next/image';
export default function Hello() {

    return (
        <div className='container'>
            <div className='d-flex row justify-content-center'>
                <div className='d-flex col-4'>
                    <Image src='/SSZicon.jpg' alt='ssz logo' width="256" height="256"/>
                </div>
            </div>
            <br />
            <div className='d-flex row justify-content-center'>
                <div className='d-flex col-12'>
                    <ul>
                    <div><h4 className='text-center'>Welcome to the unofficial Guide to SSZ - SimpleSerialize</h4></div><br />
                    <div><h6 className='text-center'>Visit the Documentation section to view the current specifications for SSZ Serialization and Merkle Proofs from Eth2.0</h6></div><br />
                    <div><h6 className='text-center'>Visit the Overview section for a thourough guide to understaning SSZ</h6></div><br />
                    <div><h6 className='text-center'>Check out some of the known Implementations of SSZ in many different programming languages</h6></div><br />
                    <div><p className='text-center'>*TRY IT OUT* <p> interactive playground coming soon!</p></p></div>
                    </ul>
                </div>
            </div>
        </div>

    )
}