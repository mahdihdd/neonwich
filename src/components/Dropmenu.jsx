import { useState } from "react";
import DropMenuItem from "./DropMenuItem";

export default function Dropmenu() {
  const [isOpen, setIsOpen] = useState(true);

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
      <i className="fa-solid fa-bars"></i>
      </div>

      {isOpen ? (
        ""
      ) : (
        <DropMenuItem scrollToSection={scrollToSection} dropOpen={dropOpen} />
      )}
    </div>
  );
}
