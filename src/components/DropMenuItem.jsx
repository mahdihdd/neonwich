import { usePost } from "../context/PostProvider";
import TextWithBlackOutline from "./TextWithBlackOutline";

export default function DropMenuItem({ scrollToSection, dropOpen }) {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  return (
    <div
      onMouseEnter={dropOpen}
      className="absolute right-7 top-10 z-40  bg-[#C4D7B2] rounded-lg p-2"
    >
      <div className="flex flex-col divide-y divide-solid">
        <button
          onClick={() => scrollToSection(descript)}
          className="text-center pb-1  hover:bg-[#b4b4b5]"
        >
         تـوضـیحـات
        </button>
        <button
          onClick={() => scrollToSection(neonProduct)}
          className="text-center pb-1  hover:bg-[#b4b4b5]"
        >
          نـمونـه کـار
        </button>
        <button
          onClick={() => scrollToSection(howOrder)}
          className="text-center pb-1  hover:bg-[#b4b4b5]"
        >
          نـحوه سـفارش
        </button>
        <button
          onClick={() => scrollToSection(questionBox)}
          className="text-center pb-1  hover:bg-[#b4b4b5]"
        >
          سـوالات مـتـداول
        </button>
        <button
          onClick={() => scrollToSection(info)}
          className="text-center pb-1  hover:bg-[#b4b4b5]"
        >
          تـماس بامـا
        </button>
      </div>
    </div>
  );
}
