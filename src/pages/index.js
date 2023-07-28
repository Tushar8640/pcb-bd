import Banner from "@/components/Banner";
import FeatureProducts from "@/components/FeatureProducts";
import MainMenu from "@/components/shared/MainMenu";
import { useSelector } from "react-redux";

export default function Home() {
  const  counter  = useSelector((state) => state.pcbuilder);

  return (
    <div>
      <h1 className="w-[500px] my-4 text-primary  text-4xl text-center">
        {counter.value}
      </h1>
      <Banner />
      <FeatureProducts />
    </div>
  );
}
