import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const navBarStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    height: "100%"
  };
  
export default function NavBar({ ...props }) {

    return (
      <div >
        <div className='nav flex-column' id='navbarSupportedContent'>
          <div className='row justify-content-center'>Site Map</div>
          <div className='row '>
            <div className={`d-flex flex-column navbar-nav navbar-nav-scroll ${styles.nonavbar}`} style={{scrollbarWidth: 0}}>
          <ul >
          {props.pages.map((page) => {
            if (!page.pages) {
              return (
              
                <div key={page.name} className='d-flex flex-row'>
                  <li className='nav-link' href="#" >{page.name}  </li>
                </div>
              
            )}
            else { return (
              <div key={page.name} className='d-flex flex-row'>
              <li>
                <div className='row' >
                  <Link className='nav-link' href='#'>{page.name}</Link>
                  <ul className='navbar-nav'>
                      {page.pages.map((subpage) => {
                        if (!subpage.pages) { 
                          return (
                        <div className='d-flex flex-row' key={subpage.name}>
                          <li>
                            <Link className={`nav-link`} href='#' style={{fontSize: 80}}>
                              <div className={styles.sitemap3}>{subpage.name}</div>
                            </Link>  
                          </li>
                        </div>
                        )}
                        else {
                          return (
                          <div className='d-flex flex-row' key={subpage.name}>
                            <li>
                              <Link className='nav-link' href="#" style={{fontSize: 80}}>
                                <div className={styles.sitemap3}> {subpage.name} </div>
                              </Link>
                              <ul className='navbar-nav'>
                          {subpage.pages.map((subsubpage) => {
                              return (
                                <li className='d-flex flex-row' key={subsubpage.name}>
                                  <Link className='nav-link' href='#' style={{fontSize: 60}}>
                                    <div className={styles.sitemap4}>{subsubpage.name}</div>
                                  </Link>
                                </li>
                              )
                            })}
                            </ul>
                            </li>
                          </div>
                          )
                        }
                      })}
                      </ul>
                  </div>       
                </li>              
              </div>
            )}
          })
          }

          </ul>
          </div>
          </div>

          
        </div>
      </div>
    );
};
