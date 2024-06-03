import { Outlet } from "react-router-dom";
import ProductItem from "../components/ProductItem";

export default function Product() {
  return (
    <div className="flex flex-row justify-between items-center h-[750px]">
        <Outlet />
        <ProductItem />
      </div>
  );
}
