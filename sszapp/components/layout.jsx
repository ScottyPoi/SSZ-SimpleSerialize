import styles from './layout.module.css';
import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import { MainPage } from '../stories/TopHeader.stories';
import NavBar from '../components/NavBar';
import * as ReactBootStrap from 'react-bootstrap';


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

              <div className='d-flex flex-row justify-content-between align-items-end'>

                <div className='d-flex flex-column justify-content-center p-5'>Site Map</div>
                <div className='d-flex flex-column justify-content-center p-5'>Table of Contents</div>
              </div>

            </div>
            <body style={contentStyle}>
              <ReactBootStrap.Container fluid>
                <div className='position-relative'>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col sm={2}></ReactBootStrap.Col>
                  <ReactBootStrap.Col>{children}</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm={2}></ReactBootStrap.Col>
                </ReactBootStrap.Row>
                </div>
              </ReactBootStrap.Container>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </body>
          </div>
          )
  }
  

  // <ReactBootStrap.Row className="fixed-top">
  //                 <ReactBootStrap.Col>
  //                   <ReactBootStrap.Row>
  //                     <TopHeader { ...MainPage.args } />
  //                   </ReactBootStrap.Row>
  //                   <ReactBootStrap.Row>
  //                     <ReactBootStrap.Col lg={8} />
  //                     <ReactBootStrap.Col sm={4} />
  //                   </ReactBootStrap.Row>
  //                 </ReactBootStrap.Col>
  //               </ReactBootStrap.Row>