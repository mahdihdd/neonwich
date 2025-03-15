import Image from "next/image";
import React from "react";

export default function ProductItem({ src, alt }) {
  return (
    <div
      className="flex flex-col border border-green-400 p-2 rounded-3xl items-center shadow-lg hover:shadow-green-200"
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="object-cover rounded-2xl"
        unoptimized
      />
      <h3 className="mt-2 text-green-700 text-lg">{alt}</h3>
    </div>
  );
}
