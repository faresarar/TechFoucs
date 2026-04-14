import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SidbarBlog() {
  return (
    <aside className="sticky top-0 space-y-10">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Search</h2>
        <div className="relative">
          <input
            type="search"
            className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
            placeholder="Search ..."
          />
          <button className="absolute bottom-1/2 right-2 top-1/2 grid size-10 -translate-y-1/2 place-content-center rounded-lg bg-primary_gradinet text-white">
            <CiSearch size={30} />
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Recent Post</h2>
        <div className="mt-4 flex flex-col gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i + "sidbar_cards_blog"}
              className="flex gap-3 overflow-hidden rounded-lg bg-white p-2"
            >
              <div className="size-24 min-w-24 rounded-lg bg-red-500">
                <Image
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                  alt=""
                  src={"/assets/images/img/Rectangle_37.png"}
                />
              </div>
              <div>
                <p className="opacity-75">June 8, 2024</p>
                <h2 className="line-clamp-2 text-xl font-semibold opacity-90">
                  Unlocking New Possibilities with Advanced Cloud ...
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Categories</h2>
        <ul className="space-y-5 divide-y divide-black/20">
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              Business
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              Cloud Solution
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              Cybersecurity
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              It Solution
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              Mobile App
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              Tech Trends
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              TechSolutions
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
          <li className="flex items-center justify-between py-2">
            <Link
              href={"/"}
              className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
            >
              UX Design
            </Link>
            <p className="text-[16px]">(3)</p>
          </li>
        </ul>
      </div>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Tags</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-primary/5 p-5">
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            App Dev
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            Consultants
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            Cybersecurity
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            Data
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            It
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            Optimization
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            Solution
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            Startup
          </span>
          <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
            TechSolutions
          </span>
        </div>
      </div>
    </aside>
  );
}
