import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import ScrollIntoSection from "./ScrollIntoSection";

export default function NavbarMenu() {
  return (
    <>
      <nav className="w-full flex justify-between items-center p-4">
        {/* منوی نمایشگرهای بزرگ */}
        <div className="hidden sm:flex justify-end gap-6 w-full">
          <ScrollIntoSection sectionId="sample">نمونه کار</ScrollIntoSection>
          <ScrollIntoSection sectionId="order">نحوه سفارش</ScrollIntoSection>
          <ScrollIntoSection sectionId="question">پرسش‌ها</ScrollIntoSection>
          <ScrollIntoSection sectionId="neon">تابلو نئون</ScrollIntoSection>
        </div>
      </nav>
      <HamburgerMenu />
    </>
  );
}
