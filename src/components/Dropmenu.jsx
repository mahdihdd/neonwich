import { useState } from "react";
import DropMenuItem from "./DropMenuItem";

export default function Dropmenu() {
  const [isOpen, setIsOpen] = useState(true);

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen((isOpen) => !isOpen);
  }

  function dropOpen() {
    setIsOpen(false);
  }
  function dropToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <div onClick={dropToggle} className="cursor-pointer relative">
        <i
          className={`text-2xl ${
            isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark"
          }`}
        ></i>
      </div>

      {isOpen ? (
        ""
      ) : (
        <DropMenuItem scrollToSection={scrollToSection} dropOpen={dropOpen} />
      )}
    </div>
  );
}
