import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";
import { usePost } from "../context/PostProvider";
const question = [
  {
    title: "مهدی حداد",
    text: "مهندسی کامپیوتر",
  },
  {
    title: "پارسا ادیب نیا",
    text: "مهندسی عمران",
  },
  {
    title: "مهیار حداد",
    text: "مدیریت",
  },
];

export default function Questions() {
  const [curOpen, setCurOpen] = useState(null);
  const {questionBox} = usePost()
  return (
    <div ref={questionBox} className="flex flex-col items-center h-[680px] border-2 rounded-xl m-3">
      <h1 className="mt-3">سولات متداول</h1>
      <div className="w-60 sm:w-[600px] my-[100px] mx-auto flex flex-col gap-[24px]">
        {question.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
