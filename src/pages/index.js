import Banner from "@/components/Banner";
import FeatureProducts from "@/components/FeatureProducts";
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
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  return { props: { data } };
};
