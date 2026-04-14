"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Enter({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const interTL = gsap.timeline();
    interTL
      .from(".hero-section h1", {
        y: "40px",
        opacity: 0,
      })
      .from(".hero-section p", {
        y: "40px",
        opacity: 0,
      })
      .from(".hero-section button", {
        y: "40px",
        opacity: 0,
      });
  });
  return <>{children}</>;
}
