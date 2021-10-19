import ForkMe from '../components/SSZExplorer/components/ForkMe'
import Header from '../components/sszexplorer/components/Header';
import Tabs from '../components/sszexplorer/components/Tabs';
import Footer from '../components/sszexplorer/components/Footer';
export default function Converter(props) {
    return (
        <div className='container'>
        <ForkMe />
        <Header />
        <Tabs />
        <Footer />
        </div>
    )
}