import ForkMe from '../src/components/ForkMe';
import Header from '../src/components/Header';
import Tabs from '../src/components/Tabs';
import Footer from '../src/components/Footer';
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