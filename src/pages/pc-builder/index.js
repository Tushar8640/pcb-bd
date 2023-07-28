import PcBuilderItem from "@/components/PcBuilderItem";
import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function PcBuilder() {
  return (
    <div className="container mx-auto flex justify-center w-full">
      <div className="flex flex-col w-[700px] p-6 space-y-4 sm:p-10 bg-secondary text-primary ">
        <h2 className="text-xl font-semibold">Your Build</h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          <PcBuilderItem title="Processor" link="/pc-builder/category/cpu" />
          <PcBuilderItem
            title="Motherboard"
            link="/pc-builder/category/motherboard"
          />
          <PcBuilderItem title="Ram" link="/pc-builder/category/ram" />
          <PcBuilderItem title="Monitor" link="/pc-builder/category/monitor" />
          <PcBuilderItem
            title="Powersupply"
            link="/pc-builder/category/powersupply"
          />
          <PcBuilderItem title="Storage" link="/pc-builder/category/storage" />
          <PcBuilderItem title="Others" link="/pc-builder/category/others" />
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm text-secondary-foreground">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Button varient="primary">
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
