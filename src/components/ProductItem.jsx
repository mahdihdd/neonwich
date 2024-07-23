import { NavLink } from "react-router-dom";
import { usePost } from "../context/PostProvider";

export default function ProductItem() {
  return (
    <>
      <div className="mx-4  p-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-10 text-[40px] mx-20">محصولات ما</h2>

          <div className=" flex flex-row gap-[150px] ">
            <NavLink className="text-[20px]" to="/NeonProduct">
              نئون
            </NavLink>
            <NavLink className="text-[20px]" to="/ChalniumProduct">
              چلنیوم
            </NavLink>
            <NavLink className="text-[20px]" to="/LEDProduct">
              ال ای دی
            </NavLink>
          </div>
        </div>
      </div>
      
    </>
  );
}