import Brand_Work_With from "@/Components/Global/Brand_Work_With";
import Top_Banner from "@/Components/Top_Banner";
import { about } from "@/data/data";
import { parseAndStyleText } from "@/utils/parseAndStyleText";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="relative overflow-hidden bg-primary/10">
      <Top_Banner
        {...about.banner}
        className="md:flex md:h-[400px] md:justify-center md:pt-14"
      />
      <section className="px-mobile md:px-spacing lg:-translate-y-40 2xl:px-spacing_2">
        <div className="hidden grid-cols-1 gap-10 md:grid-cols-3 lg:grid">
          <div className="col-span-2 h-[506px] overflow-hidden rounded-xl shadow-xl">
            <Image
              className="h-full w-full object-cover"
              width={600}
              height={600}
              alt=""
              src={about.Top_Banner_Images[0]}
            />
          </div>
          <div className="h-[506px] overflow-hidden rounded-xl shadow-xl">
            <Image
              className="h-full w-full object-cover"
              width={300}
              height={300}
              alt=""
              src={about.Top_Banner_Images[1]}
            />
          </div>
        </div>

        <div className="mt-60 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-start">
          <div>
            <p>
              {parseAndStyleText(
                about.subTitle,
                "rounded-full !bg-secandry_primary px-1 !text-white",
              )}
            </p>
            <h2 className="text-h4">{about.title}</h2>
          </div>
          <p className="max-w-xl text-paragraph_b">{about.description}</p>
        </div>

        <div className="relative mt-60 grid grid-cols-1 gap-3 md:grid-cols-3 lg:h-[400px]">
          {about.cards.map((item) => (
            <div key={item.title} className="h-full rounded-xl bg-white p-2">
              <Image width={300} height={300} alt="" src={item.image} />
              <h5 className="text-h6">{item.title}</h5>
              <p className="text-paragraph text-black_75">{item.description}</p>
            </div>
          ))}

          <span className="absolute -left-[34em] top-0 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (13).png"
            />
          </span>
        </div>
        <Brand_Work_With ShowStars={false} className="bg-none" />
      </section>
      <div className="absolute -bottom-44 -right-48 -z-50 hidden animate-spin2 md:block">
        <Image
          width={600}
          height={600}
          alt=""
          src="/assets/images/elemants/elemants (14).png"
        />
      </div>
    </div>
  );
}
