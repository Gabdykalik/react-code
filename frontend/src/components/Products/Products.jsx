import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsItem from '../ProductsItem/ProductsItem';
import style from './Products.module.scss';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const backendUrl = 'http://127.0.0.1:3000/api/products/';

        axios.get(backendUrl, { withCredentials: true })
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        const backendUrl = 'http://127.0.0.1:3000/api/categories/';

        axios.get(backendUrl, { withCredentials: true })
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className={style.products}>
            { categories.map((category)=>{
                return(
                    <ProductsItem key={category.id}
                                  category={category.name}
                                  products={products}
                    />
                )
            }) }
        </div>
    )
}

export default Products;