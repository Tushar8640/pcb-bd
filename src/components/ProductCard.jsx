/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { image, productName, category, status, price, _id, reviews } =
    product || {};
  function calculateAverageRating(reviews) {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating = totalRatings / reviews.length;

    return averageRating.toFixed(1); // Return average rating with one decimal place
  }

  const averageRating = calculateAverageRating(reviews);
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
            <p className="mt-1 text-slate-600 bg-green-100 px-2 rounded">
              {status}
            </p>
            <p className="mt-1 text-foreground">${price}</p>
            <p className="mt-1 text-foreground">
              <span>
                <Star />
              </span>{" "}
              ${averageRating}
            </p>
          </div>
          <Button className="mt-4 w-full">View Details</Button>
        </div>
      </Link>
    </div>
  );
}
