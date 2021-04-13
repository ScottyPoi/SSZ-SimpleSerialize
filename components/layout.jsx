import styles from './layout.module.css';
import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import { MainPage } from '../stories/TopHeader.stories';
import NavBar from '../components/NavBar';
import * as ReactBootStrap from 'react-bootstrap';
import  pages  from '../data/site-pages.json';
import OnThisPage from '../components/OnThisPage';



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
    console.log('fuck everything')
    return (
          <div className='Layout' style={layoutStyle}>
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
            <div className='d-flex'>
              <div className='row fixed-top '>
                <div className='col'>
                  <div className='row'>
                    <TopHeader { ...MainPage.args } />
                  </div>
                </div>
              </div>
            <div className="Content " style={contentStyle}>
                <div className='row position-relative'>
                  <div className='col-2 justify-content-start position-fixed top-10 start-0'>
                    <nav className="nav align-items-stretch">
                      <NavBar { ...MainPage.args } />
                    </nav>
                  </div>
                  <div className='col-8'></div>
                  <div className='col-2 position-fixed top-10 end-0'><OnThisPage></OnThisPage></div>
                </div>
                <div className='d-flex row position-static justify-content-center'>
                  <div className='col-8'>{children}</div>

                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </div>
          </div>
          </div>
          )
  };
  

