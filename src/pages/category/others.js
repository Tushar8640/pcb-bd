import ProductCard from "@/components/ProductCard";
import { BASE_URL } from "@/config/url";


import React, { useEffect, useState } from "react";

export default function Others({ data }) {
  const [products, setProducts] = useState([...data?.data]);

  useEffect(() => {
    const filteredProducts = data?.data?.filter(
      (product) => product?.category === "Others"
    );
    setProducts(filteredProducts);
  }, [data]);

  return (
    <div className="container mx-auto my-5">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const data = await res.json();
  return { props: { data } };
};
