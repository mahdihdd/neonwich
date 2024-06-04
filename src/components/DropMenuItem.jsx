import { usePost } from "../context/PostProvider";

export default function DropMenuItem({ scrollToSection, dropOpen }) {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  return (
    <div
      onMouseEnter={dropOpen}
      className="absolute right-10 top-10 z-40  bg-[#f2f3f4] rounded p-2"
    >
      <div className="flex flex-col">
        <button
          onClick={() => scrollToSection(descript)}
          className="text-right pb-1  hover:bg-[#7a7a7b]"
        >
          توضیحات
        </button>
        <button
          onClick={() => scrollToSection(neonProduct)}
          className="text-right pb-1  hover:bg-[#7a7a7b]"
        >
          نمونه کار
        </button>
        <button
          onClick={() => scrollToSection(howOrder)}
          className="text-right pb-1  hover:bg-[#7a7a7b]"
        >
          نحوه سفارش
        </button>
        <button
          onClick={() => scrollToSection(questionBox)}
          className="text-right pb-1  hover:bg-[#7a7a7b]"
        >
          سوالات متداول
        </button>
        <button
          onClick={() => scrollToSection(info)}
          className="text-right pb-1  hover:bg-[#7a7a7b]"
        >
          تماس باما
        </button>
      </div>
    </div>
  );
}
