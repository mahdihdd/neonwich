import { usePost } from "../context/PostProvider";
import { CiShoppingCart } from "react-icons/ci";
import { LiaQuestionSolid } from "react-icons/lia";
import { TbSolarElectricity } from "react-icons/tb";
import { BsFileText } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";


export default function MenuItem() {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-row-reverse gap-[30px]">
    
      <button
        onClick={() => scrollToSection(descript)}
        className="flex gap-1 text-right p-2 hover:bg-[#f1f09b] hover:rounded-md "
      >
        <BsFileText />
        توضیحات
      </button>

      <button
        onClick={() => scrollToSection(neonProduct)}
        className="flex gap-1 text-right p-2 hover:bg-[#f1f09b] hover:rounded-md"
      >
        <TbSolarElectricity />
        نمونه کار
      </button>

      <button
        onClick={() => scrollToSection(howOrder)}
        className="flex gap-1 text-right p-2 hover:bg-[#f1f09b] hover:rounded-md "
      >
        <CiShoppingCart />
        نحوه سفارش
      </button>
      <button
        onClick={() => scrollToSection(questionBox)}
        className="flex gap-1 text-right p-2 hover:bg-[#f1f09b] hover:rounded-md"
      >
        <LiaQuestionSolid />
        سوالات متداول
      </button>
      <button
        onClick={() => scrollToSection(info)}
        className="flex gap-1 text-right p-2 hover:bg-[#f1f09b] hover:rounded-md"
      >
        <MdConnectWithoutContact />
        ارتباط با ما
      </button>
    </div>
  );
}
