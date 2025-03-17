// import Image from "next/image";
// import React from "react";
// import Communication from "./Communication";
// import { IoLocationOutline } from "react-icons/io5";
// import { IoCallOutline } from "react-icons/io5";

// export default function Footer() {
//   return (
//     <footer className=" md:mx-32 rounded-t-3xl bg-green-300 px-5 pt-5 mt-32">
//       <div className="flex flex-col-reverse md:flex-row-reverse justify-around items-center h-auto">
//         <div className="flex flex-col text-right items-end text-[14px] sm:text-[19px] gap-1 h-auto ">
//           <h1 className="mb-2 text-[25px] sm:text-[50px]">ارتباط با ما</h1>

//           <div className="flex flex-row-reverse gap-1">
//             <IoCallOutline className="text-xl" />
//             <p>تماس با ما: 0996 281 2008</p>
//           </div>

//           <div className="flex flex-row-reverse gap-1">
//             <IoLocationOutline className="text-xl" />
//             <p>
//               نشانی: قزوین، خیابان طالقانی، مجتمع تجاری البرز، واحد 78
//             </p>
//           </div>
//         </div>
//         <Image src="/images/neonwich.png" alt="لوگو" width={230} height={100} unoptimized />
//       </div>
//       <div className="border-green-700 border-b-2 mx-28 mt-5"></div>
//       <Communication />
//       <p className="text-center py-5">
//         کلیه حقوق مادی و معنوی این وبسایت متعلق به نئون ویچ می باشد
//       </p>
//     </footer>
//   );
// }

import Image from "next/image";
import React from "react";
import Communication from "./Communication";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer id="footer" className="md:mx-32 rounded-t-3xl bg-green-300 px-5 pt-5 mt-32">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-around items-center h-auto">
        <div className="flex flex-col text-right items-end text-[14px] sm:text-[19px] gap-1 h-auto">
          <h1 className="mb-2 text-[25px] sm:text-[50px]">ارتباط با ما</h1>

          <div className="flex flex-row-reverse gap-1 items-center">
            <IoCallOutline className="text-xl" />
            <p>تماس با ما: 0996 281 2008</p>
          </div>

          <div className="flex flex-row-reverse gap-1 items-center">
            <IoLocationOutline className="text-xl" />
            <p>نشانی: قزوین، خیابان طالقانی، مجتمع تجاری البرز، واحد 78</p>
          </div>
        </div>
        <Image src="/images/neonwich.png" alt="لوگو" width={230} height={100} />
      </div>
      <div className="border-green-700 border-b-2 mx-28 mt-5"></div>
      <Communication />
      <p className="text-center py-5">
        کلیه حقوق مادی و معنوی این وبسایت متعلق به نئون ویچ می باشد
      </p>
    </footer>
  );
}