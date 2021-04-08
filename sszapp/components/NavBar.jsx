import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

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
          <div className='row'>
            <div className='d-flex flex-column'>
          <ul className="navbar-nav">
          {props.pages.map((page) => {
            if (!page.pages) {
              return (
              <div key={page.name} className='d-flex flex-row'>
                <li className='nav-link' href="#" >
                    {page.name}  
                </li>
              </div>

              )
            }
            else { return (
              <div key={page.name} className='d-flex flex-row'>
              <li>
                <div className='row' >
                  <Link className='nav-link' href='#'>{page.name}</Link>
                      {page.pages.map((subpage) => {
                        return (
                        <div className='d-flex flex-row' key={subpage.name}>
                          <li>
                            <Link className={`nav-link`} href="#" style={{fontSize: 80}}>
                              <div className={styles.sitemap3}>{subpage.name}</div>
                            </Link>  
                          </li>
                        </div>
                        )
                      })}
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
