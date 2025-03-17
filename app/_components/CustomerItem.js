import Image from "next/image";
import React from "react";

export default function CustomerItem({ src, alt, href }) {
  return (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      className="w-24 min-w-[6rem] flex relative flex-col justify-center items-center sm:w-32 h-full flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="object-contain"
        unoptimized
      />
      <p className="absolute bottom-0 text-[11px] sm:text-[15px]">{alt}</p>
    </a>
  );
}
