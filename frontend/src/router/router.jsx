import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Product from "../pages/Product/Product";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/product/:id' element={<Product />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;