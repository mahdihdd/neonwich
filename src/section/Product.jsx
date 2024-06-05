import { Outlet } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { usePost } from "../context/PostProvider";

export default function Product() {
  const {neonProduct} = usePost()

  return (
    <div ref={neonProduct} className="flex flex-col sm:flex-row justify-between items-center h-[730px] border-2 rounded-xl m-3">
        <ProductItem />
        <Outlet />
      </div>
  );
}
