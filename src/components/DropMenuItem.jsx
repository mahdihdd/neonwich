import { usePost } from "../context/PostProvider";

export default function DropMenuItem({ scrollToSection, dropOpen }) {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  return (
    <div
      onMouseEnter={dropOpen}
      className="absolute right-10 top-13 z-40  bg-[#f2f3f4] rounded p-2"
    >
      <div className="flex flex-col divide-y divide-solid">
        <button
          onClick={() => scrollToSection(descript)}
          className="text-right pb-1  hover:bg-[#b4b4b5]"
        >
          توضیحات
        </button>
        <button
          onClick={() => scrollToSection(neonProduct)}
          className="text-right pb-1  hover:bg-[#b4b4b5]"
        >
          نمونه کار
        </button>
        <button
          onClick={() => scrollToSection(howOrder)}
          className="text-right pb-1  hover:bg-[#b4b4b5]"
        >
          نحوه سفارش
        </button>
        <button
          onClick={() => scrollToSection(questionBox)}
          className="text-right pb-1  hover:bg-[#b4b4b5]"
        >
          سوالات متداول
        </button>
        <button
          onClick={() => scrollToSection(info)}
          className="text-right pb-1  hover:bg-[#b4b4b5]"
        >
          تماس باما
        </button>
      </div>
    </div>
  );
}
