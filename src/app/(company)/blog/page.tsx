"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/UI/carousel";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import SidbarBlog from "@/Components/SidbarBlog";
import { videoPreview } from "@/Components/videoModule";

export default function page() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setData }: any = useContext(videoPreview);
  return (
    <main className="bg-primary/10 pb-top">
      <section className="relative grid h-72 w-full place-content-center">
        <Image
          className="pointer-events-none absolute inset-0 left-0 top-0 -z-40 h-full w-full"
          width={1000}
          height={600}
          src={"/assets/images/backgrounds/Rectangle 14.png"}
          alt="top_image_benner"
        />
        <div className="px-spacing text-center text-white">
          <h1 className="text-4xl lg:text-h3">Blogs</h1>
          <div className="mt-5">
            <Link href={"/"}>Techco</Link> / Blog
          </div>
        </div>
      </section>
      <section className="relative mt-60 grid grid-cols-1 gap-10 px-mobile md:mt-top md:grid-cols-3 md:px-spacing">
        <div className="space-y-6 rounded-xl md:col-span-2">
          {/* blog Card Image*/}
          <div className="w-full rounded-xl bg-white p-8">
            <div className="h-60 w-full overflow-hidden rounded-xl transition-all hover:scale-105 md:h-96">
              <Image
                className="h-full w-full object-cover"
                width={400}
                height={250}
                alt="blog image"
                src={"/assets/images/img/Rectangle_36.png"}
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-7">
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegUser size={16} />
                </span>{" "}
                <span className="opacity-85">admin</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegComments size={16} />
                </span>{" "}
                <span className="opacity-85">Comments (0)</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <MdOutlineDateRange size={16} />
                </span>{" "}
                <span className="opacity-85">June 8, 2024</span>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-h5 font-medium">
                Leading the Digital Age with Groundbreaking IT Technologies
              </h2>
              <p className="line-clamp-4 text-[17px] opacity-90">
                Gain exclusive insights into the world of IT solutions with
                Techco’s distinguished thought leaders. With years of experience
                and a deep understanding of industry trends, our thought leaders
                offer invaluable perspectives that illuminate the path to
                technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform
              </p>
            </div>
            <div className="mt-10">
              <Link
                className="flex w-fit items-center gap-3 rounded-full bg-primary_gradinet px-8 py-3 text-xl font-bold uppercase text-white shadow-xl [&_svg]:hover:-translate-y-1 [&_svg]:hover:translate-x-1"
                href={
                  "/blog/Leading_the_Digital_Age_with_Groundbreaking_IT_Technologies"
                }
              >
                <span>read more</span>
                <FaLocationArrow className="transition-all" />
              </Link>
            </div>
          </div>
          {/* end blog Card */}
          {/* blog Card slide Image*/}
          <div className="w-full rounded-xl bg-white p-8">
            <div className="h-60 w-full overflow-hidden rounded-xl transition-all md:h-96 [&_.button-carousel]:hover:flex">
              <Carousel
                opts={{
                  skipSnaps: true,
                }}
              >
                <CarouselContent className="relative h-60 md:h-96">
                  <CarouselItem className="h-full transition-all hover:scale-105">
                    <Image
                      className="h-full w-full object-cover"
                      width={400}
                      height={250}
                      alt="blog image"
                      src={"/assets/images/img/Rectangle_36.png"}
                    />
                  </CarouselItem>
                  <CarouselItem className="h-full transition-all hover:scale-105">
                    <Image
                      className="h-full w-full object-cover"
                      width={400}
                      height={250}
                      alt="blog image"
                      src={"/assets/images/img/Rectangle_36.png"}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext className="button-carousel absolute right-6 hidden size-14 border-none bg-primary_gradinet text-white !opacity-95" />
                <CarouselPrevious className="button-carousel absolute left-6 hidden size-14 border-none bg-primary_gradinet text-white !opacity-95" />
              </Carousel>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-7">
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegUser size={16} />
                </span>{" "}
                <span className="opacity-85">admin</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegComments size={16} />
                </span>{" "}
                <span className="opacity-85">Comments (0)</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <MdOutlineDateRange size={16} />
                </span>{" "}
                <span className="opacity-85">June 8, 2024</span>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-h5 font-medium">
                Leading the Digital Age with Groundbreaking IT Technologies
              </h2>
              <p className="line-clamp-4 text-[17px] opacity-90">
                Gain exclusive insights into the world of IT solutions with
                Techco’s distinguished thought leaders. With years of experience
                and a deep understanding of industry trends, our thought leaders
                offer invaluable perspectives that illuminate the path to
                technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform
              </p>
            </div>
            <div className="mt-10">
              <Link
                className="flex w-fit items-center gap-3 rounded-full bg-primary_gradinet px-8 py-3 text-xl font-bold uppercase text-white shadow-xl [&_svg]:hover:-translate-y-1 [&_svg]:hover:translate-x-1"
                href={
                  "/blog/Leading_the_Digital_Age_with_Groundbreaking_IT_Technologies"
                }
              >
                <span>read more</span>
                <FaLocationArrow className="transition-all" />
              </Link>
            </div>
          </div>
          {/* end blog Card */}
          {/* blog Card video*/}
          <div className="w-full rounded-xl bg-white p-8">
            <div className="relative h-60 w-full overflow-hidden rounded-xl md:h-96">
              <Image
                className="-z-50 h-full w-full object-cover transition-all hover:scale-105"
                width={400}
                height={250}
                alt="blog_image"
                src={"/assets/images/img/Rectangle_36.png"}
              />
              <div className="absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-[200] size-32 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary"></div>
              <button
                onClick={() =>
                  setData(
                    (pri: {
                      open: boolean;
                      video: string;
                      iframe: boolean;
                    }) => ({
                      ...pri,
                      open: true,
                      video: "https://www.youtube.com/embed/pAeEAfPglWI",
                      iframe: true,
                    }),
                  )
                }
                className="absolute bottom-1/2 left-1/2 right-1/2 top-1/2 z-[200] grid size-28 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-primary"
              >
                <SiGoogledisplayandvideo360 size={45} className="text-white" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-7">
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegUser size={16} />
                </span>{" "}
                <span className="opacity-85">admin</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegComments size={16} />
                </span>{" "}
                <span className="opacity-85">Comments (0)</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <MdOutlineDateRange size={16} />
                </span>{" "}
                <span className="opacity-85">June 8, 2024</span>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-h5 font-medium">
                Leading the Digital Age with Groundbreaking IT Technologies
              </h2>
              <p className="line-clamp-4 text-[17px] opacity-90">
                Gain exclusive insights into the world of IT solutions with
                Techco’s distinguished thought leaders. With years of experience
                and a deep understanding of industry trends, our thought leaders
                offer invaluable perspectives that illuminate the path to
                technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform
              </p>
            </div>
            <div className="mt-10">
              <Link
                className="flex w-fit items-center gap-3 rounded-full bg-primary_gradinet px-8 py-3 text-xl font-bold uppercase text-white shadow-xl [&_svg]:hover:-translate-y-1 [&_svg]:hover:translate-x-1"
                href={
                  "/blog/Leading_the_Digital_Age_with_Groundbreaking_IT_Technologies"
                }
              >
                <span>read more</span>
                <FaLocationArrow className="transition-all" />
              </Link>
            </div>
          </div>
          {/* end blog Card */}
        </div>
        {/* sidbar */}
        <SidbarBlog />
      </section>
      {/* pagination */}
      <section className="mt-top grid place-content-center">
        <div className="flex items-center gap-4">
          <button className="size-12 rounded-xl bg-white text-xl">1</button>
          <button className="size-12 rounded-xl bg-primary text-xl text-white">
            2
          </button>
          <button className="size-12 rounded-xl bg-white text-xl">3</button>
          <button className="grid size-12 place-content-center rounded-xl bg-white text-xl">
            <MdKeyboardDoubleArrowRight size={30} />
          </button>
        </div>
      </section>
    </main>
  );
}
