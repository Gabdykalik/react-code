import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.item}>
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
                    </ul>
                </div>
                <div className={style.item}>
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
                <div className={style.item}>
                    123 Fifth Avenue, New York,<br/>
                    NY 10160<br/>
                    contact@info.com<br/>
                    929-242-6868<br/>
                </div>
            </div>
        </div>
    )
}

export default Footer;