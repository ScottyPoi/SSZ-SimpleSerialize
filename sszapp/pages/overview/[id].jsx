import React from 'react';
import { getAllOverviewIds, getOverviewPageData } from '../../lib/overviewpage'

export async function getStaticPaths() {
  const paths = getAllOverviewIds()
  return {
    paths,
    fallback: false
  }
}

export default function OverviewPage({ overviewPageData }) {
  return (<>
      {overviewPageData.title}
      <br />
      {overviewPageData.id}
      <br />
      {overviewPageData.section}
      <br />
      <div dangerouslySetInnerHTML={{ __html: overviewPageData.contentHtml}} />
  </>)
}


export async function getStaticProps({ params }) {
    const overviewPageData = await getOverviewPageData(params.id)
    return {
        props: {
            overviewPageData
        }
    }
}