import styles from './layout.module.css';
import Head from 'next/head';
import TopHeader from '../components/TopHeader';
import { MainPage } from '../stories/TopHeader.stories';
import ForkMe from '../src/components/ForkMe'
import NavBar from '../components/NavBar';
import * as ReactBootStrap from 'react-bootstrap';
import  pages  from '../data/site-pages.json';
import OnThisPage from '../components/OnThisPage';



const Z = {
  zIndex: 0
};

const Y = {
  zIndex: 1
};

const X = {
  zIndex: 2
}


export default function Layout({ children }) {
    console.log('twerkleizing...')
    return (
          <div className='container'>
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
              <div className='row fixed-top' style={X}>
                <div className='col'>
                  <div className='row'>
                    <TopHeader { ...MainPage.args } />
                  </div>
                </div>
              </div>
            <div className="container">
                <div className='d-flex row justify-content-between position-relative d-none d-sm-block'>
                  <div className='col-2 justify-content-start position-fixed start-0 top-0 p-0 g-0 m-0' style={Y}>
                    <nav className="nav align-items-stretch">
                      <NavBar { ...MainPage.args } />
                    </nav>
                  </div>
                </div>
                <div className='d-flex row position-static justify-content-xs-start justify-content-sm-around'>
                  <div className='col-12 col-sm-10' style={Z}>{children}</div>

                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </div>
          </div>
          </div>
          )
  };
  

