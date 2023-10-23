import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Section from "../pages/Section/Section";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/section/:id' element={<Section/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;