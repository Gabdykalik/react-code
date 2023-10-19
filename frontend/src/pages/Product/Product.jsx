import style from "./Product.module.scss";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../../components/Footer/Footer";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartAction";

const Product = () => {
  const [product, setProduct] = useState()
  const params = useParams()
  const images = []
  const [count, setCount] = useState(1)

  const dispatch = useDispatch();

  useEffect(() => {
    const backendUrl = `http://127.0.0.1:3000/api/products/${params.id}`;

    axios.get(backendUrl, {withCredentials: true})
      .then(response => setProduct(response.data[0]))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  product?.image_urls.forEach((e) => {
    images.push(
      {
        original: e,
        thumbnail: e
      }
    )
  })

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
    if (count < 2) {
      setCount(1)
    }
  }

  const handleAddToCart = () => {
    // Вызываем действие addToCart с id товара и количеством
    dispatch(addToCart(product?.id, count));
  };
  return (
    <div>
      <Header/>
      <div className={style.container}>
        <div className={style.gallery}>
          <ImageGallery items={images}
                        thumbnailPosition={'left'}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        disableThumbnailScroll={true}
          />;
        </div>
        <div className={style.info}>
          <div className={style.category}>
            Главная / {product?.category.name}
          </div>
          <div className={style.name}>
            {product?.name}
          </div>
          <div className={style.price}>
            ${product?.price}
          </div>
          <div className={style.body}>
            {product?.body}
          </div>
          <div className={style.btns}>
            <div className={style.cartCount}>
              <div>
                <button onClick={decreaseCount}>
                  -
                </button>
              </div>
              <div className={style.count}>
                {count}
              </div>
              <div>
                <button onClick={increaseCount}>
                  +
                </button>
              </div>
            </div>
            <div>
              <button className={style.cart} onClick={handleAddToCart}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product;