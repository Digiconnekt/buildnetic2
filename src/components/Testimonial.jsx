import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Testimonial.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        className="swiper mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="swiper-client-msg">
            <p>
              It's a pleasure to work with Buildnetic on a sales CRM project.
              Our requirement was specific. I'm proud to say they have delivered
              better than what we asked.
            </p>
          </div>
          <div className="swiper-client-data">
            <figure>
              <img
                src="./assets/images/home/testimonial1.png"
                alt="testimonial"
              />
            </figure>
            <div className="client-data-details">
              <p className="name">Amit Manocha</p>
              <p className="designation">- Private Equity Investor</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-client-msg">
            <p>
              Buildnetic support us to expand our portfolios and established a
              trust to deliver reliable products to the end customers. I highly
              recommend to industries practitioners to take their services.
            </p>
          </div>
          <div className="swiper-client-data">
            <figure>
              <img
                src="./assets/images/home/testimonial1.png"
                alt="testimonial"
              />
            </figure>
            <div className="client-data-details">
              <p className="name">Sunny Nandwani</p>
              <p className="designation">- Founder, Acuver</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-client-msg">
            <p>
              It has been a pleasure working with the entire Buildnetic
              development team. The company is thorough, hard working and
              devoted to the goals for any given project. Creating expectational
              softwares and building teams with their clients comes naturally to
              them and I would easily recommend them for any projects.
            </p>
          </div>
          <div className="swiper-client-data">
            <figure>
              <img
                src="./assets/images/home/testimonial1.png"
                alt="testimonial"
              />
            </figure>
            <div className="client-data-details">
              <p className="name">Milind Srivastava</p>
              <p className="designation">- Senior Manager, Visa</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
