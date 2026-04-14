import React from 'react';
import Brand_Work_With from "@/Components/Global/Brand_Work_With";
import ButtonMain from "@/Components/MianButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/UI/carousel";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import Featured_Services from "@/Components/Global/Featured_Services";
import TeamCard_1 from "@/Components/Cards/TeamCard_1";
import { parseAndStyleText } from "@/utils/parseAndStyleText";
import { home } from "@/data/data";

export default function Home_2() {
  return (
    <div >
      {/* hero */}
      <div className="hero-section relative grid h-[923px] place-content-center overflow-hidden bg-primary bg-[url(/assets/images/img/hero_Image.jpg)] text-center text-white">
        <div className="z-30 flex w-full flex-col items-center justify-center gap-[27px]">
          <h1 className="text-center text-h5 md:px-spacing_2 md:text-h4 xl:text-h1">
            {parseAndStyleText(home.hero.title, "!text-secandry_primary")}
          </h1>
          <p className="text-paragraph_b text-white/100">
            {home.hero.description}
          </p>
          <ButtonMain
            href={home?.hero?.cta?.link || "/"}
            className="w-fit bg-secandry_gradinet md:mt-7"
            name={home.hero.cta.name}
          />
        </div>
      </div>
      {/* Brand Work With */}
      <Brand_Work_With className="bg-[#F3F3F3] lg:px-spacing" />

      {/* We are Techco */}
      <section className="md:mt-16 lg:px-spacing">
        <div className="grid w-full grid-cols-1 gap-6 md:h-[405px] md:grid-cols-2">
          <div className="grid place-content-center">
            <Image
              width={400}
              height={400}
              alt=""
              className="w-full"
              src={home.section_2.mainImage_2}
            />
          </div>

          <div className="space-y-5 px-mobile md:px-0">
            <div>
              <p>
                {parseAndStyleText(
                  home.section_2.subTitle,
                  "font-bold text-secandry_primary",
                )}
              </p>
              <h4 className="text-h6 leading-tight text-black md:text-h4">
                {parseAndStyleText(home.section_2.title)}
              </h4>
            </div>
            <p>{home.section_2.description}</p>
            <div>
              <ul className="space-y-2">
                {home.section_2.infoList.map((item, index) => (
                  <li key={index + item} className="flex items-center gap-1">
                    <span className="text-primary">
                      <IoMdArrowDropright size={24} />
                    </span>{" "}
                    <p className="text-paragraph_b">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <ButtonMain
              className="w-fit text-white"
              href={home.section_2.cta.link}
              name={home.section_2.cta.name}
            />
          </div>
        </div>

        <div className="mt-16 w-full px-mobile lg:px-spacing">
          <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:justify-between">
            {home.section_2.listCard.map((item, index) => (
              <li key={item.title + index} className="flex items-center gap-3">
                <span>
                  <Image
                    width={75}
                    height={75}
                    alt="Expert Team Members"
                    src={item.image}
                  />
                </span>
                <div>
                  <h4 className="text-xl font-bold lg:text-h6">{item.title}</h4>
                  <p className="text-paragraph">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Featured Services */}
      <Featured_Services className="lg:px-spacing 2xl:px-spacing_2" />
      {/* Our Recent Best Works */}
      <section className="mt-top">
        <div className="text-center md:space-y-2 md:text-start lg:px-spacing">
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
            <ButtonMain
              className="text-white"
              href={home.section_4.cta_2.link}
              name={home.section_4.cta_2.name}
            />
          </div>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: "center",
            }}
            className="h-[300px] w-full md:h-[539px]"
          >
            <CarouselContent className="md:space-x-2">
              {home.section_4.cards.map((item, index) => (
                <CarouselItem
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  key={index + "Success_With_Project"}
                  className="relative h-[300px] overflow-hidden rounded-2xl pl-1 md:h-[539px] md:basis-1/2"
                >
                  <div className="absolute inset-0 top-0 flex items-end justify-start  text-white">
                    <div className="flex w-full items-center justify-between p-5 bg-gradient-to-t from-black to-transparent">
                      <div>
                        <h1 className="text-h4">{item.name}</h1>
                        <p className="text-paragraph opacity-50">
                          {item.subName}
                        </p>
                      </div>
                      <ButtonMain
                        href={home.section_4.cta.link}
                        className="hidden md:flex"
                        name={home.section_4.cta.name}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      {/* What clients say */}
      <section className="bg-[#F3F3F3] px-mobile py-4 text-center md:mt-top lg:px-spacing_2">
        <p>
          {parseAndStyleText(
            home.section_5.subTitle,
            "rounded-full bg-secandry_primary px-1 font-bold text-white",
          )}
        </p>
        <h3 className="text-h5 md:text-h4">{home.section_5.title}</h3>
        <div className="mt-5 flex flex-wrap justify-center gap-10 md:mt-16">
          {home.section_5.card.map((item, index) => (
            <div
              key={index + "What clients say"}
              className="w-[400px] space-y-3 rounded-2xl bg-white px-2 py-6"
            >
              <div className="relative mt-7 flex w-full items-end justify-center">
                <Image width={200} height={200} alt="" src={item.client.img} />
              </div>
              <h6 className="text-h6">“{item.client.name}”</h6>
              <p className="mt-6 text-paragraph">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Skilled Experts */}
      <section className="relative mt-top w-full overflow-hidden py-4 text-center">
        <p>
          {parseAndStyleText(
            home.section_6.subTitle,
            "rounded-full bg-secandry_primary px-1 font-bold text-white",
          )}
        </p>
        <h3 className="text-h5 md:mt-4 md:text-h4">{home.section_6.title}</h3>
        <div className="mt-5 w-full md:mt-10">
          <Carousel className="w-full">
            <CarouselContent className="gap-2">
              {home.section_6.cards.map((item, index) => (
                <CarouselItem
                  className="basis-96 md:basis-1/3 lg:basis-1/5"
                  key={index + "Team Members"}
                >
                  <TeamCard_1 data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mt-10 grid w-full place-content-center">
          <ButtonMain
            href={home.section_6.cta.link}
            className="w-fit border border-border bg-transparent font-bold text-black"
            name={home.section_6.cta.name}
          />
        </div>
        <Image
          className="absolute -left-32 -top-32 -z-40 hidden animate-spin2 md:block"
          width={600}
          height={600}
          alt=""
          src={"/assets/images/elemants/elemants (13).png"}
        />
        <Image
          className="absolute -bottom-32 -right-32 -z-40 hidden animate-spin2 md:block"
          width={600}
          height={600}
          alt=""
          src={"/assets/images/elemants/elemants (14).png"}
        />
      </section>
      {/* blogs latest artical */}
      <section className="w-full py-4 text-center md:mt-top">
        <p>
          {parseAndStyleText(
            home.section_7.subTitle,
            "rounded-full bg-secandry_primary px-1 font-bold text-white",
          )}
        </p>
        <h3 className="text-h5 md:mt-4 md:text-h4">{home.section_7.title}</h3>
        <div className="mt-4 grid grid-cols-1 gap-5 px-mobile md:mt-16 md:grid-cols-3 md:px-spacing">
          {home.section_7.blogs.map((item, i) => (
            <div
              key={i + "blogs latest"}
              className="over w-full rounded-xl bg-white pb-3 shadow-xl md:w-[420px]"
            >
              <div className="w-full">
                <Image
                  className="w-full"
                  width={400}
                  height={400}
                  alt=""
                  src={item.image}
                />
              </div>
              <div className="p-2">
                <div className="mt-3 flex items-center gap-3">
                  {item.category.map((name) => (
                    <span
                      key={name + "category"}
                      className="rounded-xl border border-black px-2 py-[1px] opacity-85"
                    >
                      {name}
                    </span>
                  ))}
                  <p className="flex">
                    <span>
                      <Image
                        width={23}
                        height={23}
                        alt=""
                        src={"/assets/Icons/stash_data-date-duotone.svg"}
                      />
                    </span>
                    {item.date}
                  </p>
                  <p className="flex">
                    <span>
                      <Image
                        width={23}
                        height={23}
                        alt=""
                        src={"/assets/Icons/lets-icons_comment-duotone.svg"}
                      />
                    </span>
                    {item.comments}
                  </p>
                </div>
                <h3 className="mt-3 text-start text-h6">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
