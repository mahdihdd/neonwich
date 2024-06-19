import React from "react";
import { usePost } from "../context/PostProvider";
import { FaInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  function openInstagram() {
    const instagramUrl = `https://www.instagram.com/neonwich/`;
    window.open(instagramUrl, "_blank");
  }
  function openTelegram() {
    const telegramUrl = "https://web.telegram.org/k/#@neonwich";
    window.open(telegramUrl, "_blank");
  }
  const { info } = usePost();

  return (
    <div
      ref={info}
      className="bg-[#faf9d2] border-2 m-3 rounded-xl p-4  flex  flex-row-reverse justify-around items-center"
    >
      <div className="flex flex-col items-end gap-1">
        <h1 className="mb-2 text-[35px]">ارتباط با ما</h1>
        <div className="flex gap-1 flex-row-reverse">
          <IoCallOutline />
          <p>: تماس با ما</p>
          <p>0996 281 2008</p>
        </div>
        <div className="flex gap-2 flex-row-reverse">
          <CiLocationOn />
          <p>: نشانی</p>
          <p>قزوین، مجتمج تجاری البرز</p>
        </div>
        <div className="flex justify-end gap-7 w-full mt-3">
          <button onClick={openInstagram}>
            <FaInstagram />
          </button>
          <button onClick={openTelegram}>
            <BsTelegram />
          </button>
        </div>
      </div>
      <div className="text-7xl textcolor">
        نئون <sub className="text-6xl ">ویچ</sub>
      </div>
    </div>
  );
}
