import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Keyboard, Pagination } from "swiper/modules";

import { estates } from "../About/estates";
import { Link } from "react-router-dom";
const SimilarListingSlider = () => {
  return (
    <div
      className="w-full "
     
    >
      <div className="pt-12 pb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            515: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Pagination]}
          className="mySwiper"
        >
          {estates.map((est, index) =>  (
            <SwiperSlide key={est.id}>
              <Link to={`/property/${est.id}`} key={est.id}>
                <div
                  key={est.id}
                  className="flex transition-all duration-700 ease-in-out  hover:scale-95   flex-col shadow-lg mb-10 md:mx-0 mx-4 bg-[#efece899] rounded-[32px]"
                >
                  <img
                    src={est.images[0]}
                    alt="thumbnail"
                    className="w-full h-52 object-cover rounded-t-[30px] brightness-50"
                  />
                  <h3 className="text-black text-[16px] p-8 leading-[27.65px] tracking-[-0.6px] ">
                    {est.title}
                  </h3>
                  
                </div>
              </Link>
              </SwiperSlide>
            ))}


         
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarListingSlider;
