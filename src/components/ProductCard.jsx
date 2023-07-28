/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ProductCard() {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-w-[400px]">
      <Link href={"/pc-builder/1"} className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  );
}
