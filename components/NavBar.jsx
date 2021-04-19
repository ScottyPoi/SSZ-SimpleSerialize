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
        <div className='nav flex-column nav-expand-lg' id='navbarSupportedContent'>
          <div className='row justify-content-center'>Site Map</div>
          <div className='row '>
            <div className={`d-flex flex-column  navbar-nav-scroll ${styles.nonavbar}`} style={{scrollbarWidth: 0}}>
          <ul className='navbar-nav'>
          {props.pages.map((page) => {
            if (!page.pages) {
              return (
              
                <div key={page.name} className='d-flex flex-row'>
                  <li>
                    <Link className='nav-link' href={`${page.url}`} >
                      <a className={styles.sitemap1}>{page.name}</a>
                    </Link>
                  </li>
                </div>
              
            )}
            else { return (
              <div key={page.name} className='d-flex flex-row'>
              <li>
                 <Link className='nav-link' href={`${page.url}`}><a className={styles.sitemap1}>{page.name}</a></Link>
                  <ul className='navbar-nav'>
                      {page.pages.map((subpage) => {
                        if (!subpage.pages) { 
                          return (
                        <div className='d-flex flex-row' key={subpage.name}>
                          <li>
                            <Link className={`nav-link`} href={`${subpage.url}`}>
                              <a className={styles.sitemap2}>{subpage.name}</a>
                            </Link>  
                          </li>
                        </div>
                        )}
                        else {
                          return (
                          <div className='d-flex flex-row' key={subpage.name}>
                            <li>
                                <Link className='nav-link' href={`${subpage.url}`}><a className={styles.sitemap2}> {subpage.name} </a></Link>
                              <ul className='navbar-nav'>
                          {subpage.pages.map((subsubpage) => {
                              return (
                                <li className='d-flex flex-row' key={subsubpage.name}>
                                  <Link className='nav-link' href={`${subsubpage.url}`}>
                                    <a className={styles.sitemap3}> {subsubpage.name} </a>
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
