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
      className="bg-[#A0C49D] border-2 m-3 rounded-xl p-4  flex  flex-row-reverse justify-around items-center"
    >
      <div className="flex  sm:flex-col items-end gap-1">
        <h1 className="mb-2 text-[50px]">ارتباط با ما</h1>
        <div className="flex gap-1 flex-row-reverse text-[25px]">
          <IoCallOutline />
          <p>: تماس با ما</p>
          <p>0996 281 2008</p>
        </div>
        <div className="flex gap-2 flex-row-reverse text-[25px]">
          <CiLocationOn />
          <p>: نشانی</p>
          <p>قزوین، مجتمج تجاری البرز</p>
        </div>
        <div className="flex flex-row-reverse justify-start gap-7 w-full mt-3 text-[25px]">
          <button onClick={openInstagram}>
            <FaInstagram />
          </button>
          <button onClick={openTelegram}>
            <BsTelegram />
          </button>
          {/* <button>
            <img alt="لوگوی ایتا" src="../../public/images/eitaa-icon-2005x2048-z22hivx5.png" className="w-6 h-6"/>
          </button> */}
        </div>
      </div>
      <div>
        <img
          className="drop-shadow-icon"
          src="../../public/images/neonwich.png"
          width={150}
          height={100}
        />
      </div>
    </div>
  );
}
