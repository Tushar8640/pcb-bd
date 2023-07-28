/* eslint-disable @next/next/no-img-element */
import ProductDetails from "@/components/ProductDetails";
import Reviews from "@/components/Reviews";
import React from "react";

export default function SingleProduct() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 ">
        <ProductDetails />
        <div>
          <Reviews />
        </div>
      </div>
    </section>
  );
}
