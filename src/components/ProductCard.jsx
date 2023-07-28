/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  const { image, productName, category, status, price, averageRating, _id } =
    product || {};
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-w-[400px]">
      <Link
        href={`/products/${_id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </Link>
      <div className="mt-4">
        <h3 className=" text-xs mb-1">{category}</h3>
        <h2 className="text-lg font-medium text-primary">The Catalyzer</h2>
        <p className="mt-1 text-foreground">{price}</p>
      </div>
    </div>
  );
}
