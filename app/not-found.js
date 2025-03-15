import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-40">
      <p className="text-red-500 text-9xl">404</p>
      <p className="text-3xl text-red-400">error</p>
      <p className="mt-5 text-xl sm:text-3xl" dir="rtl">صفحه مورد نظر یافت نشد❌</p>
      <Link className="bg-green-500 p-2 sm:p-3 rounded-lg hover:text-white shadow-md mt-3" href="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
}
