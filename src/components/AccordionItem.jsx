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
      className={`shadow-md cursor-pointer bg-[#F7FFE5] border-t-4 border-white p-4 rounded-md	 ${
        isOpen ? "open" : ""
      }`}
      onClick={handleToggle}
    >
      <div className="flex justify-between">
        <p className="icon">{isOpen ? "-" : "+"}</p>
        <p className="title text-right 2s:text-[18px] s:text-[23px] sm:text-[28px] ">{title}</p>
      </div>

      {isOpen && (
        <div className="appear content-box text-right text-[18px] sm:text-[21px]">{children}</div>
      )}
    </div>
  );
}
