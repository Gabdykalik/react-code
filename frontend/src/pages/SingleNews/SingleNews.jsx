import style from './SingleNews.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SingleNews = () => {
  const params = useParams()
  const [news, setNews] = useState()

  useEffect(() => {
    const backendUrl = `http://127.0.0.1:3000/api/news/${params.id}`;

    axios.get(backendUrl, {withCredentials: true})
      .then(response => setNews(response.data[0]))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

    function createMarkup() {
        return {__html: news?.body};
    }

  return(
    <div>
      <Header />
      <div className={style.container} dangerouslySetInnerHTML={createMarkup()}>

      </div>
      <Footer />
    </div>
  )
}

export default SingleNews;