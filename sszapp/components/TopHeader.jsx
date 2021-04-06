import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

export default function TopHeader({...props}) {
    return (
        <ReactBootStrap.Col md={12}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" collapseonselect="true" expand="lg" bg="dark" variant="dark">
                <div className='container-fluid'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarNavDropdown">       
                        <a className='navbar-brand' href='./'>SSZ</a>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        {props.pages.map((page) => {
                            if (!page.pages) {
                            return (
                                <li key={page.name} className='nav-item'>
                                    <a className='nav-link' href={`#${page.name}`} >{page.name}</a>
                                </li>
                                )}
                            else { return (
                                <li key={page.name} className='nav-item dropdown'>
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" id={page.name} aria-expanded='false' >{page.name}</a>
                                    <ul className='dropdown-menu' aria-labelledby={page.name}>
                                        {page.pages.map((subpage) => {
                                            return (
                                                <li key={subpage.name} ><a className='dropdown-item' href='#'> {subpage.name}</a></li>
                                            )})}
                                    </ul>
                                </li>
                                )}
                            })
                        }
                        </ul>
                    </div>
                </div>
            </nav>
        </ReactBootStrap.Col>

    )
}