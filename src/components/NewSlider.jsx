import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function NewSlider() {
  return (
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
      className="w-full h-full mt-[68px]"
    >
      <SwiperSlide className="text-center flex justify-center items-center h-auto  md:h-[450px] lg:h-[600px]">
        <img
          className="w-full h-full bg-contain"
          alt="photo1"
          src="/images/PXL_20240618_185605823~2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center  h-auto md:h-[450px] lg:h-[600px]">
        <img
          className="w-full h-full bg-contain"
          alt="photo2"
          src="/images/PXL_20240618_185627596~2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center  h-auto md:h-[450px] lg:h-[600px]">
        <img
          className=" w-full h-full bg-contain"
          alt="photo3"
          src="/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
        />
      </SwiperSlide>
    </Swiper>
  );
}
