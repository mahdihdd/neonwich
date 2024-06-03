import { Outlet } from "react-router-dom";
import ProductItem from "../components/ProductItem";

export default function Product() {
  return (
    <div className="flex flex-row justify-between items-center h-[730px] border-2 rounded-xl m-3">
        <Outlet />
        <ProductItem />
      </div>
  );
}
