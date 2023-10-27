import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import logo from '../../assets/images/logo.png';
import {useEffect, useState} from "react";
import axios from "axios";

const Footer = () => {
    const [contacts, setContacts] = useState()

    useEffect(() => {
        const backendUrl = `http://127.0.0.1:3000/api/contacts`;

        axios.get(backendUrl, {withCredentials: true})
            .then(response => setContacts(response.data[0]))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.item}>
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
                    <div>
                        {contacts?.address}
                    </div>
                    <div>
                        {contacts?.tel1}
                    </div>
                    <div>
                        {contacts?.tel2}
                    </div>
                    <div>
                        {contacts?.tel3}
                    </div>
                    <div>
                        {contacts?.email}
                    </div>
                    <div>
                        {contacts?.email2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;