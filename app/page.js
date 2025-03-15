// import Question from "./_sections/Question";
// import Customers from "./_sections/Customers";
// import Order from "./_sections/Order";

// export default function Home() {
//   return (
//     // <div className="text-center">
//     //   <div className="w-full h-dvh flex flex-row-reverse justify-around items-center">
//     //     <Image
//     //       src="/images/lamp.png"
//     //       width={300}
//     //       height={500}
//     //       alt="لامپ"
//     //       className="animate-glow drop-shadow-[0_1px_1px_rgb(239,255,0)]"
//     //     />
//     //     <p
//     //       dir="rtl"
//     //       className="w-1/3 text-justify border-2 p-4 border-amber-600 rounded-3xl shadow-xl"
//     //     >
//     //       مجموعه نئون سنتر قزوین ملقب به نئون ویچ با هدف ساخت تابلو های نئون
//     //       فلکسی در سال ۱۴۰۱ تاسیس شد. مجموعه نپون ویچ همواره در تلاش بودیم از با
//     //       کیفیت ترین متریال برای ساخحت تابلو ها استفاده کنیم. از همین رو تمامی
//     //       محصولات ساخته شده در مجموعه نئون سنتر قزوین دارای ۱۲ ماه گارانتی
//     //       هستند. از سفارش خودتون لذت ببرید
//     //     </p>
//     //   </div>
//     // </div>
//     <div className="flex flex-col justify-center w-full pt-14 px-5">
//       {/* <Slides /> */}
//       <Question />
//       <Customers />
//       <Order />
//     </div>
//   );
// }

import Question from "./_sections/Question";
import Customers from "./_sections/Customers";
import Order from "./_sections/Order";
import AboutUs from "./_sections/AboutUs";
import WhyUs from "./_sections/WhyUs";
import MapComponent from "./_components/MapComponent";
import Slides from "./_components/Swipper";
import Carousel from "./_sections/Carousel";
import NeonBoard from "./_sections/NeonBoard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full pt-14 px-5">
      <AboutUs />
      <Carousel />
      <NeonBoard />
      <WhyUs />
      <Question />
      <Customers />
      <Order />
      <MapComponent />
    </div>
  );
}
