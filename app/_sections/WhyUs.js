// import Image from "next/image";
// import React from "react";

// const details = [
//   {
//     title: "طراحی حرفه‌ای و خلاقانه",
//     details: [
//       "ارائه طرح‌های منحصربه‌فرد و متناسب با سلیقه و نیاز شما",
//       "استفاده از نرم‌افزارهای پیشرفته طراحی برای دقت و زیبایی بیشتر",
//       "مشاوره رایگان با طراحان متخصص برای انتخاب بهترین طرح",
//     ],
//     imageSrc: "/images/lamp.png",
//   },
//   {
//     title: "ساخت با دقت و کیفیت بالا",
//     details: [
//       "استفاده از بهترین مواد اولیه با دوام و ماندگاری طولانی",
//       "به‌کارگیری فناوری‌های روز دنیا در ساخت تابلوهای نئون",
//       "کنترل کیفیت در هر مرحله از تولید برای تضمین بهترین نتیجه",
//     ],
//     imageSrc: "/images/wing.png",
//   },
//   {
//     title: "گارانتی و خدمات پس از فروش معتبر",
//     details: [
//       "ارائه ۱۲ ماه گارانتی رسمی بر روی کلیه محصولات",
//       "خدمات نصب حرفه‌ای توسط تیم متخصص نئون ویچ",
//       "پشتیبانی ۲۴ ساعته برای رفع هرگونه مشکل یا سوال",
//     ],
//     imageSrc: "/images/heart.png",
//   },
//   {
//     title: "تنوع در محصولات و خدمات",
//     details: [
//       "ساخت تابلوهای نئون، تابلوهای تبلیغاتی، حروف برجسته و نورپردازی‌های مدرن",
//       "امکان سفارشی‌سازی طرح‌ها بر اساس نیاز مشتری",
//       "ارائه خدمات به کسب‌وکارهای کوچک و بزرگ در سراسر ایران",
//     ],
//     imageSrc: "/images/hand.png",

//   },
//   {
//     title: "ارسال و نصب سریع و مطمئن",
//     details: [
//       "ارسال به سراسر کشور",
//       "نصب حرفه‌ای توسط تیم مجرب نئون ویچ",
//       "تحویل به موقع و بدون تاخیر",
//     ],
//     imageSrc: "/images/righthand.png",

//   },
//   {
//     title: "قیمت‌گذاری منصفانه و رقابتی",
//     details: [
//       "ارائه قیمت‌های شفاف و بدون هزینه‌های پنهان",
//       "تخفیف‌های ویژه برای سفارش‌های عمده و مشتریان دائمی",
//     ],
//     imageSrc: "/images/astrounat.png",

//   },
// ];

// export default function WhyUs() {
//   return (
//     <div className="flex flex-col gap-8 p-6 mt-10">
//       <h1 className="text-center text-3xl">چرا نئون ویچ؟</h1>
//       {details.map((feature, index) => (
//         <div
//           key={index}
//           className="flex flex-row-reverse justify-between bg-white mx-28 p-6 rounded-lg shadow-md text-right border-r-4 border-green-600"
//         >
//           <div className="flex flex-col">
//             <h2 className="text-xl font-bold text-green-600 mb-4">
//               {feature.title}
//             </h2>
//             <ul className="list-disc list-inside space-y-2">
//               {feature.details.map((detail, i) => (
//                 <li key={i} className="text-gray-700 list-none">
//                   {detail}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <Image
//             src={feature.imageSrc}
//             width={120}
//             height={130}
//             alt="لامپ"
//             className="animate-glow drop-shadow-[0_1px_1px_rgb(239,255,0)]"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// import Image from "next/image";
// import React from "react";

// const details = [
//   {
//     title: "طراحی حرفه‌ای و خلاقانه",
//     details: [
//       "ارائه طرح‌های منحصربه‌فرد و متناسب با سلیقه و نیاز شما",
//       "استفاده از نرم‌افزارهای پیشرفته طراحی برای دقت و زیبایی بیشتر",
//       "مشاوره رایگان با طراحان متخصص برای انتخاب بهترین طرح",
//     ],
//     imageSrc: "/images/desing.jpg",
//   },
//   {
//     title: "ساخت با دقت و کیفیت بالا",
//     details: [
//       "استفاده از بهترین مواد اولیه با دوام و ماندگاری طولانی",
//       "به‌کارگیری فناوری‌های روز دنیا در ساخت تابلوهای نئون",
//       "کنترل کیفیت در هر مرحله از تولید برای تضمین بهترین نتیجه",
//     ],
//     imageSrc: "/images/build.jpg",
//   },
//   {
//     title: "گارانتی و خدمات پس از فروش معتبر",
//     details: [
//       "ارائه ۱۲ ماه گارانتی رسمی بر روی کلیه محصولات",
//       "خدمات نصب حرفه‌ای توسط تیم متخصص نئون ویچ",
//       "پشتیبانی ۲۴ ساعته برای رفع هرگونه مشکل یا سوال",
//     ],
//     imageSrc: "/images/sale.jpg",
//   },
//   {
//     title: "تنوع در محصولات و خدمات",
//     details: [
//       "ساخت تابلوهای نئون، تابلوهای تبلیغاتی، حروف برجسته و نورپردازی‌های مدرن",
//       "امکان سفارشی‌سازی طرح‌ها بر اساس نیاز مشتری",
//       "ارائه خدمات به کسب‌وکارهای کوچک و بزرگ در سراسر ایران",
//     ],
//     imageSrc: "/images/product.jpg",
//   },
//   {
//     title: "ارسال و نصب سریع و مطمئن",
//     details: [
//       "ارسال به سراسر کشور",
//       "نصب حرفه‌ای توسط تیم مجرب نئون ویچ",
//       "تحویل به موقع و بدون تاخیر",
//     ],
//     imageSrc: "/images/install.jpg",
//   },
//   {
//     title: "قیمت‌گذاری منصفانه و رقابتی",
//     details: [
//       "ارائه قیمت‌های شفاف و بدون هزینه‌های پنهان",
//       "تخفیف‌های ویژه برای سفارش‌های عمده و مشتریان دائمی",
//     ],
//     imageSrc: "/images/price.jpg",
//   },
// ];

