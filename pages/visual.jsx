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
    const level3 = [];
    const level2 = [];
    const level1 = [];
    const root = [];

    for (let i=0; i<8; i++) {
        let num = getRandomInt(9);
        leftValues.push(num);
    }

    for (let i=0;i<8;i++) {
        let num = getRandomInt(9);
        rightValues.push(num)
    }

    leftValues.map((value) => {
        leftLeaves.push(getRandomInt(value))
    })

    rightValues.map((value) => {
        rightLeaves.push(getRandomInt(value))
    })
    
    for (let i=0; i<8; i+=2) {
        let left = leftLeaves[i];
        let right = leftLeaves[i+1];
        let value = left + right;
        level3.push(value);
    }

    for (let i=0; i<8; i+=2) {
        let left = rightLeaves[i];
        let right = rightLeaves[i+1];
        let value = left + right;
        level3.push(value);
    }

    for (let i=0; i<8; i+=2) {
        let left = level3[i];
        let right = level3[i+1];
        let value = left + right;
        level2.push(value);
    }

    for (let i=0; i<4; i+=2) {
        let left = level2[i];
        let right = level2[i+1];
        let value = left + right;
        level1.push(value);
    }

    for (let i=0; i<2; i+=2) {
        let left = level1[i];
        let right = level1[i+1];
        let value = left + right;
        root.push(value);
    }

    return (
        <div className='container '>
            <br />
            <div className='row p-3 justify-content-center'>

                <GridNode 
                nodevalue={root[0]}
                mousePressed={false}
                />
            </div>
            <div className='row p-3 row-cols-auto g-1 justify-content-around '>

                {level1.map((value) => {
                    return (
                    <div className='col'>
                        <GridNode 
                        nodevalue={value}
                        mousePressed={false}
                        />
                    </div>)
                })}
            </div>
            <div className='row p-3 row-cols-auto g-1 justify-content-around'>

                {level2.map((value) => {
                    return (<div className='col'>
                        <GridNode 
                        nodevalue={value}
                        mousePressed={false}
                        />
                    </div>)
                })}
            </div>
            <div className='row p-3 row-cols-auto g-1 justify-content-around'>
                {level3.map((value) => {
                    return (<div className='col'>
                        <GridNode 
                        nodevalue={value}
                        mousePressed={false}
                        />
                    </div>)
                })}
            </div>
            <div className='row p-3 row-cols-2 g-1 justify-content-around'>

                <div className='col'>
                    <div className='container'>
                        <div className='row row-cols-auto g-1 justify-content-between '>
                            {leftLeaves.map((testValue) => {
                                
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
                        <div className='row row-cols-auto g-1 justify-content-around'>
                            {rightLeaves.map((rightValue) => {
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
            <br />
            <div className='row p-3 row-2-cols g-1 justify-content-around'>
                <div className='col'>
                    <div className='container'>
                        <div className='row row-cols-auto g-1 justify-content-around'>
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
                        <div className='row row-cols-auto g-1 justify-content-around'>
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