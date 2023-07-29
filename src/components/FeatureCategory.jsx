/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

export default function FeatureCategory() {
  const categories = [
    { name: "cpu", image: "https://i.ibb.co/r2ssb3Y/cpu-1.png" },
    {
      name: "motherboard",
      image: "https://i.ibb.co/x1jmy2C/motherboard-1.png",
    },
    { name: "ram", image: "https://i.ibb.co/C6W9wVv/ram.png" },
    { name: "storage", image: "https://i.ibb.co/271CW8H/ssd-1.png" },
    { name: "monitor", image: "https://i.ibb.co/jzWBdGR/computer-monitor.png" },
    { name: "powersupply", image: "https://i.ibb.co/BgMcHcw/power-supply.png" },
    { name: "others", image: "https://i.ibb.co/271CW8H/ssd-1.png" },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-center my-10 text-3xl text-primary font-semibold">
          Feature Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {categories?.map((c, i) => (
            <Link
              key={i}
              href={{
                pathname: `/category/${c?.name}`,
              }}
            >
              <div className="bg-secondary dark:bg-slate-300 shadow-md w-[200px] h-[200px] flex justify-center items-center flex-col">
                <Image
                  width={50}
                  height={50}
                  alt="ecommerce"
                  className="object-fill"
                  src={c?.image}
                />
                <span className={"capitalize  text-primary mt-3 text-xl font-semibold dark:text-slate-800"}>
                  {c?.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
