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
      className="flex flex-col items-center m-3"
    >
      <h1 className="mt-3 text-[30px]">ســوالات مـتـداول</h1>
      <RevealUp>
        <div className="2s:w-[290px] s:w-[410px] sm:w-[500px]  my-[100px] mx-auto flex flex-col gap-[24px]">
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