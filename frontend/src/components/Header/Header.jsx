import {Link} from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import {useSelector} from 'react-redux';

const Header = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  let cartCount = 0;
  for (const productId in cartItems) {
    cartCount += cartItems[productId];
  }

  const cartItemsCount = () => {
    console.log(cartItems)
  }

  return (
    <header className={style.header}>
      <div className={style.category}>
        <ul>
          <li>
            <a href="#">
              Постельное белье
            </a>
          </li>
          <li>
            <a href="#">
              Пледы
            </a>
          </li>
          <li>
            <a href="#">
              Текстиль для кухни
            </a>
          </li>
          <li>
            <a href="#">
              Одеяла
            </a>
          </li>
        </ul>
      </div>
      <div className={style.logo}>
        <Link to={'/'}>
          <img src={logo} alt=""/>
        </Link>
      </div>
      <div className={style.links}>
        <ul>
          <li>
            <Link to={'/about'}>
              О нас
            </Link>
          </li>
          <li>
            <a href="#">
              Новости
            </a>
          </li>
          <li>
            <a href="#">
              Закрытый клуб
            </a>
          </li>
          <li>
            <a href="#">
              Контакты
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-search" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </a>
          </li>
          <li className={style.cart}>
            <Link to={'/cart'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                   className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </Link>
            <div className={style.cartCount} onClick={cartItemsCount}>
              {cartCount}
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;