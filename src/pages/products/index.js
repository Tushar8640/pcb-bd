import ProductCard from '@/components/ProductCard';
import React from 'react'

export default function Products({data}) {
  return (
    <div className='container mx-auto my-5'>
      <div className="grid grid-cols-3">
          {data?.data?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  return { props: { data } };
};
