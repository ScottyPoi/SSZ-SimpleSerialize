import React from 'react';
import GridNode from '../visualizer/components/GridNode'

export default function Visual({ children }) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    const leftValues = [];
    const rightValues = [];
    const leftLeaves = [];
    const rightLeaves = [];

    for (let i=0; i<8; i++) {
        let num = getRandomInt(9);
        leftValues.push(num);
    }

    for (let i=0;i<8;i++) {
        let num = getRandomInt(9);
        rightValues.push(num)
    }

    leftValues.map((value) => {
        leftLeaves.push(value)
    })
    

    return (
        <div className='container'>
            <br />
            <div className='row row-2-cols justify-content-evenly align-items-center'>
                <div className='col'>
                    <div className='container'>
                        <div className='row row-cols-8 justify-content-evenly align-items-center'>
                            {leftValues.map((testValue) => {
                                
                                return (
                                        <GridNode
                                        className='col'
                                        nodevalue={testValue}
                                        mousePressed={false}
                                            >
                                        </GridNode>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='container'>
                        <div className='row align-items-center row-cols-8 justify-content-evenly'>
                            {rightValues.map((rightValue) => {
                                return (
                                
                                        <GridNode
                                        className='col'
                                        nodevalue={rightValue}
                                        mousePressed={false}
                                            >
                                        </GridNode>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}