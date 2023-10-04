import style from "./Product.module.scss";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../../components/Footer/Footer";

const Product = () => {
  const [product, setProduct] = useState()
  const params = useParams()
  const images = []
  const [count, setCount] = useState(1)

  useEffect(() => {
    const backendUrl = `http://127.0.0.1:3000/api/products/${params.id}`;

    axios.get(backendUrl, { withCredentials: true })
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  product?.image_urls.forEach((e)=>{
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
    if (count < 2 ) {
      setCount(1)
    }
  }

  const addToCart = () => {
    localStorage.setItem(product?.id, count);
  }

  let cartCount = 0
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    cartCount += Number(localStorage.getItem(key))
  }

  return(
    <div>
      <Header count={cartCount} />
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
            { product?.name }
          </div>
          <div className={style.price}>
            ${ product?.price }
          </div>
          <div className={style.body}>
            { product?.body }
          </div>
          <div className={style.btns}>
            <div className={style.cartCount}>
              <div>
                <button onClick={decreaseCount}>
                  -
                </button>
              </div>
              <div className={style.count}>
                { count }
              </div>
              <div>
                <button onClick={increaseCount}>
                  +
                </button>
              </div>
            </div>
            <div>
              <button className={style.cart} onClick={addToCart}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product;