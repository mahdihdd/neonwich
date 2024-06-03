import { useRef, useState } from "react";
import { usePost } from "../context/PostProvider";

export default function Dropmenu() {
  const [isOpen, setIsOpen] = useState(true);
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

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
          <button
            onClick={() => scrollToSection(neonProduct)}
            className="text-right pb-1 pl-3"
          >
            نمونه کار
          </button>
          <button
            onClick={() => scrollToSection(howOrder)}
            className="text-right pb-1 pl-3"
          >
            نحوه سفارش
          </button>
          <button
            onClick={() => scrollToSection(questionBox)}
            className="text-right pb-1 pl-3"
          >
            سوالات متداول
          </button>
          <button
            onClick={() => scrollToSection(info)}
            className="text-right pb-1 pl-3"
          >
            تماس باما
          </button>
        </div>
      )}
    </div>
  );
}
