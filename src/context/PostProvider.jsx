import React, { createContext, useContext, useRef, useState } from "react";
const PostContext = createContext();
function PostProvider({ children }) {
  const descript = useRef(null);
  const neonProduct = useRef(null);
  const howOrder = useRef(null);
  const questionBox = useRef(null);
  const info = useRef(null);
  const [curOpen, setCurOpen] = useState(null);

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

  return (
    <PostContext.Provider
      value={{
        descript,
        neonProduct,
        howOrder,
        questionBox,
        info,
        question,
        curOpen,
        setCurOpen,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
function usePost() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}
export { usePost, PostProvider };