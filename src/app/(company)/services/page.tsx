import Featured_Services from "@/Components/Global/Featured_Services";
import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import { servicesData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function page() {
  const { banner, hero, whyUs } = servicesData;
  return (
    <main className="relative overflow-hidden bg-primary/10 pb-28">
      <Top_Banner {...banner} />
      <div className="mt-60 md:mt-top px-mobile md:px-spacing_2">
        <div className="relative flex max-w-screen-lg flex-col items-center justify-center md:flex-row">
          <div className="relative max-w-3xl space-y-10">
            <p>
              We Are{" "}
              <span className="text-secandry_primary">{hero.highlight}</span>
            </p>
            <h2 className="text-h4">{hero.title}</h2>
            <p>{hero.description}</p>
            <Button size="lg">
              Talk to an Expart <IoIosArrowRoundForward />
            </Button>
          </div>
          <div>
            <Image
              className="transition-all hover:scale-110"
              width={600}
              height={600}
              alt=""
              src={hero.mainImage}
            />
          </div>
          <div className="absolute -right-[50rem] -top-40 -z-50 hidden animate-spin2 md:block">
            <Image width={600} height={600} alt="" src={hero.bgImage} />
          </div>
        </div>

        <Featured_Services className="px-0 [&_button]:!border-black [&_button]:!text-black" />

        <div className="mt-top flex flex-col items-center justify-center md:text-center">
          <p>
            <span className="text-secandry_primary">{whyUs.subtitle}</span>{" "}
            better
          </p>
          <h5 className="max-w-xl text-center text-h5">{whyUs.title}</h5>
          <div className="flex w-full justify-center">
            <div className="mt-60 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-9">
              {whyUs.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image width={60} height={60} alt="" src={feature.icon} />
                  <h6 className="text-h6">{feature.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 -left-52 -z-50 hidden animate-spin2 md:block">
        <Image width={600} height={600} alt="" src={whyUs.bottomImage} />
      </div>
    </main>
  );
}
