import { NavLink } from "react-router-dom";

export default function ProductItem() {
  return (
    <div className="mr-[40px]  flex flex-col gap-[30px] ">
      <NavLink className="border-2 border-blue-200 text-right" to="/NeonProduct">
        نئون
      </NavLink>
      <NavLink className="border-2 border-blue-200 text-right" to="/ChalniumProduct">
        چلنیوم
      </NavLink>
      <NavLink className="border-2 border-blue-200 text-right" to="/LEDProduct">
        ال ای دی
      </NavLink>
    </div>
  );
}
