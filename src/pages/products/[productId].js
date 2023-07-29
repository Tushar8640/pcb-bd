
import ProductDetails from "@/components/ProductDetails";
import Reviews from "@/components/Reviews";
import { BASE_URL } from "@/config/url";



export default function SingleProduct({ data }) {
  console.log(data);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 ">
        <ProductDetails product={data?.data}/>
        <div>
          <Reviews />
        </div>
      </div>
    </section>
  );
}
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${BASE_URL}/api/products/${params?.productId}`);
  const data = await res.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/api/products/`);
  const data = await res.json();
  const paths = data?.data?.map((d) => ({
    params: { productId: d._id },
  }));

  return { paths, fallback: false };
};
