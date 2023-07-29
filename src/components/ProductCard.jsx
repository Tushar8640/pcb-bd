/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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
        <Image
        width={300}
        height={300}
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </Link>
      <div className="mt-4">
        <h3 className=" text-xs mb-1">{category}</h3>
        <h2 className="text-lg font-medium text-primary">{productName}</h2>
        <p className="mt-1 text-foreground ">{status}</p>
        <p className="mt-1 text-foreground">{price}</p>
      </div>
    </div>
  );
}
