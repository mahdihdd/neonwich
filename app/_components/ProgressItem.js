// import Image from "next/image";
// import React from "react";
// import RevealUp from "./animation/RevealUp";

// export default function ProgressItem({ item, imageSrc, number }) {
//   return (
//     <RevealUp style="flex flex-col justify-around items-center text-right text-[15px] bg-[#f6f6f6] w-[250px] md:w-[230px] lg:w-[250px] h-[300px] rounded-lg border border-green-400 shadow-md">
//       <div className="relative flex justify-center items-center rounded-full bg-white  w-32 h-32">
//         <Image src={imageSrc} alt={imageSrc} width={70} height={70} />
//         <div className="absolute bottom-0 right-3 flex justify-center items-center rounded-full w-7 h-7 text-white opacity-85 bg-green-400">
//           {number}
//         </div>
//       </div>

//       {item}
//     </RevealUp>
//   );
// }

import Image from "next/image";
import React from "react";
import RevealUp from "./animation/RevealUp";

export default function ProgressItem({ item, imageSrc, number }) {
  return (
    <RevealUp style="flex flex-col justify-around items-center text-center text-[14px] bg-[#f6f6f6] w-full max-w-[250px] h-[300px] rounded-lg border border-green-400 shadow-md px-4">
      <div className="relative flex justify-center items-center rounded-full bg-white w-24 h-24 sm:w-28 sm:h-28">
        <Image src={imageSrc} alt={imageSrc} width={60} height={60} className="sm:w-[70px] sm:h-[70px]" unoptimized/>
        <div className="absolute bottom-0 right-3 flex justify-center items-center rounded-full w-6 h-6 sm:w-7 sm:h-7 text-white bg-green-400">
          {number}
        </div>
      </div>
      <p className="px-2">{item}</p>
    </RevealUp>
  );
}

