import Image from "next/image";
import React from "react";
import ProductItem from "../_components/ProductItem";

const products = [
  
  {
    src: "/images/product/product1.jpg",
    key: "2",
    name: "تابلو نئون کافی شاپ",
  },
  {
    src: "/images/product/product2.jpg",
    key: "3",
    name: "تابلو نئون خودرو",
  },
  {
    src: "/images/product/product3.jpg",
    key: "4",
    name: "تابلو نئون بوتیک",
  },
  {
    src: "/images/product/product4.jpg",
    key: "5",
    name: "تابلو نئون میوه",
  },
  {
    src: "/images/product/product5.jpg",
    key: "6",
    name: "تابلو نئون اتاق فرار",
  },
  {
    src: "/images/product/product6.jpg",
    key: "7",
    name: "تابلو نئون موبایل",
  },
  {
    src: "/images/product/product8.jpg",
    key: "8",
    name: "تابلو نئون کافه",
  },
  {
    src: "/images/product/product9.jpg",
    key: "9",
    name: "تابلو نئون سینما",
  },
  {
    src: "/images/product/product10.jpg",
    key: "10",
    name: "تابلو نئون پت شاپ",
  },
  {
    src: "/images/product/product11.jpg",
    key: "11",
    name: "تابلو نئون میوه",
  },
  {
    src: "/images/product/product12.jpg",
    key: "12",
    name: "تابلو نئون فروشگاه",
  },
  {
    src: "/images/product/product13.jpg",
    key: "13",
    name: "تابلو نئون بوتیک",
  },

  {
    src: "/images/product/product14.jpg",
    key: "15",
    name: "تابلو نئون دخانیات",
  },
  
  {
    src: "/images/product/product15.jpg",
    key: "17",
    name: "تابلو نئون موسیقی",
  },
  {
    src: "/images/product/product22.jpg",
    key: "22",
    name: "تابلو نئون پروتئین",
  },
  {
    src: "/images/product/product23.jpg",
    key: "23",
    name: "تابلو نئون بوتیک گیسو",
  },

  {
    src: "/images/product/product24.jpg",
    key: "24",
    name: "تابلو نئون قنادی",
  },
  {
    src: "/images/product/product25.jpg",
    key: "25",
    name: "تابلو نئون فروشگاه",
  },
  {
    src: "/images/product/product26.jpg",
    key: "26",
    name: "تابلو نئون فروشگاه",
  },
  {
    src: "/images/product/product27.jpg",
    key: "27",
    name: "تابلو نئون فروشگاه",
  },
  {
    src: "/images/product/product28.jpg",
    key: "28",
    name: "تابلو نئون فروشگاه",
  },
  {
    src: "/images/product/product29.jpg",
    key: "29",
    name: "تابلو نئون پارچه سرا",
  },
  {
    src: "/images/product/product30.jpg",
    key: "30",
    name: "تابلو نئون سیمونی",
  },
  {
    src: "/images/product/product31.jpg",
    key: "31",
    name: "تابلو نئون فروشگاه",
  },
];

export default function NeonBoard() {
  return (
    <div id="neon" className="flex flex-col items-center mt-10">
      <div className="flex items-center flex-row-reverse gap-2">
        <h2 className="text-2xl md:text-3xl text-green-800">
          طرح نئون پیشنهادی
        </h2>
        <Image
          src="/svg/board.png"
          alt="لوگو"
          width={50}
          height={50}
          unoptimized
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 mt-5">
        {products.map((product) => (
          <ProductItem src={product.src} key={product.key} alt={product.name} />
        ))}
      </div>
    </div>
  );
}
