"use client";
import React from 'react';
import ButtonMain from "@/Components/MianButton";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "@/data/data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/UI/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <nav className="relative z-50 flex w-full items-center justify-between gap-3 bg-white px-mobile py-3 shadow-sm md:flex-col md:px-spacing xl:flex-row xl:gap-0">
      <Link href={"/"}>
        <div className="h-16 w-fit overflow-hidden">
          <Image
            width={300}
            height={200}
            className="h-full w-full object-fill"
            src={Settings.logo}
            alt="logo"
            priority
          />
        </div>
      </Link>
      <ul className="hidden items-center justify-between gap-7 opacity-70 md:flex">
        <Link href={"/"} className="text-navItem">
          Home
        </Link>
        <Link href={"/portfolio"} className="text-navItem">
          Porfolio
        </Link>
        <Link href={"/services"} className="text-navItem">
          Services
        </Link>
        <Link href={"/blog"} className="text-navItem">
          Blogs
        </Link>
        <Link href={"/team_member"} className="text-navItem">
          Team
        </Link>
        <Link href={"/contact"} className="text-navItem">
          Contact
        </Link>
      </ul>
      <ButtonMain className="hidden !text-white xl:flex" name="Get Started" />

      {/* mobile nav */}
      <MobileNav />
    </nav>
  );
}

// // mobile NavBar
const MobileNav = () => {
  return (
    <div className="blocks md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{Settings.title}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col mt-14">
            <ul className="w-full">
              <li className="border-b">
                <Link href={"/portfolio"} className="text-navItem">
                  Porfolio
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/services"} className="text-navItem">
                  Services
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/blog"} className="text-navItem">
                  Blogs
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/team_member"} className="text-navItem">
                  Team
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/"} className="text-navItem">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
