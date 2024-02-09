import style from "./News.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const backendUrl = `http://127.0.0.1:3000/api/news`;

    axios.get(backendUrl, {withCredentials: true})
      .then(response => setNews(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(news)

  return(
    <div>
      <Header />
      <div className={style.container}>
        {
          news.map((news)=>{
            return(
              <div className={style.item}>
                <div className={style.img}
                     style={{backgroundImage: `url(${news.image_urls})`}}
                >

                </div>
                <div className={style.main}>
                  <div className={style.title}>
                    {news.title}
                  </div>
                  <div className={style.date}>
                    {news.created_at}
                  </div>
                  <div className={style.info}>
                    {news.info}
                  </div>
                  <div className={style.link}>
                    <Link to={`/news/${news.id}`}>
                      Читать далее
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default News;