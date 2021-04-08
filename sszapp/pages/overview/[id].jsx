import { getAllOverviewIds, getOverviewPageData } from '../../lib/overview'

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
  </>)
}


export async function getStaticProps({ params }) {
    const overviewPageData = getOverviewPageData(params.id)
    return {
        props: {
            overviewPageData
        }
    }
}