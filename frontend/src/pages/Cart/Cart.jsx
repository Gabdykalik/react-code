import style from "./Cart.module.scss"
import Header from "../../components/Header/Header";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState()

  console.log(cartItems)



  return(
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.title}>
          КОРЗИНА
        </div>

        <div className={style.main}>
          <div>

          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart;