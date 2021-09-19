import styles from "./layout.module.css";
import Head from "next/head";
import TopHeader from "../Navigation/TopHeader";
import { MainPage } from "../Navigation/TopHeader.stories";


const Z = {
  zIndex: 0,
};

const Y = {
  zIndex: 1,
};

const X = {
  zIndex: 2,
};

export default function Layout({ children }) {
  console.log("twerkleizing...");
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container-fluid m-0 p-0">
        <div className="row border px-4 fixed-top">
          <TopHeader {...MainPage.args} />
        </div>
        <div className="row p-0" style={Z}>
          {children}
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
          crossOrigin="anonymous"
        ></script>
      </div>
    </>
  );
}
