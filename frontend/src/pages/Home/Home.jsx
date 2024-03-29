import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import style from './Home.module.scss';
import Advantages from "../../components/Advantages/Advantages";

const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Products />
            <Advantages />
            <Footer />
        </div>
    )
}

export default Home;