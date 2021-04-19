import React from 'react';
import { getAllOverviewIds, getOverviewPageData } from '../../lib/overviewpage'
import Head from 'next/head';
import  OverviewLayout from '../../components/OverviewLayout';
import Link from 'next/link';
import PageTOC from '../../components/PageTOC';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = getAllOverviewIds()
  return {
    paths,
    fallback: false
  }
}

export default function OverviewPage({ overviewPageData }) {

  const router = useRouter();
  const  foo  = router.query.id
  console.log( foo )


  const toc = overviewPageData.toc
  const Template = (args) => <PageTOC {...args} />;
  const Sections = Template.bind({});
  Sections.args = {
    toc,
    foo
  }

  return (
  <div className='container'>
      <div className='row'>
        <div className='col-8 ' dangerouslySetInnerHTML={{ __html: overviewPageData.contentHtml}} />
      </div> 
      <div className='row justify-content-between'>
          <div className='col-2'>
            <Link href='#'><a>Previous</a></Link>
          </div>
          <div className='col-2'>
            <Link href='#'><a>Next</a></Link>
          </div>
      </div>
      <div className='row justify-content-end position-fixed fixed-top'>
        <div className='col-2'>
        <br /><br /><br /><br />
          <div className='row'>
            <PageTOC { ...Sections.args } />
          </div>
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
