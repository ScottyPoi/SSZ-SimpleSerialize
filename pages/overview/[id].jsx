import React from 'react';
import { getAllOverviewIds, getOverviewPageData } from '../../lib/overviewpage'
import Head from 'next/head';
import  OverviewLayout from '../../components/OverviewLayout';
import Link from 'next/link'

export async function getStaticPaths() {
  const paths = getAllOverviewIds()
  return {
    paths,
    fallback: false
  }
}

export default function OverviewPage({ overviewPageData }) {
  return (
  <div >
      <Head>
        {overviewPageData.title}
        {overviewPageData.id}
        {overviewPageData.section}
      </Head>
      <div className='d-flex row justify-content-start'>
        <div className='col-8' dangerouslySetInnerHTML={{ __html: overviewPageData.contentHtml}} />
      </div>
      <div className='d-flex row justify-content-between'>
          <div className='d-flex col-2'>
            <Link href='#'><a>Previous</a></Link>
          </div>
          <div className='d-flex col-2'>
            <Link href='#'><a>Next</a></Link>
          </div>
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

OverviewPage.pagemap = "fuck";
