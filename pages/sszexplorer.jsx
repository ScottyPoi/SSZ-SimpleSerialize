import ForkMe from '../components/SSZExplorer/components/ForkMe'
import Header from '../components/SSZExplorer/components/Header';
import Tabs from '../components/SSZExplorer/components/Tabs';
import Footer from '../components/SSZExplorer/components/Footer';
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