// export default function WhyUs() {
//   return (
//     <div className="flex flex-col gap-8 p-6 mt-10 ">
//       <h1 className="text-center text-3xl">چرا نئون ویچ؟</h1>
//       {details.map((feature, index) => (
//         <div
//           key={index}
//           className="flex flex-col justify-center items-center md:flex-row md:justify-between bg-white mx-28 p-6 rounded-lg shadow-md text-right border-r-4 border-green-600"
//         >
//           <Image
//             unoptimized
//             src={feature.imageSrc}
//             width={150}
//             height={120}
//             alt={feature.title}
//           />
//           <div className="flex flex-col">
//             <h2 className="text-xl font-bold text-green-600 mb-4">
//               {feature.title}
//             </h2>
//             <ul className="list-disc list-inside space-y-2">
//               {feature.details.map((detail, i) => (
//                 <li key={i} className="text-gray-700 list-none">
//                   {detail}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* <div
//             className="animate-glow"
//             style={{ "--glow-color": feature.glowColor }} // Set dynamic glow color
//           > */}

//           {/* </div> */}
//         </div>
//       ))}
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import RevealUp from "../_components/animation/RevealUp";

const details = [
  {
    title: "طراحی حرفه‌ای و خلاقانه",
    details: [
      "ارائه طرح‌های منحصربه‌فرد و متناسب با سلیقه و نیاز شما",
      "استفاده از نرم‌افزارهای پیشرفته طراحی برای دقت و زیبایی بیشتر",
      "مشاوره رایگان با طراحان متخصص برای انتخاب بهترین طرح",
    ],
    imageSrc: "/images/desing.jpg",
  },
  {
    title: "ساخت با دقت و کیفیت بالا",
    details: [
      "استفاده از بهترین مواد اولیه با دوام و ماندگاری طولانی",
      "به‌کارگیری فناوری‌های روز دنیا در ساخت تابلوهای نئون",
      "کنترل کیفیت در هر مرحله از تولید برای تضمین بهترین نتیجه",
    ],
    imageSrc: "/images/build.jpg",
  },
  {
    title: "گارانتی و خدمات پس از فروش معتبر",
    details: [
      "ارائه ۱۲ ماه گارانتی رسمی بر روی کلیه محصولات",
      "خدمات نصب حرفه‌ای توسط تیم متخصص نئون ویچ",
      "پشتیبانی ۲۴ ساعته برای رفع هرگونه مشکل یا سوال",
    ],
    imageSrc: "/images/sale.jpg",
  },
  {
    title: "تنوع در محصولات و خدمات",
    details: [
      "ساخت تابلوهای نئون، تابلوهای تبلیغاتی، حروف برجسته و نورپردازی‌های مدرن",
      "امکان سفارشی‌سازی طرح‌ها بر اساس نیاز مشتری",
      "ارائه خدمات به کسب‌وکارهای کوچک و بزرگ در سراسر ایران",
    ],
    imageSrc: "/images/product.jpg",
  },
  {
    title: "ارسال و نصب سریع و مطمئن",
    details: [
      "ارسال به سراسر کشور",
      "نصب حرفه‌ای توسط تیم مجرب نئون ویچ",
      "تحویل به موقع و بدون تاخیر",
    ],
    imageSrc: "/images/install.jpg",
  },
  {
    title: "قیمت‌گذاری منصفانه و رقابتی",
    details: [
      "ارائه قیمت‌های شفاف و بدون هزینه‌های پنهان",
      "تخفیف‌های ویژه برای سفارش‌های عمده و مشتریان دائمی",
    ],
    imageSrc: "/images/price.jpg",
  },
];

export default function WhyUs() {
  return (
    <RevealUp>
      <div className="flex flex-col gap-8 p-6 mt-10">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          چرا نئون ویچ؟
        </h1>
        {details.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:flex-row md:items-start md:justify-between bg-white mx-4 md:mx-28 p-6 rounded-lg shadow-md text-right border-r-4 border-green-600"
          >
            <Image
              src={feature.imageSrc}
              width={120}
              height={100}
              alt={feature.title}
              className="w-24 h-24 md:w-52 md:h-52 object-cover rounded-lg"
              unoptimized
            />
            <div className="flex flex-col mt-4 md:mt-0 md:mr-6">
              <h2 className="text-sm sm:text-lg md:text-xl font-bold text-green-600 mb-2 md:mb-4">
                {feature.title}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {feature.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-gray-700 list-none text-xs md:text-base"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </RevealUp>
  );
}
