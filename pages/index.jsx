import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
export default function Hello() {

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <img 
                    src='/developers-eth-blocks.png'
                    alt='ethereum building blocks'
                    height={300}
                    width={500}
                    
                    />
                </div>
            </div>
            <br />
            <div className='d-flex row justify-content-center'>
                <div className='d-flex col-12'>
                    <ul>
                    <div><h2 className='text-center'>Welcome to ssz.dev</h2></div><br />
                    <div><h2 className='text-center'>The Unofficial Guide to SSZ - SimpleSerialize</h2></div><br />

                    <div><h4 className='text-center'> <Link href='/simulator'><a>SSZ Visualizer *under construction*</a></Link></h4></div><br />

                    <div><h6 className='text-center'>Visit the <Link href='/documentation'><a>Documentation</a></Link> section to view up-to-date specifications for SSZ Serialization and Merkle Proofs from the Eth2.0 specs</h6></div><br />
                    <div><h6 className='text-center'>Visit the <Link href='/overview/home' ><a>Overview</a></Link>  section for a guide to understanding SSZ</h6></div><br />
                    <div><h6 className='text-center'>Check out some working <Link href='/implementations/home'><a>Implementations</a></Link> of SSZ in a few different programming languages</h6></div><br />
                    <div><p className='text-center'>*TRY IT OUT* <p> interactive playground coming soon!</p></p></div>
                    </ul>
                </div>
            </div>
        </div>

    )
}