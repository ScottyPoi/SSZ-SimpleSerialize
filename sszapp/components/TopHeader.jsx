import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Head from 'next/head'

export default function TopHeader({...props}) {
    return (<>
            <Head>
              <meta charSet="utf-8" />
            </Head>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
            </Head>
            <Head>
              <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
            </Head>
            <Head> 
              <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" /> 
            </Head>
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
            </>


    )
}