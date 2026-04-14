import Home_1 from "@/layouts/home_1";
import Home_2 from "@/layouts/Home_2";
import React from "react";
import { Settings } from "@/data/data";

export default function page() {
  return <>{Settings.homePage == 1 ? <Home_1 /> : <Home_2 />}</>;
}
