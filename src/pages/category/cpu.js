import ProductCard from "@/components/ProductCard";


import React, { useEffect, useState } from "react";

export default function Cpu({ data }) {
  const [products, setProducts] = useState([...data?.data]);

  useEffect(() => {
    const filteredProducts = data?.data?.filter(
      (product) => product?.category === "Processor"
    );
    setProducts(filteredProducts);
  }, [data]);

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-3">
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return { props: { data } };
};
