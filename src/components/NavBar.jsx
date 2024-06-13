import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import Dropmenu from "./Dropmenu";

export default function NavBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640); // Set breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640); // Update state on window resize
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  return (
    <div className="flex w-full flex-row items-center justify-between  bg-[#eaeaea] py-2 px-3  mt-[3px]">
      <img
        className="drop-shadow-icon"
        src="../../public/logo/neonwich 1.png"
        width="80px"
      />
      {/* <h1 className="text-[35px]">نئون ویچ متخصص تابلو سازی</h1> */}

      {isDesktop ? <MenuItem /> : <Dropmenu />}
    </div>
  );
}
