import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const navBarStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    height: "100%",
    border: 'solid gray'
  };
  
export default function NavBar({ ...props }) {

    return (
      <div className='container collapse'>
      <div className='row p-4'>
        <div  className='nav flex-column pt-5' id='navbarSupportedContent'>
          {/* <div className='d-flex flex-row justify-content-center pt-4 pb-2'>Site Map</div> */}
          <div className='row'>
            <div className={`d-flex flex-column  navbar-nav-scroll ${styles.nonavbar}`} >
          <>
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
                              <ul className='navbar-nav flex-column'>
                          {subpage.pages.map((subsubpage) => {
                              return (
                                <li className='nav-item d-flex flex-row' key={subsubpage.name}>
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

          </>
           </div>
           </div>

          
         </div>
       </div>
       </div>
    );
};
