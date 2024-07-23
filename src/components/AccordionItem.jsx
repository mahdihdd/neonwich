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
    <div
      className={`shadow-md cursor-pointer border-t-4 border-white p-4 rounded-md	 ${
        isOpen ? "open" : ""
      }`}
      onClick={handleToggle}
    >
      <div className="flex justify-between">
        <p className="icon">{isOpen ? "-" : "+"}</p>
        <p className="title text-right sm:text-[22px] ">{title}</p>
      </div>

      {isOpen && (
        <div className="appear content-box text-right text-[18px]">{children}</div>
      )}
    </div>
  );
}
