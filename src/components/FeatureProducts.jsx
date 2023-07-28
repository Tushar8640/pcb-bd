/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProductCard from "./ProductCard";

export default function FeatureProducts({ products }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
