import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import Dropmenu from "./Dropmenu";

export default function NavBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // responsive the menu of the navbar
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640); // Update state on window resize
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  // removing the navbar in scrolling
  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > 700) {
      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`flex fixed z-10 transition-transform duration-300 w-full flex-row items-center justify-between shadow-md  bg-[#80BCBD] py-2 px-3 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <img
        className="drop-shadow-icon"
        src="../../public/logo/neonwich 1.png"
        width="80px"
      />

      {/* <h1 className="text-[35px] text">نئون ویچ</h1> */}
      {isDesktop ? <MenuItem /> : <Dropmenu />}
    </nav>
  );
}
