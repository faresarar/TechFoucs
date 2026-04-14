import Top_Banner from "@/Components/Top_Banner";
import { teamDetails } from "@/data/data";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function page() {
  return (
    <main className="bg-primary/10 pb-10">
      <Top_Banner
        title={teamDetails.banner.title}
        highlightName={teamDetails.banner.highlightName}
        subTitle={teamDetails.banner.subTitle}
      />
      <div className="md:px-spacing_2">
        <div className="mt-top flex flex-col items-center gap-7 rounded-xl bg-white p-3 md:flex-row md:items-start">
          <div>
            <Image
              width={300}
              height={300}
              alt=""
              src={teamDetails.personalInfo.image}
            />
          </div>
          <div className="space-y-5 opacity-75">
            <div className="space-y-5">
              <h2 className="text-h5">{teamDetails.personalInfo.name}</h2>
              {Object.entries(teamDetails.personalInfo.details).map(
                ([key, value]) => (
                  <p key={key} className="text-paragraph text-xl">
                    <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                    {value}
                  </p>
                ),
              )}
            </div>
            <hr />
            <div className="flex max-w-xl flex-wrap justify-between gap-4">
              {teamDetails.personalInfo.skills.map((skill, index) => (
                <p key={index} className="text-paragraph text-xl">
                  <strong>{skill.name}: </strong>
                  {skill.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        <article className="mt-8 space-y-4 px-mobile opacity-75 [&_p]:text-paragraph">
          <h4 className="text-h5">{teamDetails.professionalSkills.title}</h4>
          <p>{teamDetails.professionalSkills.description}</p>
          <hr />
          <h4 className="text-h5">{teamDetails.educationalExperience.title}</h4>
          {teamDetails.educationalExperience.degrees.map((degree, index) => (
            <p key={index}>
              {degree.level} in {degree.field} from {degree.university}
            </p>
          ))}
          <div className="mt-3 space-y-3">
            {teamDetails.educationalExperience.highlights.map(
              (highlight, index) => (
                <p key={index} className="text-paragraph_b">
                  <IoMdArrowDropright
                    size={20}
                    className="inline text-primary"
                  />
                  <span>{highlight}</span>
                </p>
              ),
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
