import PcBuilderCard from "@/components/PcBuilderCard";
import { BASE_URL } from "@/config/url";


export default function Monitor({ data }) {
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map(
          (product) =>
            product?.category === "Monitor" && (
              <PcBuilderCard key={product?._id} product={product} />
            )
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const data = await res.json();
  return { props: { data } };
};
