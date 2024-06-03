import React from "react";
import { usePost } from "../context/PostProvider";

export default function Footer() {
  const {info} = usePost()

  return (
    <div ref={info} className="bg-[#4b5869] border-2 rounded-xl p-10 flex flex-col justify-center items-center">
      <p> تماس با ما</p>
      <p>نشانی</p>
    </div>
  );
}
