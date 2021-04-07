import styles from './layout.module.css';
import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import { MainPage } from '../stories/TopHeader.stories';
import NavBar from '../components/NavBar';
import * as ReactBootStrap from 'react-bootstrap';
import  pages  from '../data/site-pages.json';



const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

export default function Layout({ children }) {
    return (
          <div className='Layout' style={layoutStyle}>
            <div className='row fixed-top'>
              <div className='row'>
                <TopHeader { ...MainPage.args } />
              </div>
              <div className='d-flex row justify-content-between'>
                <div className='d-flex col-3 justify-content-center'>
                  <nav class="nav align-items-stretch flex-column navbar-dark bg-dark">
                    <NavBar { ...MainPage.args } />
                  </nav>

                </div>
                <div className='d-flex col-2 justify-content-center p-5'>Table of Contents</div>
              </div>

            </div>
            <body style={contentStyle}>
                <div className='container position-relative'>

                <div className='d-flex flex-row'>
                  <div className='col-2'></div>
                  <div className='col-7'>{children}</div>
                  <div className='col-3'></div>
                </div>
                </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </body>
          </div>
          )
  }
  

