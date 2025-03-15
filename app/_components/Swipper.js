// "use client";
// import React from "react";
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
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="w-full h-[400px]"
//     >
//       {Array.from({ length: 4 }, (_, i) => (
//         <SwiperSlide key={i} className="relative">
//           {/* <Image
//             alt={`photo${i + 1}`}
//             src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
//             fill
//             className="object-cover"
//           /> */}
//           <div className="flex justify-center items-center w-full h-full bg-red-300 rounded-lg">
//             {i + 1}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// لیست تصاویر
const images = [
  { src: "/images/slide1.jpg", alt: "اسلاید ۱" },
  { src: "/images/slide2.jpg", alt: "اسلاید ۲" },
  { src: "/images/slide3.jpg", alt: "اسلاید ۳" },
  { src: "/images/slide4.jpg", alt: "اسلاید ۴" },
];

export default function Slides() {
  return (
    <div className="flex flex-col justify-center items-center  mb-2">
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
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-lg  rounded-2xl"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="w-full aspect-[16/9] flex justify-center items-center rounded-lg overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                unoptimized
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
