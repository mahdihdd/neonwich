import Image from "next/image";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 py-1 bg-green-50 left-0 right-0 flex justify-between items-center font-bold px-5 shadow-green-100 shadow-md">
      <Image
        className="drop-shadow-icon w-16 sm:w-20"
        src="/images/neonwich.png"
        alt="لوگو"
        width={50}
        height={50}
        unoptimized
      />
      <NavbarMenu />
    </nav>
  );
}
