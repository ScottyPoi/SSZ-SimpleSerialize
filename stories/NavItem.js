import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import './NavItem.css';



export const NavItem = ( { ...props } ) => {
    return (
            <Nav.Link href={props.link} className={`NavItem`} >
              {props.title}  
            </Nav.Link>


    )
}