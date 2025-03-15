import Image from "next/image";
import React from "react";
import AccordionItem from "../_components/AccordionItem";
import RevealLtr from "../_components/animation/RevealLtr";
import RevealRtl from "../_components/animation/RevealRtl";

const question = [
  {
    title: "چگونه سفارش خود را ثبت کنیم؟",
    text: "شما میتوانید به سادگی در پیام رسان های داخلی و خارجی سفارش خودتان را در کمترین زمان ممکن ثبت نمایید",
  },
  {
    title: "مدت زمان آماده سازی سفارش ها چه مقدار هست؟",
    text: "بر اساس حجم سفارش و نوع سفارش مدت آماده سازی متغییر می‌باشد اما به طور کلی بین 3 الی یک هفته‌ی کار زمان نیاز است تا سفارش ها تکمیل و آماده ی ارسال شوند. سفارش های کوچک 3 الی 5 روز کاری و سفارش های حجیم 5 الی 7 روز کاری",
  },
  {
    title: "ارسال به شهر های دیگر هم دارید؟",
    text: "بله که داریم ما تمامی سفارش های شما عزیزان را به رایگان به سراسر کشور حتی خارج از کشور ارسال می‌کنیم",
  },
  {
    title: "هزینه ارسال چقدر هست؟",
    text: "هزینه ارسال رایگان میباشد",
  },
  {
    title: "امکان  نصب هم وجود داره؟",
    text: "قطعا، مجموعه نئون ویچ در سراسر ایران نصاب داره ",
  },
  {
    title: "هزینه نصب به چه مقدار است؟",
    text: "هزینه نصب توافقی بوده و معمولا 10 درصد از ارزش کار می‌باشد. اما ما در مجموعه نئون ویچ خدمات نصب را با کمترین هزینه ممکن و بالاترین کیفیت انجام می‌دهیم به گونه ای که ضمانت 12 ماه ارائه می دهیم. در صورت بروز هرگونه مشکل در این مدت زمان مجموعه نئون ویچ پاسخگو خواهد بود",
  },
  {
    title: "محصولات نئون ویچ دارای گارانتی هستند؟",
    text: "بله که هستند خدمات نئون فلکسی دارای 12 ماه گارانتی خدمات ال ای دی دارای 12 ماه گارانتی و خدمات فلکسی 60 ماه گارانتی و خدمات تابلو سازی حروف برجسته دارای 24 ماه گارانتی هستند",
  },
];

export default function Question() {
  return (
    <div id="question"  className="flex flex-col items-center w-full mt-14 bg-white rounded-2xl py-5 px-2 shadow-md">
      <div className="flex flex-row-reverse gap-2 justify-center items-center">
        <p  className="text-2xl">سوالات متداول</p>
        <Image src="/svg/question.png" alt="سوالات" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row mt-10 justify-around w-full">
        <RevealLtr style="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
          <Image
            src="/images/question.jpg"
            alt="سوالات متداول"
            fill
            className="object-contain"
            unoptimized
          />
        </RevealLtr>

        <RevealRtl
          style="w-full 
        md:w-1/2 flex flex-col gap-[4px]"
        >
          {question.map((item, index) => (
            <AccordionItem key={index} num={index} title={item.title}>
              {item.text}
            </AccordionItem>
          ))}
        </RevealRtl>
      </div>
    </div>
  );
}
