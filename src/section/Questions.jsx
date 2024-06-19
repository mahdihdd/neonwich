import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";
import { usePost } from "../context/PostProvider";
import RevealUp from "../components/animation/RevealUp";

export default function Questions() {
  const { question, setCurOpen, curOpen } = usePost();
  const { questionBox } = usePost();
  return (
    <div
      ref={questionBox}
      className="flex flex-col items-center  border-2 rounded-xl m-3"
    >
      <h1 className="mt-3">سولات متداول</h1>
      <RevealUp>
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
      </RevealUp>
    </div>
  );
}
