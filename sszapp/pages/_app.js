import { globalStyles } from '../shared/styles'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default App
