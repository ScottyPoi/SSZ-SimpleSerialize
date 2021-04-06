import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';


const main = "justify-content-start fw-bold";
const sub = "fw-light";
export default function TOC({...props}) {

    return (
        <ReactBootStrap.Col>
            
            <ReactBootStrap.Navbar collapseOnSelect bg='dark' expand='m' variant='dark' >
                    <ReactBootStrap.Navbar.Toggle  aria-controls="responsive-navbar-nav">On This Page</ReactBootStrap.Navbar.Toggle>
                    {/* <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav"> */}
                    <ReactBootStrap.Nav defaultActiveKey="#" className="mr-auto">
                    <ReactBootStrap.Row style={{height:50}}>
                    </ReactBootStrap.Row>
                    {props.specs.map((topic) => {
                        return (
                            <ReactBootStrap.Col sm={{offset: topic.type === 'main' ? 0 : 1}}>
                    <ReactBootStrap.Navbar  style={{height: 24, fontSize: 12}} className={`${topic.type === 'main' ? main : sub}`}>
                            <ReactBootStrap.Nav.Link eventKey={topic.title}><p >{topic.title}</p></ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Navbar>
                            </ReactBootStrap.Col>
                        )
                    })}
                    
                    <ReactBootStrap.Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                {/* </ReactBootStrap.Navbar.Collapse> */}
            </ReactBootStrap.Navbar>
        </ReactBootStrap.Col>)
}