"use client";
import React from "react";

export default function ScrollIntoSection({ sectionId, children, closeDrawer }) {
  const handleClick = (event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100; 
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    
    // بستن دراور پس از پیمایش
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
    <button
      className="text-green-800 hover:text-green-500 cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}