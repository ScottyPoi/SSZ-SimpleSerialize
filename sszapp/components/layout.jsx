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
            <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
              <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" /> 
            </Head>
            <body>
              <ReactBootStrap.Container fluid>
                <ReactBootStrap.Row>
                  <ReactBootStrap.Col sm={2}>Site Map</ReactBootStrap.Col>
                  <ReactBootStrap.Col>{children}</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm={2}>Table of Contents</ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row className="fixed-top">
                  <ReactBootStrap.Col>
                    <ReactBootStrap.Row>
                      <TopHeader { ...MainPage.args } />
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row>
                      <ReactBootStrap.Col lg={8} />
                      <ReactBootStrap.Col sm={4} />
                    </ReactBootStrap.Row>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </body>
          </div>
          )
  }
  