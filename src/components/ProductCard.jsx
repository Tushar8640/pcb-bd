/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function ProductCard({ product }) {
  const { image, productName, category, status, price, averageRating, _id } =
    product || {};
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-w-[400px] border hover:shadow-md">
      <Link href={`/products/${_id}`}>
        {" "}
        <div className="block relative h-48 rounded overflow-hidden">
          <Image
            width={300}
            height={300}
            alt="ecommerce"
            className="object-fill"
            src={image}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <h3 className=" text-lg font-semibold mb-1">{category}</h3>
          <h2 className="text-lg font-medium text-primary">{productName}</h2>
          <div className="flex justify-between my-2">
            <p className="mt-1 text-primary bg-green-100 px-2 rounded">
              {status}
            </p>
            <p className="mt-1 text-foreground">${price}</p>
          </div>
          <Button className="mt-4 w-full">View Details</Button>
        </div>
      </Link>
    </div>
  );
}
