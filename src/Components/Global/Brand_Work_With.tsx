import Image from "next/image";
import React from "react";
import Brandes from "../brandes";
import { cn } from "@/lib/utils";
import { home } from "@/data/data";


export default function Brand_Work_With({
  ShowStars = true,
  className="",
}: {
  ShowStars?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden py-16 pt-top", className)}>
      <div className="relative z-50">
        <h2 className="text-center">
          <span className="rounded-full bg-secandry_primary px-1 text-paragraph_b text-white">
            Brand
          </span>
          Work With
        </h2>
        <Brandes className="z-50 mt-10" />
        <section className="mt-10 flex flex-col items-center px-mobile md:mt-32 md:flex-row md:gap-20 md:px-0">
          <div className="grid w-full flex-grow grid-cols-1 gap-4 sm:grid-cols-2 md:w-auto">
            {home.section_1.cards.map((item, index) => (
              <div
                key={item.value + index}
                className="flex h-[210px] flex-col justify-evenly rounded-3xl bg-white px-3 shadow-xl"
              >
                <div className="w-[110px]">
                  <Image
                    width={300}
                    height={300}
                    alt={item.name}
                    src={item.image}
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-h5 text-black">{item.value}</h3>
                  <p className="to-black_50 text-paragraph">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-full md:w-[400px]">
            <Image
              width={400}
              height={400}
              className="h-full w-full object-fill"
              alt=""
              src={home.section_1.image}
            />
            <div className="absolute bottom-7 left-2 space-y-0 text-white">
              <h4 className="text-h4">12000+</h4>
              <p className="text-paragraph text-sm">
                employees in 30 countries in Europe
              </p>
            </div>
          </div>
        </section>
        {ShowStars && (
          <>
            <div className="absolute -left-72 -top-72 -z-50 hidden animate-spin2 md:block">
              <Image
                width={600}
                height={600}
                alt=""
                src="/assets/images/elemants/elemants (13).png"
              />
            </div>
            <div className="absolute -bottom-72 -right-72 -z-50 hidden animate-spin2 md:block">
              <Image
                width={600}
                height={600}
                alt=""
                src="/assets/images/elemants/elemants (14).png"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
