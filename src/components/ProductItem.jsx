// import { NavLink } from "react-router-dom";

// export default function ProductItem() {
//   return (
//     <>
//       <div className="mx-4  p-4">
//         <div className="flex flex-col items-center justify-center">
//           <h2 className="mb-10 text-[40px] mx-20">محصولات ما</h2>

//           <div className=" flex flex-row gap-[150px] ">
//             <NavLink className="text-[20px]" to="/NeonProduct">
//               نئون
//             </NavLink>
//             <NavLink className="text-[20px]" to="/ChalniumProduct">
//               چلنیوم
//             </NavLink>
//             <NavLink className="text-[20px]" to="/LEDProduct">
//               ال ای دی
//             </NavLink>
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// }
import { NavLink } from "react-router-dom";

export default function ProductItem() {
  return (
    <div className="bg-[#E1ECC8] mx-4 p-6 md:p-10 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-10 text-4xl md:text-5xl font-bold text-center text-[#A0C49D]">
          محصولات ما
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <NavLink
            className="text-lg md:text-xl font-medium text-[#A0C49D] hover:text-white bg-[#C4D7B2] hover:bg-[#A0C49D] py-2 px-4 rounded transition-colors duration-300"
            to="/NeonProduct"
          >
            نئون
          </NavLink>
          <NavLink
            className="text-lg md:text-xl font-medium text-[#A0C49D] hover:text-white bg-[#C4D7B2] hover:bg-[#A0C49D] py-2 px-4 rounded transition-colors duration-300"
            to="/ChalniumProduct"
          >
            چلنیوم
          </NavLink>
          <NavLink
            className="text-lg md:text-xl font-medium text-[#A0C49D] hover:text-white bg-[#C4D7B2] hover:bg-[#A0C49D] py-2 px-4 rounded transition-colors duration-300"
            to="/LEDProduct"
          >
            ال ای دی
          </NavLink>
        </div>
      </div>
    </div>
  );
}
