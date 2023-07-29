import Banner from "@/components/Banner";
import FeatureProducts from "@/components/FeatureProducts";
import { BASE_URL } from "@/config/url";
import { useSelector } from "react-redux";

export default function Home({ data }) {

  const counter = useSelector((state) => state.pcbuilder);
  return (
    <div>
      <h1 className="w-[500px] my-4 text-primary  text-4xl text-center">
        {counter.value}
      </h1>
      <Banner />
      <FeatureProducts products={data?.data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/api/featured-products`);
  const data = await res.json();
  return { props: { data } };
};
