import { globalStyles } from '../shared/styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';


export default function MyApp({ Component, pageProps }) {
  
  
  return (
  <>
    {globalStyles}
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </>)
}

