import React from "react";
import Dropmenu from "./Dropmenu";

export default function NavBar() {
  return (
    <div className="flex w-full flex-row justify-between bg-[#FFFAE6] p-5 mx-1 rounded mt-[1px]">
      {/* logo */}
      <div>neon</div>
      {/* title */}
      <h1>نئون ویچ متخصص تابلو سازی</h1>
      {/* menu */}
      <Dropmenu/>
    
    </div>
  );
}
