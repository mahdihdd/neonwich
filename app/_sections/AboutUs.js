// import Image from "next/image";
// import React from "react";

// export default function AboutUs() {
//   return (
//     <div className="flex  justify-around items-center rounded-2xl shadow-sm mx-44 bg-[#f9f9f9] mt-11 py-6">
//       <Image
//       className="rounded-2xl"
//         src="/images/about.png"
//         alt="درباره ما"
//         width={320}
//         height={180}
//       />
//       <div className="flex flex-col items-end gap-5 w-1/2 ">
//         <h1 className="text-right text-3xl text-green-900">درباه نئون ویچ</h1>
//         <p dir="rtl" className="text-justify">
//           مجموعه‌ی تخصصی ما با سال‌ها تجربه درخشان در طراحی و ساخت تابلوهای نئون
//           و تابلوهای تبلیغاتی، آماده‌ی ارائه‌ی بهترین خدمات به شماست. نئون ویچ
//           با به‌کارگیری متخصصان مجرب و استفاده از باکیفیت‌ترین مواد و فناوری‌های
//           روز، زیبایی و ماندگاری را برای شما به ارمغان می‌آورد. چه برای کسب‌وکار
//           خود نیاز به یک تابلو چشم‌نواز دارید و چه به دنبال یک طرح خاص و
//           منحصربه‌فرد هستید، ما با دقت و خلاقیت، ایده‌های شما را به واقعیت تبدیل
//           می‌کنیم.
//         </p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import RevealRtl from "../_components/animation/RevealRtl";
import RevealLtr from "../_components/animation/RevealLtr";

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center rounded-2xl shadow-sm mx-4 md:mx-16 lg:mx-44 bg-[#f9f9f9] mt-5 md:mt-11 py-5 md:py-16 px-4">
      <RevealLtr>
        <Image
          className="rounded-2xl w-full md:w-auto"
          src="/images/about.png"
          alt="درباره ما"
          width={320}
          height={180}
        />
      </RevealLtr>
      <RevealRtl style="flex flex-col items-end gap-5 w-full md:w-1/2 mt-4 md:mt-0">
        <h1 className="text-right text-2xl md:text-3xl text-green-800">
          درباره نئون ویچ
        </h1>
        <p dir="rtl" className="text-justify text-sm md:text-base">
          مجموعه‌ی تخصصی ما با سال‌ها تجربه درخشان در طراحی و ساخت تابلوهای نئون
          و تابلوهای تبلیغاتی، آماده‌ی ارائه‌ی بهترین خدمات به شماست. نئون ویچ
          با به‌کارگیری متخصصان مجرب و استفاده از باکیفیت‌ترین مواد و فناوری‌های
          روز، زیبایی و ماندگاری را برای شما به ارمغان می‌آورد. چه برای کسب‌وکار
          خود نیاز به یک تابلو چشم‌نواز دارید و چه به دنبال یک طرح خاص و
          منحصربه‌فرد هستید، ما با دقت و خلاقیت، ایده‌های شما را به واقعیت تبدیل
          می‌کنیم.
        </p>
      </RevealRtl>
    </div>
  );
}
