import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegComments, FaRegUser } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight, MdOutlineDateRange } from "react-icons/md";
import SidbarBlog from "@/Components/SidbarBlog";
import { blogPostDetails } from "@/data/data";


export default function Page() {
  const { banner, post, pagination } = blogPostDetails;
  return (
    <main className="bg-primary/10 pb-top">
      {/* Banner Section */}
      <section className="relative grid h-72 w-full place-content-center">
        <Image
          className="pointer-events-none absolute inset-0 left-0 top-0 -z-40 h-full w-full"
          width={1000}
          height={600}
          src={banner.backgroundImage}
          alt="top_image_benner"
        />
        <div className="px-spacing text-center text-white">
          <h1 className="text-4xl lg:text-h5">{banner.title}</h1>
          <div className="mt-5">
            <Link href={"/"}>{banner.breadcrumb.company}</Link> / Blog / {banner.breadcrumb.category} / {banner.title}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative mt-60 grid grid-cols-1 gap-10 bg-blue-100/50 px-mobile md:mt-top md:grid-cols-3 md:px-spacing">
        <article className="mx-auto max-w-4xl space-y-6 rounded-xl p-6 md:col-span-2">
          {/* Main Image */}
          <div className="mb-8 md:h-80">
            <Image
              width={500}
              height={350}
              src={post.mainImage}
              alt="Blog post main image"
              className="h-full w-full rounded-lg aspect-video"
            />
          </div>

          {/* Post Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-7">
            <p className="flex items-center gap-3 text-[16px]">
              <span className="text-primary"><FaRegUser size={16} /></span>
              <span className="opacity-85">{post.author}</span>
            </p>
            <p className="flex items-center gap-3 text-[16px]">
              <span className="text-primary"><FaRegComments size={16} /></span>
              <span className="opacity-85">Comments ({post.Comments})</span>
            </p>
            <p className="flex items-center gap-3 text-[16px]">
              <span className="text-primary"><MdOutlineDateRange size={16} /></span>
              <span className="opacity-85">{post.date}</span>
            </p>
          </div>

          {/* Post Content */}
          <div className="space-y-6 text-gray-600">
            {post.content.introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Feature Section */}
            <div className="my-10 grid gap-8 md:grid-cols-2">
              <div>
                <Image
                  width={340}
                  height={340}
                  src={post.content.featureImage}
                  alt="Abstract shapes"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4">
                {post.content.listItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="my-8 rounded-lg border-s-4 border-primary bg-white p-6">
              <p className="mb-4 italic text-gray-700">{post.content.quote.text}</p>
              <cite className="text-gray-600">— {post.content.quote.author}</cite>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              Exploring the Future with Quantum Computing
            </h3>

            {post.content.conclusion.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Tags */}
            <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-6">
              <span className="text-gray-700">Tags:</span>
              <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="rounded-full bg-white px-3 py-1 text-sm text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr />

          {/* Comment Form */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Leave A Comment</h2>
            <p className="mt-3 opacity-85">All fields marked with an asterisk (*) are required</p>
            <form action="" className="mt-7 space-y-8">
              <div className="flex items-center gap-4">
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder="Name*"
                  type="text"
                  required
                  maxLength={15}
                />
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder="Email Address*"
                  type="email"
                  required
                  maxLength={15}
                />
              </div>
              <input
                className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                placeholder="Website"
                type="url"
                maxLength={15}
              />
              <label className="flex items-center gap-2">
                <input className="size-4" type="checkbox" />
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
              </label>
              <textarea
                rows={10}
                className="w-full rounded-lg bg-white p-5 focus:outline-none"
                placeholder="Message*"
                required
              />
              <input
                className="cursor-pointer rounded-full bg-primary px-6 py-3 text-white transition-all hover:scale-105"
                type="submit"
                value={"POST COMMENT"}
              />
            </form>
          </div>
        </article>

        {/* Sidebar */}
        <SidbarBlog />
      </section>

      {/* Pagination */}
      <section className="mt-top grid place-content-center">
        <div className="flex items-center gap-4">
          {Array.from({ length: pagination.totalPages }).map((_, index) => (
            <button
              key={index}
              className={`size-12 rounded-xl ${
                index + 1 === pagination.currentPage ? 'bg-primary text-white' : 'bg-white'
              } text-xl`}
            >
              {index + 1}
            </button>
          ))}
          <button className="grid size-12 place-content-center rounded-xl bg-white text-xl">
            <MdKeyboardDoubleArrowRight size={30} />
          </button>
        </div>
      </section>
    </main>
  );
}
