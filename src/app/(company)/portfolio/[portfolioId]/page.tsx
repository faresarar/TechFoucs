import Top_Banner from "@/Components/Top_Banner";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import CardPortfolio from "../_components/CardPortfolio";
import { portfolioData } from "@/data/data";

export default function page() {
  const { banner, mainImage, mainContent } = portfolioData;
  return (
    <article className="bg-primary/10 pb-10">
      <Top_Banner
        title={banner.title}
        highlightName={banner.highlightName}
        subTitle={banner.subTitle}
      />
      <section className="mt-60 px-mobile md:mt-top md:px-spacing [&_p]:!text-lg">
        <div className="aspect-video w-full overflow-hidden rounded-2xl md:h-[634px]">
          <Image
            className="h-full w-full object-cover"
            width={mainImage.width}
            height={mainImage.height}
            alt={mainImage.alt}
            src={mainImage.src}
          />
        </div>

        <div className="mt-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-h6 md:text-h5">
              {mainContent.networkInfrastructure.title}
            </h2>
            {mainContent.networkInfrastructure.description.map(
              (text, index) => (
                <p key={index}>{text}</p>
              ),
            )}
          </div>

          <hr />

          <div className="flex flex-wrap items-center justify-between opacity-65 md:flex-nowrap">
            <p>
              <strong>Services:</strong> {mainContent.projectDetails.services}
            </p>
            <p>
              <strong>Client:</strong> {mainContent.projectDetails.client}
            </p>
            <p>
              <strong>Location:</strong> {mainContent.projectDetails.location}
            </p>
            <p>
              <strong>Completed Date:</strong>{" "}
              {mainContent.projectDetails.completedDate}
            </p>
          </div>

          <div>
            <h2 className="text-h5">{mainContent.projectRequirement.title}</h2>
            <p>{mainContent.projectRequirement.description}</p>
            <div className="mt-6 flex flex-wrap gap-10">
              {mainContent.projectRequirement.requirements.map(
                (requirement, index) => (
                  <p key={index} className="text-paragraph_b">
                    <IoMdArrowDropright
                      size={20}
                      className="inline text-primary"
                    />{" "}
                    <span>{requirement}</span>
                  </p>
                ),
              )}
            </div>
          </div>

          {mainContent.solutions.map((solution, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-h5">{solution.title}</h2>
              {solution.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          ))}

          <div className="space-y-2">
            <h2 className="text-h5">{mainContent.similarProjects.title}</h2>
            <div className="grid grid-cols-1 gap-3 !opacity-100 md:grid-cols-2">
              {mainContent.similarProjects.projects.map((pro, index) => (
                <CardPortfolio {...pro} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
