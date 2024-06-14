import RevealUp from "./animation/RevealUp";

export default function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <RevealUp>
      <div
        className={`shadow-md cursor-pointer border-t-4 border-white p-4 ${
          isOpen ? "open" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="flex justify-between">
          <p className="icon">{isOpen ? "-" : "+"}</p>
          <p className="title text-right">{title}</p>
          {/* <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p> */}
        </div>

        {isOpen && (
          <div className="appear content-box text-right">{children}</div>
        )}
      </div>
    </RevealUp>
  );
}
