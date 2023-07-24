import style from './ProductsItem.module.scss';
import { Link } from 'react-router-dom';

const ProductsItem = (props) => {
    if (props.products) {
        return (
            <div className={style.productsItem}>
                <div className={style.title}>
                    {props.products.title}
                </div>

                <div className={style.products}>
                    {props.products.products.map((product) => {
                        return (
                            <Link to={'/product/:id'} key={product.name} className={style.item}>
                                <div>
                                    <img src={product.img} alt="" />
                                </div>
                                <div className={style.name}>
                                    {product.name}
                                </div>
                                <div className={style.price}>
                                    ${product.price}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ProductsItem;