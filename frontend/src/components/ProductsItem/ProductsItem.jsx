import style from './ProductsItem.module.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductsItem = (props) => {
    if (props.products) {
        return (
            <div className={style.productsItem}>
                <div className={style.title}>
                    {props.products.title}
                </div>

                <Swiper slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    className={style.products}
                >
                    {props.products.products.map((product) => {
                        return (
                            <SwiperSlide>
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
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        )
    }
}

export default ProductsItem;