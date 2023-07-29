import PcBuilderCard from "@/components/PcBuilderCard";
import { BASE_URL } from "@/config/url";


import React, { useEffect, useState } from "react";

export default function Posersupply({ data }) {
  const [products, setProducts] = useState([...data?.data]);

  useEffect(() => {
    const filteredProducts = data?.data?.filter(
      (product) => product?.category === "Posersupply"
    );
    setProducts(filteredProducts);
  }, [data]);

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-3">
        {products?.map((product) => (
          <PcBuilderCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const data = await res.json();
  return { props: { data } };
};
