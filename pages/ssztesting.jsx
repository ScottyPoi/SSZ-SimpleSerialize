export const getStaticProps = async () => {
    const data = await fetch('https://github.com/ethereum/eth2.0-specs/blob/b184fa25a7d1fecee2bf8c9d307d06df953bf39d/tests/formats/ssz_generic/README.md')
    
    return {
      props: {
        data,
      },
    }
  }

export default function ssztesting({data}) {
    return (
        <div className='container'>
            {data}
        </div>
    )
}