import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ButtonMain({
  name,
  className,
  href="#"
}: {
  name: string;
  className?: string;
  href?: string;
}) {
  return (
    <Link href={href}
      className={cn("text-nowraps items-center gap-3 rounded-[51px] bg-primary_gradinet px-6 py-4 text-paragraph_b flex ",className)}
    >
      {name}
      <FaArrowRight />
    </Link>
  );
}
