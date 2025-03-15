import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import ScrollIntoSection from "./ScrollIntoSection";

export default function NavbarMenu() {
  return (
    <>
      <div className="hidden sm:flex justify-around w-full lg:w-1/2">
        <ScrollIntoSection sectionId="sample" className="text-green-800 hover:text-green-500">
          نمونه کار
        </ScrollIntoSection>
        <ScrollIntoSection sectionId="order" className="text-green-800 hover:text-green-500">
          نحوه سفارش
        </ScrollIntoSection>
        <ScrollIntoSection sectionId="question">پرسش ها</ScrollIntoSection>
        <ScrollIntoSection sectionId="neon" className="text-green-800 hover:text-green-500">
          تابلو نئون
        </ScrollIntoSection>
      </div>

      <HamburgerMenu />
    </>
  );
}
