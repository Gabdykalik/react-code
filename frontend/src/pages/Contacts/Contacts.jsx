import style from './Contacts.module.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Contacts = () => {
    const [contacts, setContacts] = useState()

    useEffect(() => {
        const backendUrl = `http://127.0.0.1:3000/api/contacts`;

        axios.get(backendUrl, {withCredentials: true})
            .then(response => setContacts(response.data[0]))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    function createMarkup() {
        return {__html: contacts?.body};
    }

    const redirectTo = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div>
            <Header/>
            <div className={style.container}>
                <div dangerouslySetInnerHTML={createMarkup()}>

                </div>
                <div className={style.social}>
                    <div className={style.socialItem} onClick={() => redirectTo(contacts?.telegram)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="-36 -60 312 360">
                            <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" y2="51.9" y1="11.536" x2="28.836"
                                                x1="46.136" id="a">
                                    <stop offset="0" stop-color="#37aee2"/>
                                    <stop offset="1" stop-color="#1e96c8"/>
                                </linearGradient>
                            </defs>
                            <g transform="scale(3.4682)">
                                <circle fill="url(#a)" r="34.6" cx="34.6" cy="34.6"/>
                                <path fill="#fff"
                                      d="M14.4 34.3l23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7c-1.7.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1c-3-.9-6.5-2.1-6.5-2.1s-2.4-1.5 1.7-3.1z"/>
                            </g>
                        </svg>
                    </div>
                    <div className={style.socialItem} onClick={() => redirectTo(contacts?.whatsapp)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"
                             viewBox="0 0 175.216 175.552">
                            <defs>
                                <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#57d163"/>
                                    <stop offset="1" stop-color="#23b33a"/>
                                </linearGradient>
                                <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057"
                                        color-interpolation-filters="sRGB">
                                    <feGaussianBlur stdDeviation="3.531"/>
                                </filter>
                            </defs>
                            <path fill="#b3b3b3"
                                  d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                                  filter="url(#a)"/>
                            <path fill="#fff"
                                  d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                            <path fill="url(#linearGradient1780)"
                                  d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                            <path fill="url(#b)"
                                  d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
                            <path fill="#fff" fill-rule="evenodd"
                                  d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                        </svg>
                    </div>
                    <div className={style.socialItem} onClick={() => redirectTo(contacts?.instagram)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px">
                            <radialGradient id="TGwjmZMm2W~B4yrgup6jda" cx="32" cy="32.5" r="31.259"
                                            gradientTransform="matrix(1 0 0 -1 0 64)"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#efdcb1"/>
                                <stop offset="0" stop-color="#f2e0bb"/>
                                <stop offset=".011" stop-color="#f2e0bc"/>
                                <stop offset=".362" stop-color="#f9edd2"/>
                                <stop offset=".699" stop-color="#fef4df"/>
                                <stop offset="1" stop-color="#fff7e4"/>
                            </radialGradient>
                            <path fill="url(#TGwjmZMm2W~B4yrgup6jda)"
                                  d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"/>
                            <radialGradient id="TGwjmZMm2W~B4yrgup6jdb" cx="18.51" cy="66.293" r="69.648"
                                            gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset=".073" stop-color="#eacc7b"/>
                                <stop offset=".184" stop-color="#ecaa59"/>
                                <stop offset=".307" stop-color="#ef802e"/>
                                <stop offset=".358" stop-color="#ef6d3a"/>
                                <stop offset=".46" stop-color="#f04b50"/>
                                <stop offset=".516" stop-color="#f03e58"/>
                                <stop offset=".689" stop-color="#db359e"/>
                                <stop offset=".724" stop-color="#ce37a4"/>
                                <stop offset=".789" stop-color="#ac3cb4"/>
                                <stop offset=".877" stop-color="#7544cf"/>
                                <stop offset=".98" stop-color="#2b4ff2"/>
                            </radialGradient>
                            <path fill="url(#TGwjmZMm2W~B4yrgup6jdb)"
                                  d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"/>
                            <path fill="#fff"
                                  d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"/>
                            <path fill="#fff"
                                  d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"/>
                            <circle cx="41" cy="25" r="2" fill="#fff"/>
                        </svg>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts;