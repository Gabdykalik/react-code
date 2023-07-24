import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import style from './Banner.module.scss';
import banner1 from '../../assets/images/banner1.jpeg';
import banner2 from '../../assets/images/banner2.jpeg';
import banner3 from '../../assets/images/banner3.jpeg';

// SwiperCore.use([Autoplay]);


const Banner = () => {
    return (
        <div className={style.banner}>
            <Swiper
                modules={[Autoplay]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2500
                  }}
            >
                <SwiperSlide>
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;