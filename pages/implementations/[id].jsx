import React from 'react';
import { getAllImplementationsIds, getImplementationsPageData } from '../../lib/implementationspage'
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = getAllImplementationsIds()
  return {
    paths,
    fallback: false
  }
}

export default function ImplementationsPage({ implementationsPageData }) {
  return (
    <div className='position-relative'>
        <Head>
            {implementationsPageData.title}
            {implementationsPageData.id}
        </Head>
            <div className='d-flex row justify-content-center'>
                <div className='d-flex col-12'>
                    <div dangerouslySetInnerHTML={{ __html: implementationsPageData.contentHtml}} />
                </div>
            </div>
</div>)
}


export async function getStaticProps({ params }) {
    const implementationsPageData = await getImplementationsPageData(params.id)
    return {
        props: {
            implementationsPageData
        }
    }
}

ImplementationsPage.pagemap = "fuck";
