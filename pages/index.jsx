import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TabsFront from '../src/components/TabsFront.tsx';
export default function Hello() {

    return (
        <div className='container'>
                    <div><h3 className='text-center'>Welcome to ssz.dev</h3></div><br />
                    <div><h2 className='text-center'>SSZ SimpleSerialize</h2></div><br />
                    <div><h5 className='text-center'>Serialization for Eth2 Data</h5></div><br />

                    <div><h4 className='text-center'>Technical Specs - Overview - SSZ Converter - Merkle Tree Visualizer - Implementation Guide</h4></div><br />

            <div className='row justify-content-center'>
                <TabsFront />
            </div>
       </div>

    )
}