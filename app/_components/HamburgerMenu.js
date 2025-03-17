"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import ScrollIntoSection from "./ScrollIntoSection";

export default function HamburgerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="sm:hidden">
      {/* Hamburger Menu Icon */}
      <button onClick={toggleDrawer} className="focus:outline-none">
        <TfiMenu className="text-3xl" />
      </button>

      {/* Drawer Overlay and Content */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
          isDrawerOpen ? "opacity-75 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeDrawer}
          className="absolute top-4 left-4 focus:outline-none"
        >
          <Image
            src="/images/cross.png"
            alt="بستن"
            width={30}
            height={30}
            unoptimized
          />
          {/* <TfiClose className="text-2xl" /> */}
        </button>

        {/* Drawer Content */}
        <div className="mt-8 p-4 text-right">
          <p className="text-center border-green-700 border-b-2 mx-6">
            دسته بندی
          </p>
          <div className="flex flex-col items-end gap-3 mt-2">
            <ScrollIntoSection
              sectionId="neon"
              closeDrawer={closeDrawer}
              className="block py-2"
            >
              تابلو نئون
            </ScrollIntoSection>
            <ScrollIntoSection
              sectionId="question"
              closeDrawer={closeDrawer}
              className="block py-2"
            >
              پرسش ها
            </ScrollIntoSection>
            <ScrollIntoSection
              sectionId="order"
              closeDrawer={closeDrawer}
              className="block py-2"
            >
              نحوه سفارش
            </ScrollIntoSection>
            <ScrollIntoSection
              sectionId="sample"
              closeDrawer={closeDrawer}
              className="block py-2"
            >
              نمونه کار
            </ScrollIntoSection>
            <ScrollIntoSection
              sectionId="aboutus"
              closeDrawer={closeDrawer}
              className="block py-2"
            >
              درباه ما
            </ScrollIntoSection>
            <ScrollIntoSection
              sectionId="footer"
              closeDrawer={closeDrawer}
              className="block py-2"
            >
              ارتباط ما
            </ScrollIntoSection>
          </div>
        </div>
      </div>
    </div>
  );
}
