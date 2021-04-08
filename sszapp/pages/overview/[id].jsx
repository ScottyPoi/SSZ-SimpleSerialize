import React from 'react';
import { getAllOverviewIds, getOverviewPageData } from '../../lib/overviewpage'
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = getAllOverviewIds()
  return {
    paths,
    fallback: false
  }
}

export default function OverviewPage({ overviewPageData }) {
  return (<div className='position-relative'>
      <Head>
        {overviewPageData.title}
        {overviewPageData.id}
        {overviewPageData.section}
      </Head>
      <div className='row fluid position-fixed bg-dark'>
      <h1>{overviewPageData.section}:</h1>
      <h2>{overviewPageData.title}</h2>
      </div>
      <div>
      <br />
      <br />
      <br />
      <br />

      <br />
      <div dangerouslySetInnerHTML={{ __html: overviewPageData.contentHtml}} />
      </div>
  </div>)
}


export async function getStaticProps({ params }) {
    const overviewPageData = await getOverviewPageData(params.id)
    return {
        props: {
            overviewPageData
        }
    }
}