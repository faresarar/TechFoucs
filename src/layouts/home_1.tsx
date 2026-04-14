import React from "react";
import ButtonMain from "../Components/MianButton";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import Featured_Services from "../Components/Global/Featured_Services";
import Recent_bast_work_2 from "../Components/Recent_bast_work_2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../Components/UI/carousel";
import TeamCard_2 from "../Components/Cards/TeamCard_2";
import Link from "next/link";
import { parseAndStyleText } from "@/utils/parseAndStyleText";
import { home } from "@/data/data";
import Brandes_2 from "../Components/brandes_2";

export default function Home_1() {
  return (
    <main>
      {/* Hero */}
      <section className="mt-60 grid grid-cols-1 px-mobile md:mt-top md:grid-cols-3 md:px-spacing">
        <div className="col-span-2 space-y-3">
          <h1 className="text-h5 leading-tight md:text-h1">
            {parseAndStyleText(home.hero.title, "text-secandry_primary")}
          </h1>

          <p className="text-paragraph_b opacity-70">{home.hero.description}</p>

          <div className="relative space-y-2">
            <svg
              width="216"
              height="55"
              viewBox="0 0 216 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="11" r="8" stroke="#185BFF" />
              <circle cx="8.50002" cy="11" r="4.57692" fill="#185BFF" />
              <text className="text-paragraph_b" x="25" y="15" fill="black">
                {home.hero.step}
              </text>
              <circle cx="8.5" cy="44" r="8" stroke="#185BFF" />
              <circle cx="8.50002" cy="44" r="4.57692" fill="#185BFF" />
              <text className="text-paragraph_b" x="25" y="46" fill="black">
                {home.hero.step_2}
              </text>
              <line
                x1="8"
                y1="11"
                x2="8"
                y2="44"
                stroke="#185BFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <ButtonMain
              href={home?.hero?.cta?.link || "/"}
              name={home.hero.cta.name}
              className="w-fit text-white"
            />
            <ButtonMain
              href={home?.hero?.cta_2?.link || "/"}
              name={home.hero.cta_2.name}
              className="w-fit border border-secandry_primary !bg-none text-secandry_primary"
            />
          </div>
        </div>
        <Image
          className="hidden animate-up_down md:block"
          width={799}
          height={799}
          alt="hero Image"
          src={home.hero.image}
        />
      </section>

      <section className="relative mt-60 md:mt-top">
        <Image
          className="absolute top-10 -z-40"
          width={200}
          height={200}
          alt=""
          src={"/assets/images/elemants/elemants (32).png"}
        />

        <Brandes_2 />

        <Image
          className="absolute top-0 z-50"
          width={200}
          height={200}
          alt=""
          src={"/assets/images/elemants/elemants (31).png"}
        />

        <div className="mt-60 grid gap-3 md:grid-cols-3 lg:px-spacing">
          <div className="grid grid-cols-1 gap-3 md:col-span-2 md:grid-cols-2">
            {home.section_1.cards.map((item, index) => (
              <div
                key={index + item.value + item.name}
                className="h-[200px] w-full rounded-2xl bg-white p-3 shadow-2xl"
              >
                <h2 className="text-h1">{item.value}</h2>
                <p className="text-paragraph">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="hidden h-full md:block">
            <Image
              className="w-full object-fill shadow-xl"
              width={300}
              height={500}
              alt=""
              src={home.section_1.image}
            />
          </div>
        </div>
      </section>

      <section className="relative mt-60 flex flex-col items-center justify-between gap-10 px-mobile md:mt-top lg:flex-row lg:px-spacing">
        <div className="flex max-w-xl flex-col justify-between gap-5 overflow-hidden px-0">
          <div>
            <p>
              {parseAndStyleText(
                home.section_2.subTitle,
                "font-bold text-secandry_primary",
              )}
            </p>
            <h4 className="w-fit text-h6 text-black md:text-h4">
              {parseAndStyleText(
                home.section_2.title,
                "font-bold text-secandry_primary",
              )}
            </h4>
          </div>
          <p>{home.section_2.description}</p>
          <ul className="w-fit space-y-2">
            {home.section_2.infoList.map((text, index) => (
              <li className="flex items-center gap-1" key={text + index}>
                <span className="text-primary">
                  <IoMdArrowDropright size={24} />
                </span>{" "}
                <p className="text-paragraph_b">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden w-fit rounded-xl bg-cover md:h-[300px] md:w-[600px] 2xl:block">
          <Image
            alt=""
            width={300}
            height={300}
            src={home.section_2.mainImage}
          />
        </div>
        <ul className="flex min-h-full flex-col justify-between gap-8">
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
        <ButtonMain
          className="absolute -bottom-20 left-1/2 right-1/2 mx-auto w-full -translate-x-1/2 justify-center text-nowrap text-white md:w-72"
          href={home?.section_2?.cta?.link || "/"}
          name={home.section_2.cta.name}
        />
      </section>

      <section className="relative mt-top h-fit">
        <div className="bg-primary px-mobile pb-2 md:px-spacing">
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}
            className="top-0 hidden h-12 w-full bg-white md:block"
          ></div>
          <Featured_Services className="text-white md:mt-10 lg:px-spacing 2xl:px-spacing_2" />
        </div>
        <div className="w-full -translate-y-1">
          <Image
            className="h-full w-full"
            width={300}
            height={300}
            alt=""
            src={"/assets/images/elemants/elemants (34).svg"}
          />
        </div>
      </section>

      {/* Our Recent Best Works */}
      <Recent_bast_work_2 />

      <section className="relative overflow-hidden px-mobile py-4 text-center md:mt-top lg:px-spacing_2">
        <p>
          {parseAndStyleText(
            home.section_5.subTitle,
            "rounded-full bg-secandry_primary px-1 font-bold text-white",
          )}
        </p>
        <h3 className="text-h5 md:text-h4">{home.section_5.title}</h3>
        <svg
          className="absolute right-0 top-0 -z-50 w-full"
          width="1398"
          height="1024"
          viewBox="0 0 1398 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1517.5 -35C1517.5 -35 794.227 410.736 440 625C345.766 682 226.5 731.079 127.5 682C56.6462 646.874 7 625 7 519.25C7 413.5 104.5 354.5 247 354.5C389.5 354.5 1457.5 1063 1457.5 1063"
            stroke="#FF3400"
            strokeWidth="14"
          />
        </svg>
        <div className="mt-5 flex flex-wrap justify-center gap-10 md:mt-16">
          {/* card */}
          {home.section_5.card.map((item) => (
            <div
              key={item.client.name}
              style={{
                backgroundImage: `url(${item.imageBack})`,
              }}
              className="grid h-[380px] w-full place-content-center rounded-3xl bg-cover py-3"
            >
              <div className="w-[340px] space-y-3 rounded-2xl bg-white p-5 text-start">
                <div className="flex w-full items-center gap-2">
                  <span className="h-11 w-11 rounded-full bg-cover">
                    <Image
                      src={item.client.img}
                      width={200}
                      height={200}
                      alt="client"
                    />
                  </span>
                  <div>
                    <h3 className="text-xl">{item.client.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: item.client.rate }).map((_, i) => (
                        <svg
                          key={i + "rate"}
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.08989 2.69872L4.62797 0.707459C4.73783 0.560975 4.86838 0.453493 5.01963 0.385012C5.17087 0.316531 5.32871 0.282107 5.49314 0.281741C5.65756 0.281375 5.81558 0.315799 5.96719 0.385012C6.1188 0.454225 6.24917 0.561708 6.3583 0.707459L7.89638 2.69872L10.231 3.48149C10.469 3.55473 10.6567 3.68986 10.794 3.88688C10.9313 4.0839 11 4.30125 11 4.53892C11 4.64878 10.9839 4.75864 10.9517 4.86851C10.9194 4.97837 10.8669 5.08365 10.794 5.18436L9.2834 7.32668L9.33833 9.57887C9.34748 9.8993 9.2422 10.1694 9.02247 10.3891C8.80275 10.6088 8.5464 10.7187 8.25344 10.7187C8.23512 10.7187 8.13442 10.705 7.95131 10.6775L5.49314 9.99085L3.03496 10.6775C2.98918 10.6958 2.93883 10.7073 2.8839 10.7121C2.82897 10.7169 2.77861 10.7191 2.73284 10.7187C2.43987 10.7187 2.18353 10.6088 1.9638 10.3891C1.74408 10.1694 1.63879 9.8993 1.64795 9.57887L1.70288 7.31295L0.205999 5.18436C0.132757 5.08365 0.0800227 4.97837 0.0477963 4.86851C0.01557 4.75864 -0.000360037 4.64878 6.17208e-06 4.53892C6.17208e-06 4.31004 0.066473 4.09727 0.199407 3.90062C0.332341 3.70396 0.517642 3.56425 0.755312 3.48149L3.08989 2.69872Z"
                            fill="#FFBB00"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-paragraph">{item.description}</p>
              </div>
            </div>
          ))}
          {/* end card */}
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
                  <TeamCard_2 data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mt-10 grid w-full place-content-center">
          <ButtonMain
            href={home?.section_6?.cta?.link || "/"}
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
          {home.section_7.blogs.map((blog, i) => (
            <div
              key={i + "blogs latest"}
              className="relative w-full rounded-xl bg-white pb-3 shadow-xl"
            >
              <div className="max-h-[300px] w-full overflow-hidden rounded-t-lg md:min-h-[300px]">
                <Link href={"/"}>
                  <Image
                    className="h-full w-full object-cover transition-all hover:scale-125"
                    width={400}
                    height={400}
                    alt={blog.title}
                    src={blog.image}
                  />
                </Link>
              </div>

              <div className="mt-4 space-y-4 p-2">
                <div className="flex items-center gap-3">
                  <div className="absolute left-2 top-3 space-x-2">
                    {blog.category.map((category, i) => (
                      <span
                        key={category + i}
                        className="rounded-xl border border-black bg-white px-2 py-[1px] backdrop-blur-3xl"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <p className="flex opacity-75">
                    <span>
                      <Image
                        width={23}
                        height={23}
                        alt=""
                        src={"/assets/Icons/stash_data-date-duotone.svg"}
                      />
                    </span>
                    {blog.date}
                  </p>
                  <p className="flex opacity-75">
                    <span>
                      <Image
                        width={23}
                        height={23}
                        alt=""
                        src={"/assets/Icons/lets-icons_comment-duotone.svg"}
                      />
                    </span>
                    {blog.comments}
                  </p>
                </div>
                <h3 className="text-start text-h6 opacity-75">{blog.title}</h3>
                <div className="flex items-center gap-3">
                  <Link
                    className="transition-all hover:scale-125"
                    href={`/blog/${i}`}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14.5" cy="14.5" r="14.5" fill="#4078FF" />
                      <path
                        d="M17.6 12.09L11.1475 18.5425C11.0146 18.6754 10.8454 18.7419 10.64 18.7419C10.4346 18.7419 10.2654 18.6754 10.1325 18.5425C9.99956 18.4096 9.93311 18.2404 9.93311 18.035C9.93311 17.8296 9.99956 17.6604 10.1325 17.5275L16.585 11.075H11.075C10.8696 11.075 10.6975 11.0054 10.5588 10.8662C10.4201 10.727 10.3505 10.5549 10.35 10.35C10.3495 10.1451 10.4191 9.973 10.5588 9.8338C10.6985 9.6946 10.8705 9.625 11.075 9.625H18.325C18.5304 9.625 18.7027 9.6946 18.8419 9.8338C18.9811 9.973 19.0505 10.1451 19.05 10.35V17.6C19.05 17.8054 18.9804 17.9777 18.8412 18.1169C18.702 18.2561 18.5299 18.3255 18.325 18.325C18.12 18.3245 17.948 18.2549 17.8088 18.1162C17.6696 17.9775 17.6 17.8054 17.6 17.6V12.09Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <h4 className="text-xl uppercase">{home.section_7.cta}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
