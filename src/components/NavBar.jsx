import React from "react";
import Dropmenu from "./Dropmenu";

export default function NavBar() {
  return (
    <div className="flex w-full flex-row items-center justify-between  bg-[#d0cfcf] py-2 px-3 rounded mt-[3px]">
      {/* logo */}
      <img className="drop-shadow-icon" src="../../public/logo/neonwich 1.png" width="80px" />
      {/* title */}
      <h1 className="text-[35px]">نئون ویچ متخصص تابلو سازی</h1>
      {/* menu */}
      <Dropmenu/>
    
    </div>
  );
}
