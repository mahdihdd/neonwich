"use client";
import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";

export default function CallIcon() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const phoneNumber = "09962812008";

  const handleIconClick = () => {
    if (showPhoneNumber === false) {
      window.location.href = `tel:${phoneNumber}`;
    }
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <div className="fixed bottom-4 right-7 z-50">
      <button
        className=" flex items-center justify-center text-2xl bg-green-500 cursor-pointer w-10 h-10 text-white rounded-full p-1 shadow-lg "
        onClick={handleIconClick}
      >
        <IoCallOutline />
      </button>
    </div>
  );
}
