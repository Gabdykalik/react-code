import style from "./Advantages.module.scss";
import discount from "../../assets/images/discount.png";
import shipping from "../../assets/images/shipping.png";
import payment from "../../assets/images/pay.png";
import track from "../../assets/images/track.png";

const Advantages = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        Почему выбирают нас?
      </div>
      <div className={style.subtitle}>
        CRAS MALESUADA DOLOR SIT AMET EST EGESTAS ULLAMCORPER. NULLAM IN TORTOR MI. MAECENAS VULPUTATE LIBERO
      </div>
      <div className={style.advantages}>
        <div className={style.item}>
          <div className={style.img}>
            <img src={discount} alt=""/>
          </div>
          <div className={style.txt}>
            Лучшие цены
          </div>
          <div className={style.info}>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.
          </div>
        </div>
        <div className={style.item}>
          <div className={style.img}>
            <img src={shipping} alt=""/>
          </div>
          <div className={style.txt}>
            Доставка
          </div>
          <div className={style.info}>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.
          </div>
        </div>
        <div className={style.item}>
          <div className={style.img}>
            <img src={payment} alt=""/>
          </div>
          <div className={style.txt}>
            Безопасная оплата
          </div>
          <div className={style.info}>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.
          </div>
        </div>
        <div className={style.item}>
          <div className={style.img}>
            <img src={track} alt=""/>
          </div>
          <div className={style.txt}>
            Отслеживание доставки
          </div>
          <div className={style.info}>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages;