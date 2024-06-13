import { usePost } from "../context/PostProvider";

export default function MenuItem() {
  const { descript, neonProduct, howOrder, questionBox, info } = usePost();

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-row-reverse gap-[30px]">
      <button
        onClick={() => scrollToSection(descript)}
        className="text-right p-2 hover:bg-[#dcdcdc] hover:rounded-md "
      >
        توضیحات
      </button>

      <button
        onClick={() => scrollToSection(neonProduct)}
        className="text-right p-2 hover:bg-[#dcdcdc] hover:rounded-md "
      >
        نمونه کار
      </button>

      <button
        onClick={() => scrollToSection(howOrder)}
        className="text-right p-2 hover:bg-[#dcdcdc] hover:rounded-md "
      >
        نحوه سفارش
      </button>
      <button
        onClick={() => scrollToSection(questionBox)}
        className="text-right p-2 hover:bg-[#dcdcdc] hover:rounded-md"
      >
        سوالات متداول
      </button>
      <button
        onClick={() => scrollToSection(info)}
        className="text-right p-2 hover:bg-[#dcdcdc] hover:rounded-md"
      >
        تماس باما
      </button>
    </div>
  );
}
