import { usePost } from "../context/PostProvider";
import { CiShoppingCart } from "react-icons/ci";
import { LiaQuestionSolid } from "react-icons/lia";
import { TbSolarElectricity } from "react-icons/tb";
import { BsFileText } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import TextWithBlackOutline from "./TextWithBlackOutline";

export default function MenuItem() {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-row-reverse gap-[30px]  sm:text-sm sm:text-normal md:text-lg lg:text-2xl ">
      <button
        onClick={() => scrollToSection(descript)}
        className="flex justify-center items-center gap-1 text-right p-2 hover:bg-[#C4D7B2] hover:rounded-md "
      >
        <BsFileText />
        <TextWithBlackOutline>تـوضـیـحات</TextWithBlackOutline>
      </button>

      <button
        onClick={() => scrollToSection(neonProduct)}
        className="flex justify-center items-center gap-1 text-right p-2 hover:bg-[#C4D7B2] hover:rounded-md"
      >
        <TbSolarElectricity />
        <TextWithBlackOutline>نـمونـه کـار</TextWithBlackOutline>
      </button>

      <button
        onClick={() => scrollToSection(howOrder)}
        className="flex justify-center items-center gap-1 text-right p-2 hover:bg-[#C4D7B2] hover:rounded-md "
      >
        <CiShoppingCart />
        <TextWithBlackOutline>نـحوه سـفارش</TextWithBlackOutline>
      </button>
      <button
        onClick={() => scrollToSection(questionBox)}
        className="flex justify-center items-center gap-1 text-right p-2 hover:bg-[#C4D7B2] hover:rounded-md"
      >
        <LiaQuestionSolid />
        <TextWithBlackOutline>ســوالات مـتداول</TextWithBlackOutline>
      </button>
      <button
        onClick={() => scrollToSection(info)}
        className="flex justify-center items-center gap-1 text-right p-2 hover:bg-[#C4D7B2] hover:rounded-md"
      >
        <MdConnectWithoutContact />
        <TextWithBlackOutline>ارتـباط بـا ما</TextWithBlackOutline>
      </button>
    </div>
  );
}
