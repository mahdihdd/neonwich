// "use client";
// import React, { useState } from "react";

// export default function AccordionItem({ title ,  children , num }) {

//     const [curOpen, setCurOpen] = useState(null);
//     const isOpen = num === curOpen;
//   function handleToggle() {
//     setCurOpen(isOpen ? null : num);
//   }

//   return (
//     <div
//       className={`shadow-md cursor-pointer w-full bg-green-100 border-t-4 border-white p-4 rounded-md	 ${
//         isOpen ? "open" : ""
//       }`}
//       onClick={handleToggle}
//     >
//       <div className="flex justify-between">
//         <p className="icon">{isOpen ? "-" : "+"}</p>
//         <p className="title text-right text-[15px] md:text-[19px] ">
//           {title}
//         </p>
//       </div>

//       {isOpen && (
//         <div className="appear content-box text-right text-[12px] md:text-[16px]">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";

export default function AccordionItem({ title, children, num }) {
  const [curOpen, setCurOpen] = useState(null);
  const isOpen = num === curOpen;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`shadow-md cursor-pointer w-full bg-green-100 border-t-4 border-green-200 ${isOpen ? "border-green-600" : ""} p-4 rounded-md transition-all duration-300`}
      onClick={handleToggle}
    >
      <div className="flex justify-between">
        <p className="icon">{isOpen ? "-" : "+"}</p>
        <p className="title text-right text-[12px] md:text-[19px]">{title}</p>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="content-box text-right text-[10px] md:text-[16px]">
          {children}
        </div>
      </div>
    </div>
  );
}
