"use client";
import Top_Banner from "@/Components/Top_Banner";
import React, { useState } from "react";
import { IoDocument } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import clsx from "clsx";
import { price } from "@/data/data";
import Link from "next/link";

export default function page() {
  const [selectPlanTime, setSelectPlanTime] = useState<"month" | "year">(
    "month",
  );
  return (
    <main>
      <Top_Banner {...price.banner} />

      <section className="mt-top px-mobile md:px-spacing 2xl:px-spacing_2">
        <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-start">
          <h2 className="text-h4 leading-tight">{price.title}</h2>
          <p className="text-2xl">{price.description}</p>
        </div>
        <div className="mt-60 flex w-full flex-col items-center justify-between md:flex-row">
          {/* card */}
          <div className="space-y-2">
            <div className="grid size-14 place-content-center rounded-full bg-primary/10 text-primary shadow-xl">
              <IoDocument size={30} />
            </div>
            <h3 className="text-2xl font-semibold">{price.cards[0].name}</h3>
            <p className="text-xl opacity-70">{price.cards[0].description}</p>
          </div>
          {/* card */}
          <div className="space-y-2">
            <div className="grid size-14 place-content-center rounded-full bg-primary/10 text-primary shadow-xl">
              <FaShippingFast size={30} />
            </div>
            <h3 className="text-2xl font-semibold">{price.cards[1].name}</h3>
            <p className="text-xl opacity-70">{price.cards[1].description}</p>
          </div>
          {/* card */}
          <div className="space-y-2">
            <div className="grid size-14 place-content-center rounded-full bg-primary/10 text-primary shadow-xl">
              <MdOutlineAccessTimeFilled size={30} />
            </div>
            <h3 className="text-2xl font-semibold">{price.cards[2].name}</h3>
            <p className="text-xl opacity-70">{price.cards[2].description}</p>
          </div>
        </div>
      </section>

      <section className="mt-top flex flex-col items-center gap-10 bg-[#e3f0ff] py-15">
        <div className="space-y-3 text-center">
          <p>
            {price.section_1.subTitle}
            😍
          </p>
          <h2 className="text-h4">{price.section_1.title}</h2>
        </div>

        <div className="flex h-32 w-screen flex-col items-center gap-2 bg-[#cce3ff] p-1 px-7 md:h-16 md:w-fit md:flex-row md:gap-7 md:rounded-full md:px-1">
          <div
            onClick={() => setSelectPlanTime("month")}
            className={clsx(
              "flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full shadow-xl md:w-60",
              {
                "bg-white": selectPlanTime == "month",
              },
            )}
          >
            <h4 className="text-xl font-medium">
              {price.section_1.offers[0].name}
            </h4>
            <span className="rounded-2xl bg-[#cce3ff] px-1 text-sm">
              {price.section_1.offers[0].discount}
            </span>
          </div>

          <div
            onClick={() => setSelectPlanTime("year")}
            className={clsx(
              "flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full shadow-xl md:w-60",
              {
                "bg-white": selectPlanTime == "year",
              },
            )}
          >
            <h4 className="text-xl font-medium">
              {price.section_1.offers[1].name}
            </h4>
            <span className="rounded-2xl bg-[#ff5050] px-1 text-sm text-white">
              {price.section_1.offers[1].discount}
            </span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:px-spacing 2xl:px-spacing_2">
          {price.section_1.plans.map((item) => (
            <div
              key={item.title}
              className="space-y-10 rounded-2xl bg-white p-7"
            >
              <div>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="w-full rounded-2xl bg-primary/5 p-3 py-7 md:w-fit lg:min-w-72">
                    <div className="flex items-end gap-3">
                      <p className="text-xl line-through opacity-80">
                        {selectPlanTime == "month"
                          ? item.discount.month
                          : item.discount.year}
                      </p>
                      <h1 className="text-h4 text-primary">
                        {selectPlanTime == "month"
                          ? item.price.month
                          : item.price.year}{" "}
                      </h1>
                    </div>
                    <p>
                      You&apos;ll Save{" "}
                      {selectPlanTime == "month"
                        ? item.save.month
                        : item.save.year}{" "}
                      Monthly
                    </p>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-h6">{item.title}</h2>
                    <p>{item.des}</p>
                  </div>
                </div>

                <div></div>
              </div>
              <div>
                <ul className="flex flex-wrap items-center justify-between gap-6">
                  {item.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-2 text-lg opacity-85"
                    >
                      <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                        <MdDone />
                      </span>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={item?.cta?.link||"/"} className="flex w-fit items-center gap-2 rounded-full bg-primary/10 px-8 py-4 font-bold uppercase transition-all hover:scale-110">
                <p>{item.cta.name}</p>
                <IoIosArrowRoundUp className="rotate-45" size={30} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
