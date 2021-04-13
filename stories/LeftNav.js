import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeftNav.module.css';
import * as ReactBootStrap from 'react-bootstrap';


export default function LeftNav( {...props} ) {
    return (
        <ReactBootStrap.Row>
        <ReactBootStrap.Col fluidmd={6}>
        <ReactBootStrap.Navbar collapseOnSelect expand="l" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand></ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.NavDropdown title="Documentation" id="collasible-nav-dropdown">
                        {props.pages.map((page) => {
                            return (
                                <ReactBootStrap.NavDropdown.Item href={page.url}>{page.name}</ReactBootStrap.NavDropdown.Item>
                            )})
                        }
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.NavDropdown title="Guide" id="collasible-nav-dropdown"></ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="#features">Merkle Trees</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#features">References</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        </ReactBootStrap.Col>
        </ReactBootStrap.Row>
)
}


