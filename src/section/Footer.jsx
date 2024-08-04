import React from "react";
import { usePost } from "../context/PostProvider";
import RevealRtl from "../components/animation/RevealRtl";
import RevealLtr from "../components/animation/RevealLtr";

import { FaInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const phoneNumber = "09962812008";
  function openInstagram() {
    const instagramUrl = `https://www.instagram.com/neonwich/`;
    window.open(instagramUrl, "_blank");
  }
  function openTelegram() {
    const telegramUrl = "https://web.telegram.org/k/#@neonwich";
    window.open(telegramUrl, "_blank");
  }
  function openWhatsApp() {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  }
  function openRubikaApp() {
    const rubikaApp =
      "https://web.rubika.ir/#c=u0GPkGZ0f8535d052df722ec09c7090d";
    window.open(rubikaApp, "_blank");
  }
  function openEitaaApp() {
    const eitaaApp = "";
    window.open(eitaaApp, "_blank");
  }
  const { info } = usePost();

  return (
    <footer
      ref={info}
      className="bg-[#A0C49D] border-2  sm:p-5 flex sm:flex-row-reverse 2s:flex-col justify-around items-center 2s:gap-14 sm:gap-0"
    >
      <div className="flex flex-col items-end gap-1">
        <h1 className="mb-2 2s:text-[35px] sm:text-[50px]">ارتباط با ما</h1>
        <div className="flex gap-1 flex-row-reverse 2s:text-[20px] sm:text-[25px]">
          <IoCallOutline />
          <p>: تماس با ما</p>
          <p>0996 281 2008</p>
        </div>
        <div className="flex gap-2 flex-row-reverse 2s:text-[20px] text-[25px]">
          <CiLocationOn />
          <p>: نشانی</p>
          <p>،قزوین، مجتمج تجاری البرز</p>
        </div>
        <div className="flex flex-row-reverse justify-start gap-7 w-full mt-3 text-[25px]">
          <button onClick={openInstagram}>
            <FaInstagram />
          </button>
          <button onClick={openTelegram}>
            <BsTelegram />
          </button>
          <button onClick={openWhatsApp}>
            <BsWhatsapp />
          </button>
          {/* <button onClick={openEitaaApp}>
            <img alt="لوگوی ایتا" src="../../public/images/eitaa-icon-2005x2048-z22hivx5.png" className="w-6 h-6"/>
          </button> */}
          <button onClick={openRubikaApp}>
            <img alt="روبیکا" src="../../public/images/rubika.png" className="w-6 h-6"/>
          </button>
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
    </footer>
  );
}
