import React from "react";
import ProgressItem from "../_components/ProgressItem";
import Image from "next/image";

const prgressData = [
  {
    number: 1,
    text: "دادن ایـده و دانـستن ابـعاد حـدودی",
    imageSrc: "/svg/dimensions.png",
  },
  { number: 2, text: "تـماس با مـا و ارائـه طـرح", imageSrc: "/svg/call.png" },
  {
    number: 3,
    text: "آمـاده کـردن طـرح نـهایی",
    imageSrc: "/svg/design.png",
  },
  {
    number: 4,
    text: "پـروسـه سـاخت",
    imageSrc: "/svg/build.png",
  },
  {
    number: 5,
    text: "تـحویـل کـار",
    imageSrc: "/svg/delivery.png",
  },
];
export default function Order() {
  return (
    <div id="order" className="flex text-black bg-white rounded-2xl shadow-md py-3 px-2  flex-col mt-10 items-center mx-1  sm:mx-2">
      <div className="flex flex-row-reverse gap-2 justify-center items-center">
        <p className="text-center text-2xl">مراحل آماده سازی</p>
        <Image src="/svg/process.png" alt="store" width={50} height={50} unoptimized />
      </div>

      <div className="hidden md:grid lg:hidden">
        <div
          dir="rtl"
          className="grid  grid-cols-3 mt-10 gap-2 w-full justify-items-center"
        >
          {prgressData.slice(0, 3).map((data) => (
            <ProgressItem
              key={data.number}
              number={data.number}
              item={data.text}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
        <div
          dir="rtl"
          className="grid grid-cols-2 mt-10 gap-2 mx-[120px] justify-items-center"
        >
          {prgressData.slice(3).map((data) => (
            <ProgressItem
              key={data.number}
              number={data.number}
              item={data.text}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>

      <div className="flex md:hidden lg:flex flex-col mt-10 items-center  justify-center md:flex-row-reverse gap-3 w-full">
        {prgressData.map((data) => (
          <ProgressItem
            key={data.number}
            number={data.number}
            item={data.text}
            imageSrc={data.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}


// import React from "react";
// import ProgressItem from "../_components/ProgressItem";
// import Image from "next/image";

// const progressData = [
//   { number: 1, text: "دادن ایـده و دانـستن ابـعاد حـدودی", imageSrc: "/svg/dimensions.png" },
//   { number: 2, text: "تـماس با مـا و ارائـه طـرح", imageSrc: "/svg/call.png" },
//   { number: 3, text: "آمـاده کـردن طـرح نـهایی", imageSrc: "/svg/design.png" },
//   { number: 4, text: "پـروسـه سـاخت", imageSrc: "/svg/build.png" },
//   { number: 5, text: "تـحویـل کـار", imageSrc: "/svg/delivery.png" },
// ];

// export default function Order() {
//   return (
//     <div className="flex flex-col items-center text-black bg-white rounded-2xl shadow-md py-5 px-4 mx-4 sm:mx-2 md:mx-10 lg:mx-20 mt-10">
//       {/* عنوان */}
//       <div className="flex flex-row-reverse gap-3 justify-center items-center">
//         <p className="text-center text-2xl">مراحل آماده سازی</p>
//         <Image src="/svg/process.png" alt="store" width={50} height={50} />
//       </div>

//       {/* لیست مراحل */}
//       <div
//         dir="rtl"
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 w-full justify-items-center"
//       >
//         {progressData.map((data) => (
//           <ProgressItem key={data.number} number={data.number} item={data.text} imageSrc={data.imageSrc} />
//         ))}
//       </div>
//     </div>
//   );
// }
