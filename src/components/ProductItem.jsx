import { NavLink } from "react-router-dom";
import { usePost } from "../context/PostProvider";

export default function ProductItem() {
  

  return (
    <div className="sm:order-1">
      <div className="flex flex-col items-center justify-center mr-[40px] border border-blue-300 py-3 px-5 rounded-2xl shadow-xl">
        <h2 className="mb-10">محصولات</h2>
        <div className="  flex flex-col gap-[30px] ">
          <NavLink
            className="border-2 pl-[150px] bg-blue-100 border-blue-300 text-center rounded-lg p-2"
            to="/NeonProduct"
          >
            نئون
          </NavLink>
          <NavLink
            className="border-2 pl-[150px] bg-blue-100 border-blue-300 text-center rounded-lg p-2"
            to="/ChalniumProduct"

          >
            چلنیوم
          </NavLink>
          <NavLink
            className="border-2 pl-[150px] bg-blue-100 border-blue-300 text-center rounded-lg p-2"
            to="/LEDProduct"

          >
            ال ای دی
          </NavLink>
        </div>
      </div>
    </div>
  );
}
