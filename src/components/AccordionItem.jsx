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
      className={`item ${
        isOpen ? "open" : ""
      }`}
      onClick={handleToggle}
    >
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <p className="title text-right">{title}</p>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>

      {isOpen && <div className="content-box text-right">{children}</div>}
    </div>
  );
}
