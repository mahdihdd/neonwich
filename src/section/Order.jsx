import React from "react";
import { usePost } from "../context/PostProvider";

const prgressData = [
  { number: 1, text: "دادن ایده و دانستن ابعاد حدودی" },
  { number: 2, text: "تماس با ما و ارائه طرح" },
  {
    number: 3,
    text: "آماده کردن طزح نهایی",
  },
  {
    number: 4,
    text: "پروسه ساخت",
  },
  {
    number: 5,
    text: "تحویل کار",
  },
];
export default function Order() {
  const { howOrder } = usePost();

  return (
    <div
      ref={howOrder}
      className="h-[700px] flex flex-col  items-center border-2 rounded-xl m-3"
    >
      <h1 className="mt-5 text-[30px]">مـراحل آمـاده سـازی</h1>
      <div className="flex flex-col justify-start items-center g-[-5px]">
        <div className="rounded-full flex justify-center items-center z-10  w-10 h-10 bg-[#A0C49D]">
          1
        </div>
        <div className="flex justify-center items-center w-28 h-28 rounded-full mb-12 text-center bg-[#E1ECC8]">
          مراحل ساخت
        </div>
      </div>
    </div>
  );
}
