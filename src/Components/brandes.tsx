"use client";
import { Brands } from "@/data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

export default function Brandes({ className }: { className?: string }) {
  useGSAP(() => {
    const brandSlider = gsap.utils.toArray(".brand-slider");
    if (brandSlider) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      brandSlider.forEach((brand: any) => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(brand, {
          x: "-100%",
          duration: 30,
          ease: "linear",
        });
        tl.to(brand, {
          x: "0",
          duration: 0,
        });
      });
    }
  });
  return (
    <div
      className={
        "h-[130px] overflow-hidden rounded-md bg-black_50 p-3 " + className
      }
    >
      <div className="brand-slider flex h-full items-center gap-6">
        {Brands.map((item, i) => (
          <div
            key={"brand_" + i}
            className="grid h-full min-w-[159px] place-content-center rounded-lg bg-white p-2"
          >
            <span>
              <Image width={300} height={200} src={item} alt="brand1" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
