import Top_Banner from "@/Components/Top_Banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import { servicesDataDetals } from "@/data/data";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function page() {
  const { banner, mainImage, content, serviceProcess, outcomes } =
    servicesDataDetals;
  return (
    <article className="bg-primary/10 pb-10">
      <Top_Banner {...banner} />
      <section className="mt-60 px-mobile md:mt-top md:px-spacing [&_p]:!text-lg">
        <div className="aspect-video w-full overflow-hidden rounded-2xl md:h-[634px]">
          <Image
            className="h-full w-full object-cover"
            width={mainImage.width}
            height={mainImage.height}
            alt=""
            src={mainImage.src}
          />
        </div>

        <div className="mt-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-h6 md:text-h5">{content.title}</h2>
            {content.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <hr />

          <div>
            <h2 className="text-h5">{serviceProcess.title}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Accordion
                  className="h-full space-y-6"
                  type="single"
                  collapsible
                >
                  {serviceProcess.steps.map((step) => (
                    <AccordionItem key={step.id} value={step.id}>
                      <AccordionTrigger className="text-2xl font-bold hover:text-primary hover:no-underline">
                        {step.title}
                      </AccordionTrigger>
                      <AccordionContent className="bg-primary/10 p-3 py-7 text-xl font-semibold opacity-90">
                        {step.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="grid place-content-center">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src={serviceProcess.image}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-h5">{outcomes.title}</h2>
            <p>{outcomes.description}</p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {outcomes.items.map((item, index) => (
                <p key={index} className="!text-xl">
                  <IoMdArrowDropright
                    size={20}
                    className="inline text-primary"
                  />{" "}
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>


        </div>
      </section>
    </article>
  );
}
