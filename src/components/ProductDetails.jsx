/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function ProductDetails({ product }) {
  const {
    image,
    productName,
    category,
    status,
    price,
    _id,
    reviews,
    description,
    key_features,
  } = product || {};

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
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        width={500}
        height={500}
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={image}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-lg title-font text-primary  tracking-widest">
          {category}
        </h2>
        <h1 className="text-primary text-3xl title-font font-medium mb-1">
          {productName}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <Star />
            <span className="text-gray-600 ml-3">{averageRating} ratings</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed text-primary">{description}</p>
        <div>
          <h4 className="font-semibold text-lg my-2">Key Features :</h4>
          
         <div className="grid grid-cols-2">
         <h2 className="text-lg title-font text-primary  tracking-widest">
            Brand: {key_features?.brand}
          </h2>
         <h2 className="text-lg title-font text-primary  tracking-widest">
            Brand: {key_features?.brand}
          </h2>
          <h2 className="text-lg title-font text-primary  tracking-widest">
            Model: {key_features?.model}
          </h2>
          <h2 className="text-lg title-font text-primary  tracking-widest">
            Color: {key_features?.color}
          </h2>
         </div>
        </div>
        <div></div>
        <div className="flex mt-5">
          <span className="title-font font-medium text-2xl text-gray-900">
            ${price}
          </span>
          <Button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </Button>
          <Button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
