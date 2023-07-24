import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import style from './Home.module.scss';

const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Products />
            <Footer />
        </div>
    )
}

export default Home;