import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import Image from "next/image";
import React from "react";
import { teamPageData } from "@/data/data";
import TeamCard_2 from "@/Components/Cards/TeamCard_2";

export default function page() {
  return (
    <main className="max-w-screen overflow-hidden pb-28">
      <Top_Banner
        title={teamPageData.banner.title}
        highlightName={teamPageData.banner.highlightName}
        subTitle={teamPageData.banner.subTitle}
      />

      <section className="mt-6 px-mobile md:mt-top md:px-spacing_2">
        <div className="relative flex max-w-screen-lg flex-col items-center justify-center md:flex-row">
          <div className="relative max-w-3xl space-y-4">
            <p>
              {teamPageData.intro.mainText}{" "}
              <span className="text-secandry_primary">
                {teamPageData.intro.highlightedText}
              </span>
            </p>
            <h2 className="text-h4">{teamPageData.intro.heading}</h2>
            <p>{teamPageData.intro.description}</p>
            <Button>
              {teamPageData.intro.buttonText} <teamPageData.intro.buttonIcon />
            </Button>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              alt=""
              src={teamPageData.intro.introImage}
            />
          </div>
          <div className="absolute -right-[50rem] -top-40 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src={teamPageData.intro.animatedBackgroundImage}
            />
          </div>
        </div>

        <div className="mt-top text-center">
          <p className="text-paragraph">
            {teamPageData.section.subHeading}{" "}
            <strong className="rounded-full bg-secandry_primary px-2 text-white">
              {teamPageData.section.highlightedSubHeading}
            </strong>
          </p>
          <h2 className="text-h5">{teamPageData.section.heading}</h2>
        </div>

        <div className="relative mt-60 flex flex-col flex-wrap justify-between gap-2 md:flex-row">
          {teamPageData.section.teamCards.map((item, index) => (
            <TeamCard_2
              key={item.name + index}
              data={item}
              className="flex-grow md:w-[260px] md:flex-grow-0"
            />
          ))}

          <div className="absolute -bottom-44 -right-80 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src={teamPageData.section.animatedBackgroundImages[0]}
            />
          </div>
          <div className="absolute -left-96 -top-44 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src={teamPageData.section.animatedBackgroundImages[1]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
