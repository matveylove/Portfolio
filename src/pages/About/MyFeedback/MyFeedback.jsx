import React from "react";
import classes from "./MyFeedback.module.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

import image1 from "../../../assets/feedback/1.jpg";
import image2 from "../../../assets/feedback/2.jpg";
import image3 from "../../../assets/feedback/3.jpg";
import image4 from "../../../assets/feedback/4.jpg";
import image5 from "../../../assets/feedback/5.jpg";
import image6 from "../../../assets/feedback/6.jpg";
import image7 from "../../../assets/feedback/7.jpg";
import image8 from "../../../assets/feedback/8.jpg";
import image9 from "../../../assets/feedback/9.jpg";
import image10 from "../../../assets/feedback/10.jpg";
import image11 from "../../../assets/feedback/11.jpg";
import image12 from "../../../assets/feedback/12.jpg";
import image13 from "../../../assets/feedback/13.jpg";
import image14 from "../../../assets/feedback/14.jpg";
import image15 from "../../../assets/feedback/15.jpg";
import image16 from "../../../assets/feedback/16.jpg";
import image17 from "../../../assets/feedback/17.jpg";

const MyFeedback = () => {
  return (
    <section className={classes.feedback}>
      <div className={classes.container}>
        <h2 className={classes.title}>Feedback</h2>
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Keyboard,
          ]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay={true}
          keyboard
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image1} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image2} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image3} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image4} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image5} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image6} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image7} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image8} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image9} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image10} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image11} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image12} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image13} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image14} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image15} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image16} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <img src={image17} alt="" loading="lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MyFeedback;
