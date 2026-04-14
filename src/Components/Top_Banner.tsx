import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Top_Banner({ className,title,subTitle,highlightName }: { className?: string,title:string,subTitle:string,highlightName:string }) {
  return (
    <section
      className={cn(
        "relative grid h-72 w-full place-content-center",
        className,
      )}
    >
      <Image
        className="pointer-events-none absolute inset-0 left-0 top-0 -z-40 h-full w-full"
        width={1000}
        height={600}
        src={"/assets/images/backgrounds/Rectangle 14.png"}
        alt="top_image_benner"
      />
      <div className="text-white text-center px-spacing">
        <p>{subTitle} <strong className="text-secandry_primary">{highlightName}</strong></p>
        <h1 className="text-4xl lg:text-h3">{title}</h1>
      </div>
    </section>
  );
}
