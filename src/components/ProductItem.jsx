import { NavLink } from "react-router-dom";

export default function ProductItem() {
  return (
    <>
      <div className="mx-4  p-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-10 text-[40px] -mx-12 sm:mx-20">محصولات ما</h2>

          <div className=" flex flex-row-reverse 2s:gap-[50px] s:gap-[50px] sm:gap-[60px] md:gap-[100px] lg:gap-[150px]">
            <NavLink className="text-[20px] s:text-[25px] 2s:px-1 sm:px-8 rounded-xl hover:text-[#A0C49D]" to="/NeonProduct">
              نئون
            </NavLink>
            <NavLink className="text-[20px] s:text-[25px] 2s:px-1 sm:px-8 rounded-xl hover:text-[#A0C49D]" to="/ChalniumProduct">
              چلنیوم
            </NavLink>
            <NavLink className="text-[20px] s:text-[25px] 2s:px-1 sm:px-8 rounded-xl hover:text-[#A0C49D]" to="/LEDProduct">
              ال ای دی
            </NavLink>
          </div>
          <div className="border-b-2 shadow-2xl border-[#A0C49D] 2s:w-[250px] s:w-[400px] sm:w-[600px] lg:w-[800px] 2s:mt-4  s:mt-8"></div>
        </div>
      </div>
      
    </>
  );
}
