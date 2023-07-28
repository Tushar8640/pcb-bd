import ProductDetails from "@/components/ProductDetails";
import Reviews from "@/components/Reviews";
import React from "react";

export default function SingleProduct({ data }) {
  console.log(data);
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
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${params?.productId}`
  );
  const data = await res.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {

  const res = await fetch("http://localhost:3000/api/products/");
  const data = await res.json();


  const paths = data?.data?.map((d) => ({
    params: { productId: d._id },
  }));

  return { paths, fallback: false };
};
