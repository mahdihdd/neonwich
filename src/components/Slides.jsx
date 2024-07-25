import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slides() {
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
      <SwiperSlide className="text-center flex justify-center items-center h-[500px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
        <img
          className="w-full h-full bg-contain"
          alt="photo1"
          src="/images/PXL_20240618_185605823~2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center h-[500px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
        <img
          className="w-full h-full bg-contain"
          alt="photo2"
          src="/images/PXL_20240618_185627596~2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center flex justify-center items-center h-[500px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
        <img
          className=" w-full h-full bg-contain"
          alt="photo3"
          src="/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
        />
      </SwiperSlide>
    </Swiper>
  );
}



// slider with caption


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function Slides() {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="w-full h-full mt-[68px]"
//     >
//       <SwiperSlide className="relative flex justify-center items-center h-[500px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
//         <img
//           className="w-full h-full object-cover"
//           alt="photo1"
//           src="/images/PXL_20240618_185605823~2.jpg"
//         />
//         <div className="absolute text-[20px] bottom-0 h-16 left-0 w-full text-center bg-black bg-opacity-70 text-white py-2">
//           This is a caption for photo1
//         </div>
//       </SwiperSlide>
//       <SwiperSlide className="relative flex justify-center items-center h-[500px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
//         <img
//           className="w-full h-full object-cover"
//           alt="photo2"
//           src="/images/PXL_20240618_185627596~2.jpg"
//         />
//         <div className="absolute text-[20px] bottom-0 h-16 left-0 w-full text-center bg-black bg-opacity-70 text-white py-2">
//           This is a caption for photo2
//         </div>
//       </SwiperSlide>
//       <SwiperSlide className="relative flex justify-center items-center h-[500px] sm:h-[350px] md:h-[450px] lg:h-[660px]">
//         <img
//           className="w-full h-full object-cover"
//           alt="photo3"
//           src="/images/original-92b75fc0380ddffebb03afeda02a9c30.png"
//         />
//         <div className="absolute text-[20px] bottom-0 h-16 left-0 w-full text-center bg-black bg-opacity-70 text-white py-2">
//           This is a caption for photo3
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }
