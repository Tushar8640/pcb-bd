/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToBuild } from "@/redux/pcbuilder/pcBuilderSlice";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PcBuilderCard({ product }) {
  const { image, productName, category, status, price, averageRating, _id } =
    product || {};
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddtoBuild = () => {
    dispatch(addToBuild(product));
    router.push("/pc-builder");
  };
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-w-[400px] my-10 shadow-md">
      <Image
        width={300}
        height={300}
        alt="ecommerce"
        className="object-fill"
        src={image}
      />

      <div className="mt-4">
        <h3 className=" text-lg mb-1">{category}</h3>
        <h2 className="text-lg font-medium text-primary">{productName}</h2>
        <p className="mt-1 text-foreground">{status}</p>
        <p className="mt-1 text-foreground">{price}</p>
      </div>
      <Button onClick={handleAddtoBuild} varient="outline">
        Select
      </Button>
    </div>
  );
}
