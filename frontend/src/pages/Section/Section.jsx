import style from './Section.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Section = () => {
  const [section, setSection] = useState()
  const params = useParams()

  useEffect(() => {
    const backendUrl = `http://127.0.0.1:3000/api/sections/${params.id}`;

    axios.get(backendUrl, {withCredentials: true})
      .then(response => setSection(response.data[0]))
      .catch(error => console.error('Error fetching products:', error));
  }, [params.id]);

  function createMarkup() {
    return {__html: section?.body};
  }

  return(
    <div>
      <Header/>
      <div className={style.container}>
        <div dangerouslySetInnerHTML={createMarkup()}>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Section;