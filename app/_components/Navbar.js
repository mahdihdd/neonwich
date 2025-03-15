// import Image from "next/image";
// import NavbarMenu from "./NavbarMenu";

// export default function Navbar() {
//   return (
//     <>
//     <nav className="fixed flex justify-between items-center font-bold px-5 py-2 ">
//       <Image
//         className="drop-shadow-icon"
//         src="/images/neonwich.png"
//         alt="لوگو"
//         width={100}
//         height={100}
//       />

//       <NavbarMenu />
//     </nav>
//     </> 
//   );
// }

import Image from "next/image";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 bg-green-50 left-0 right-0 flex justify-between items-center font-bold px-5 py-1  shadow-green-100 shadow-md">
      <Image
        className="drop-shadow-icon w-16 sm:w-20"
        src="/images/neonwich.png"
        alt="لوگو"
        width={100}
        height={100}
        unoptimized
      />
      <NavbarMenu />
    </nav>
  );
}