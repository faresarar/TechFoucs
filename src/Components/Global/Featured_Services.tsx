import Image from "next/image";
import React from "react";
import ButtonMain from "../MianButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoArrowUpOutline } from "react-icons/io5";
import { parseAndStyleText } from "@/utils/parseAndStyleText";
import { home } from "@/data/data";

export default function Featured_Services({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col items-center gap-16 md:mt-top ",className)}>
      <h5 className="text-center text-h5">{parseAndStyleText(home.section_3.title,"text-primary_secandry")}</h5>
      <div className="w-full space-y-11">
        <div className="grid h-[800px] w-full gap-16 md:h-[394px] md:grid-cols-2">

          <Featured_Service_Card
            title={home.section_3.cards[0].title}
            tags={home.section_3.cards[0].tags}
            color={home.section_3.cards[0].color}
            image={home.section_3.cards[0].image}
          />
          <Featured_Service_Card
            ImageSize={400}
            title={home.section_3.cards[1].title}
            tags={home.section_3.cards[1].tags}
            color={home.section_3.cards[1].color}
            image={home.section_3.cards[1].image}
          />
        </div>
        <div className="grid h-[1500px] gap-6 md:h-[394px] md:grid-cols-3">
          <Featured_Service_Card
            title={home.section_3.cards[2].title}
            tags={home.section_3.cards[2].tags}
            color={home.section_3.cards[2].color}
            image={home.section_3.cards[2].image}
          />
          <Featured_Service_Card
            title={home.section_3.cards[3].title}
            tags={home.section_3.cards[3].tags}
            color={home.section_3.cards[3].color}
            image={home.section_3.cards[3].image}
          />
          <Featured_Service_Card
            title={home.section_3.cards[4].title}
            tags={home.section_3.cards[4].tags}
            color={home.section_3.cards[4].color}
            image={home.section_3.cards[4].image}
          />
        </div>
      </div>
      <ButtonMain
        href={home.section_3.cta.link}
        className="border bg-transparent font-bold"
        name={home.section_3.cta.name}
      />
    </section>
  );
}

// Featured Services Card Component
type Props = {
  image: string;
  title: string;
  tags: string[];
  color: string[];
  ImageSize?: number;
};
const Featured_Service_Card = ({
  image,
  title,
  tags,
  color,
  ImageSize = 500,
}: Props) => {
  return (
    <div
      className={`relative flex h-full items-end rounded-2xl bg-gradient-to-tr [&_img]:hover:scale-110 transition-all ${color[0]} ${color[1]}`}
    >
      <div className="z-50 w-full space-y-3 p-6 text-white">
        <h1 className="text-h5">{title}</h1>
        <div className="flex w-full items-center justify-between">
          <Link href={"/services/it_management_services"} className="size-10 rounded-full bg-white text-black rotate-45 hover:scale-125 transition-all  flex items-center justify-center "><IoArrowUpOutline /></Link>
          <div className="space-x-2">
            {tags.map((tag, index) => (
              <span
                key={tag + index}
                className="rounded-lg border border-white bg-white/20 p-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Image
        className="absolute right-0 top-0 md:-top-10 transition-all"
        width={ImageSize}
        height={ImageSize}
        alt=""
        src={image}
      />
    </div>
  );
};
