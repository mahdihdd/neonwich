"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Communication() {
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
  // function openRubikaApp() {
  //   const rubikaApp =
  //     "https://web.rubika.ir/#c=u0GPkGZ0f8535d052df722ec09c7090d";
  //   window.open(rubikaApp, "_blank");
  // }
  return (
    <div className="flex flex-row-reverse justify-center gap-7 w-full mt-3 text-[25px]">
      <button className="cursor-pointer" onClick={openInstagram}>
        <FaInstagram />
      </button>
      <button className="cursor-pointer" onClick={openTelegram}>
        <BsTelegram />
      </button>
      <button className="cursor-pointer" onClick={openWhatsApp}>
        <BsWhatsapp />
      </button>
    </div>
  );
}
