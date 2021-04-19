import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function documentation() {

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className=' col-8'>
                    <Image 
                    src='/developers-eth-blocks.png'
                    alt='ethereum building blocks'
                    height={300}
                    width={500}
                    />
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 text-center'>
                    <h3>SSZ Exists</h3>
                    <p>Officially as a pair of documents in the Eth2.0 specs</p>
                    <div className='row justify-content-between'>
                        <div className='col-4 text-center'>
                            <Link href='/specs' >
                                <a>
                                <h2>
                                    SimpleSerialize.md
                                </h2>
                                </a>
                            </Link>
                            <p>Defines Constants, Types, Serialization, Deserialization, and Merkleization</p>
                            
                            
                        </div>
                        <div className='col-4'>
                            
                            <Link href='/merkleproofs'>
                                <a>
                                <h2>
                                MerkleProofs.md
                                </h2>
                                </a>
                            </Link>
                            <p>
                                Specifies Merkle Proof formats, including merkle multiproofs and sevral helper functions
                            </p>
                                                    
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}