/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProductCard from "./ProductCard";

export default function FeatureProducts({ products }) {
  return (
    <section className="text-gray-600 body-font">
     
      <div className="container px-5 py-16 mx-auto">
      <h1 className="text-center my-10 text-3xl text-primary font-semibold">Feature Products</h1>
        <div className="grid grid-cols-3 gap-5">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
