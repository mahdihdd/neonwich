import { useState } from "react";

export default function Dropmenu() {
  const [isOpen, setIsOpen] = useState(true);
  function dropOpen() {
    setIsOpen(false);
  }
  function dropToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <div onClick={dropToggle} className="cursor-pointer">
        menu
      </div>

      {isOpen ? (
        ""
      ) : (
        <div
          onMouseEnter={dropOpen}
          className="absolute right-14 z-40 bg-[#e5e8ea] rounded p-2"
        >
          <p className="text-right pb-1 pl-3">نمونه کار</p>
          <p className="text-right pb-1 pl-3">نحوه سفارش</p>
          <p className="text-right pb-1 pl-3">سوالات متداول</p>
          <p className="text-right pb-1 pl-3">تماس باما</p>
        </div>
      )}
    </div>
  );
}
