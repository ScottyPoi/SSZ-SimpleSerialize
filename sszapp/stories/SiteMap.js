import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';


export default function({ ...props }) {
    return (<ReactBootStrap.Col>
                {props.pages.map((page) => {
                    if (!page.pages) {
                        return (
                            <ReactBootStrap.Row>
                            <ReactBootStrap.Navbar bg='dark' variant='dark'>
                            <ReactBootStrap.Nav.Link>{page.name}</ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Navbar>
                            </ReactBootStrap.Row>
                            )}
                        else { return (
                            <ReactBootStrap.Row>
                            <ReactBootStrap.Navbar bg='dark' variant='dark'>
                            <ReactBootStrap.Nav.Link>{page.name}</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Col>
                            {page.pages.map((subpage) => {
                                return (
                                    <ReactBootStrap.Row>
                                    <ReactBootStrap.Nav className='flex-column' bg='dark' variant='dark'>
                                        <ReactBootStrap.Nav.Link>{subpage.name}</ReactBootStrap.Nav.Link>
                                    </ReactBootStrap.Nav>  
                                    </ReactBootStrap.Row>  
                                )})}
                            </ReactBootStrap.Col>
                            </ReactBootStrap.Navbar>
                            </ReactBootStrap.Row>
                            )}
                            
                        })
                } </ReactBootStrap.Col>) 
}
       