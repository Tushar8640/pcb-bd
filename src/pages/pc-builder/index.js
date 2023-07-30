import PcBuilderItem from "@/components/PcBuilderItem";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function PcBuilder() {
  const { cpu, motherboard, storage, ram, powersupply, monitor, others } =
    useSelector((state) => state.pcbuilder);
  const { toast } = useToast();
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    // Check if all the required components are not empty

    if (
      cpu._id &&
      motherboard._id &&
      storage._id &&
      ram._id &&
      powersupply._id &&
      monitor._id
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [cpu, motherboard, storage, ram, powersupply, monitor]);

  const handleBuild = () => {
    if (!disabled) {
      toast({
        title: "Success",
        description: "Your Build is complete",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    }
  };

  return (
    <div className="container mx-auto flex justify-center w-full">
      <div className="flex flex-col w-[700px] p-6 space-y-4 sm:p-10 bg-secondary text-primary ">
        <h2 className="text-xl font-semibold">Your Build</h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          <PcBuilderItem
            title="Processor"
            link="/pc-builder/category/cpu"
            product={cpu}
          />
          <PcBuilderItem
            title="Motherboard"
            link="/pc-builder/category/motherboard"
            product={motherboard}
          />
          <PcBuilderItem
            title="Ram"
            link="/pc-builder/category/ram"
            product={ram}
          />
          <PcBuilderItem
            title="Monitor"
            link="/pc-builder/category/monitor"
            product={monitor}
          />
          <PcBuilderItem
            title="Powersupply"
            link="/pc-builder/category/powersupply"
            product={powersupply}
          />
          <PcBuilderItem
            title="Storage"
            link="/pc-builder/category/storage"
            product={storage}
          />
          <PcBuilderItem
            title="Others"
            link="/pc-builder/category/others"
            product={others}
          />
        </ul>
       
        <div className="flex justify-end space-x-4">
          <Button
            disabled={disabled}
            varient="primary"
            onClick={() => handleBuild()}
          >
            Complete build
          </Button>
        </div>
      </div>
    </div>
  );
}
