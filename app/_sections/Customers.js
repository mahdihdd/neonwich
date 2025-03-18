// import Image from "next/image";
// import React from "react";
// import RevealUp from "../_components/animation/RevealUp";
// const customerList = [
//   { src: "/logos/aftabderakhshan.png", alt: "مجتمع آفتاب درخشان صحرا" },
//   { src: "/logos/diar.png", alt: "دیار خودرو" },
//   { src: "/logos/faratick.png", alt: "فرایتک" },
//   { src: "/logos/homechocklate.png", alt: "خانه شکلات" },
//   { src: "/logos/jaziresabz.png", alt: "جزیره سبز" },
//   { src: "/logos/mobofun.png", alt: "فروشگاه موبوفان" },
//   { src: "/logos/samatari.png", alt: "فروشگاه سام آتاری" },
//   { src: "/logos/tickta.png", alt: "تیکتا مارکت" },
// ];

// export default function Customers() {
//   return (
//     <RevealUp>
//       <div className="w-full flex-col mt-10 rounded-2xl">
//         <div className="flex flex-row-reverse gap-2 justify-center items-center">
//           <p className="text-center text-2xl">برخی از مشتریان ما</p>
//           <Image src="/svg/store.svg" alt="store" width={50} height={50} />
//         </div>
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 justify-center
//  items-center"
//         >
//           {customerList.map((item, index) => (
//             <div
//               className="flex flex-col  justify-center items-center h-44  rounded-2xl"
//               key={index}
//             >
//               <Image
//                 unoptimized
//                 src={item.src}
//                 alt={item.alt}
//                 width={100}
//                 height={100}
//               />
//               <p>{item.alt}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </RevealUp>
//   );
// }

import Image from "next/image";
import React from "react";
import CustomerItem from "../_components/CustomerItem";

const customerList = [
  {
    src: "/logos/aftabderakhshan.png",
    alt: "آفتاب درخشان صحرا",
    url: "https://aftabsahra.ir",
  },
  { src: "/logos/diar.png", alt: "دیار خودرو", url: "https://diar-khodro.com" },
  {
    src: "/logos/faratick.png",
    alt: "فرایتک",
    url: "https://papms.ir/faratick/",
  },
  {
    src: "/logos/homechocklate.png",
    alt: "خانه شکلات",
    url: "https://khanehshokolati.com",
  },
  {
    src: "/logos/jaziresabz.png",
    alt: "جزیره سبز",
    url: "https://jaziresabz.com",
  },
  {
    src: "/logos/mobofun.png",
    alt: "فروشگاه موبوفان",
    url: "https://mobofun.com",
  },
  {
    src: "/logos/samatari.png",
    alt: "فروشگاه سام آتاری",
    url: "https://samatari.com",
  },
  {
    src: "/logos/tickta.png",
    alt: "تیکتا مارکت",
    url: "https://tikta.market/",
  },
];

export default function Customers() {
  return (
    <div className="w-full flex flex-col items-center py-10 rounded-lg mt-5">
      {/* عنوان بخش */}
      <div className="flex flex-row-reverse gap-2 justify-center items-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          مشتریان ما
        </h2>
        <Image
          src="/svg/community.png"
          alt="store"
          width={50}
          height={50}
          unoptimized
        />
      </div>

      {/* اسکرول افقی در موبایل */}
      <div className="mt-6 w-full overflow-x-auto scroll-smooth py-4 rounded-lg shadow-md bg-white">
        <div className="flex h-36 items-center justify-start lg:justify-center gap-4 px-6 sm:gap-12 sm:px-16">
          {customerList.map((item, index) => (
            <CustomerItem
              key={item.alt}
              src={item.src}
              alt={item.alt}
              href={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
