import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardPortfolioProps {
  img: string;
  category: string;
  title: string;
}

export default function CardPortfolio({
  img,
  category,
  title,
}: CardPortfolioProps) {
  return (
    <Link href={"/portfolio/dsfihe"} className="bg-white p-3 opacity-100 cursor-pointer transition-all hover:-translate-y-5 rounded-2xl">
      <div className="h-[200px] w-full md:h-[400px]">
        <Image
          className="h-full w-full object-cover"
          width={400}
          height={400}
          alt="portfolioImage"
          src={img}
        />
      </div>
      <div className="mt-2 space-y-2">
        <p className="flex items-center gap-2 opacity-75">
          <Image
            width={15}
            height={15}
            alt="portfolioIcon"
            src={"/assets/Icons/portfolioIcon.svg"}
          />{" "}
          {category}
        </p>
        <h3 className="text-2xl font-semibold opacity-90 text-black">{title}</h3>
      </div>
    </Link>
  );
}
