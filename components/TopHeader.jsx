import React from "react";
import Link from "next/link";
import NavBar from './NavBar'
export default function TopHeader({ ...props }) {
  return (
    <>
      <div className="container-fluid">

        <div className='row'></div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          collapseonselect="true"
          expand="lg"
          style={{border: 'solid grey', padding: '0'}}
        >
          <div className="row">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <a className="navbar-brand" href="./">
                SSZ - SimpleSerialize
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className='nav-item dropdown'>
                <a
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          id='sitemap'
                          aria-expanded="false"
                        >
                          SSZ - SimpleSerialize
                        </a>
                        <ul className='dropdown-menu' aria-labelledby='sitemap'>
                        <NavBar {...props}/>
                        </ul>
                </li> */}
                {props.pages.map((page) => {
                  if (!page.pages) {
                    return (
                      <li key={page.name} className="nav-item">
                        <a className="nav-link" href={`${page.url}`}>
                          {page.name}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li key={page.name} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          id={page.name}
                          aria-expanded="false"
                        >
                          {page.name}
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby={page.name}
                        >
                          {page.pages.map((subpage) => {
                            return (
                              <li key={subpage.name}>
                                <Link
                                  className="dropdown-item"
                                  href={`${subpage.url}`}
                                >
                                  <a> {subpage.name}</a>
                                </Link>
                              </li>
                            );
                          })}
                                            

                        </ul>
                      </li>
                    );
                  }
                })}
                <li>
                <a className='nav-link'
                  href="https://github.com/scottypoi/ssz-simpleserialize"
                >
                  GitHub
                </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>        
      </div>
    </>
  );
}
