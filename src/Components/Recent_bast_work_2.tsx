"use client";
import React, { useState } from "react";
import ButtonMain from "./MianButton";
import { motion } from "framer-motion";
import { parseAndStyleText } from "@/utils/parseAndStyleText";
import { home } from "@/data/data";
import Image from "next/image";
export default function Recent_bast_work_2() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="mt-top md:px-spacing">
      <div className="text-center md:space-y-2 md:text-start">
        <p>
          {parseAndStyleText(
            home.section_4.subTitle,
            "font-bold text-secandry_primary",
          )}
        </p>
        <h3 className="text-h4 md:text-h3">{home.section_4.title}</h3>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="max-w-3xl text-paragraph_b opacity-70">
            {home.section_4.description}
          </p>
          <ButtonMain className="text-white" href="#" name="All Works" />
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-4 md:flex-row">
        {home.section_4.cards.map((item, i) => (
          <Works_Card
            data={item}
            onHover={() => setActiveIndex(i)}
            key={"Our_Recent_Best_Works" + i}
            active={activeIndex == i}
          />
        ))}
      </div>
    </section>
  );
}
// Our Recent Best Works Card
const Works_Card = ({
  active = false,
  data,
  onHover,
}: {
  active?: boolean;
  onHover: () => void;
  data: { name: string; image: string; subName: string };
}) => {
  return (
    <>
      <motion.div
        onMouseEnter={onHover}
        variants={{
          animate: { width: "800px" },
          initial: { width: "9rem" },
        }}
        initial="initail"
        animate={active ? "animate" : "initial"}
        transition={{ duration: 0.2, ease: "linear" }}
        className={`relative hidden h-[300px] overflow-hidden rounded-2xl md:block md:h-[500px]`}
      >
        <Image
          className="absolute inset-0 aspect-square h-full !min-w-full object-cover"
          height={300}
          width={800}
          alt=""
          src={data?.image}
        />
        <motion.div
          variants={{
            _initial: {
              y: "100%",
            },
            animate: {
              y: "0%",
            },
          }}
          initial="_initial"
          animate={active ? "animate" : "_initial"}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 top-0 flex items-end justify-start text-white"
        >
          <div className="z-50 flex w-full items-center justify-between bg-gradient-to-t from-black to-transparent p-5">
            <div>
              <h1 className="text-h4">{data?.name}</h1>
              <p className="text-paragraph opacity-50">{data?.subName}</p>
            </div>
            <ButtonMain
              href={home?.section_4?.cta.link || "/"}
              className="text-nowrap"
              name={home?.section_4?.cta.name}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* mobile */}
      <div
        className={`relative h-[300px] w-full overflow-hidden rounded-2xl pl-1 md:hidden md:h-[539px]`}
      >
        <Image
          className="min-w- absolute inset-0 h-full w-full"
          height={300}
          width={300}
          alt=""
          src={data?.image}
        />
        <div className="absolute inset-0 top-0 flex items-end justify-start bg-gradient-to-t from-sky-950 to-transparent text-white">
          <div className="flex w-full items-center justify-between p-5">
            <div>
              <h1 className="text-h5 leading-8">{data?.name}</h1>
              <p className="text-paragraph opacity-50">{data?.subName}</p>
            </div>
            <ButtonMain
              href={home?.section_4?.cta?.link || "/"}
              name={home.section_4.cta.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};
