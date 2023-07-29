/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PlusSquare } from "lucide-react";

export default function PcBuilderItem({ title, link, product }) {
  const { image, productName, category, status, price, averageRating } =
    product || {};
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        {image && (
          <img
            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={image}
            alt="Polaroid camera"
          />
        )}
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leadi sm:pr-8">{title}</h3>
              <p className="text-lg text-primary">{productName}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{price}</p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <Link href={link}>
              <Button size="sm" varient="secondary">
                <PlusSquare />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
