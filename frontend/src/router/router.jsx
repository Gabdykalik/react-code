import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Section from "../pages/Section/Section";
import News from "../pages/News/News";
import SingleNews from "../pages/SingleNews/SingleNews";
import Contacts from "../pages/Contacts/Contacts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/section/:id' element={<Section/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<SingleNews/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;