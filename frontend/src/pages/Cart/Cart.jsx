import style from "./Cart.module.scss"
import Header from "../../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import {removeFromCart} from "../../store/cartAction";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState()
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };


  const cartIds = `${Object.keys(cartItems)}`

  const totalPrice = () => {
    let price = 0

    products?.map((product) => {
      price += product.price * cartItems[`${product.id}`]
    })

    return price
  }

  useEffect(() => {
    const backendUrl = `http://127.0.0.1:3000/api/products/[${cartIds}]`;

    axios.get(backendUrl, {withCredentials: true})
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, [cartIds]);

  console.log(products)

  return (
    <div>
      <Header/>
      <div className={style.container}>
        <div className={style.title}>
          КОРЗИНА
        </div>

        <div className={style.main}>
          <div>
            <table>
              <thead>
              <tr>
                <th>

                </th>
                <th>
                  Название
                </th>
                <th>
                  Цена
                </th>
                <th>
                  Количество
                </th>
                <th>
                  Сумма
                </th>
                <th>

                </th>
              </tr>
              </thead>
              <tbody>
              {
                products?.map((product) => {
                  return (
                    <tr>
                      <td>
                        <img src={product.image_urls} alt="" width={'60px'}/>
                      </td>
                      <td>
                        {product.name}
                      </td>
                      <td>
                        ${product.price}
                      </td>
                      <td>
                        {
                          cartItems[`${product.id}`]
                        }
                      </td>
                      <td>
                        ${product.price * cartItems[`${product.id}`]}
                      </td>
                      <td>
                        <button className={style.close} onClick={() => handleRemoveFromCart(product.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                               className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
              <tr>
                <td>
                  Общая сумма
                </td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  $ {totalPrice()}
                </td>
              </tr>
              <tr>
                <td>
                  <button className={style.pay}>
                    Перейти к оплате
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Cart;