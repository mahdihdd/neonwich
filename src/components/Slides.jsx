import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import image1 from "../../public/images/1000002742.jpg"
import image2 from "../../public/images/PXL_20240618_185605823~2.jpg"
import image3 from "../../public/images/PXL_20240618_185627596~2.jpg"



export default function Slides() {
  return (
    <div className="h-[500px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="border-red-800"
      >
        <SwiperSlide><img alt="photo1" src={image1} /></SwiperSlide>
        <SwiperSlide><img alt="photo2" src={image2} /></SwiperSlide>
        <SwiperSlide><img alt="photo3" src={image3} /></SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
