import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import React from "react";
import CardPortfolio from "./_components/CardPortfolio";
import { portfolio } from "@/data/data";

export default function Page() {
  return (
    <div className="bg-primary/10 pb-16">
      <Top_Banner
        title={portfolio.banner.title}
        highlightName={portfolio.banner.highlightName}
        subTitle={portfolio.banner.title}
      />
      <section className="mt-16 flex flex-col items-center justify-center px-mobile md:mt-top lg:px-spacing_2">
        <div className="flex w-fit flex-wrap gap-4 rounded-xl bg-white p-3">
          {portfolio.categorys.map((cate) => (
            <Button variant={cate.active?"default":"outline"} key={cate.name} className="flex-grow cursor-pointer hover:bg-primary/5" size={"lg"}>
              {cate.name}
            </Button>
          ))}
        </div>
        <div className="mt-60 grid grid-cols-1 md:gap-10 md:grid-cols-2">
          {portfolio.portfolios.map((pro, i) => (
            <CardPortfolio {...pro} key={i + "portfolio"} />
          ))}
        </div>
      </section>
    </div>
  );
}
