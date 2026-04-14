import Top_Banner from "@/Components/Top_Banner";
import { contactPageData } from "@/data/data";

import React from "react";

export default function page() {
  return (
    <main>
      <Top_Banner
        title={contactPageData.banner.title}
        subTitle={contactPageData.banner.subTitle}
        highlightName={contactPageData.banner.highlightName}
      />
      <div className="mx-auto bg-blue-50 px-mobile py-12 md:px-spacing 2xl:px-spacing_2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactPageData.contactInfo.map((info, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex items-center justify-center">
                <span className="rounded-full bg-blue-100 p-3">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </span>
              </div>
              <h3 className="mb-2 mt-3 text-xl font-semibold">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-lg font-medium text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold opacity-75">
              {contactPageData.form.heading}
            </h2>
            <p className="mb-8 text-gray-600">
              {contactPageData.form.description}
            </p>

            <form className="space-y-6">
              <div className="flex items-center gap-4">
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder={contactPageData.form.placeholders.name}
                  type="text"
                  required
                  maxLength={15}
                />
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder={contactPageData.form.placeholders.email}
                  type="email"
                  required
                  maxLength={15}
                />
              </div>
              <input
                className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                placeholder={contactPageData.form.placeholders.phone}
                type="tel"
                required
                maxLength={15}
              />
              <textarea
                rows={5}
                className="w-full rounded-lg bg-white p-5 focus:outline-none"
                placeholder={contactPageData.form.placeholders.message}
                required
              />

              <button
                type="submit"
                className={contactPageData.form.button.className}
              >
                {contactPageData.form.button.text}
              </button>
            </form>
          </div>

          <div className="h-[400px] w-full rounded-lg bg-gray-100">
            <iframe
              className={contactPageData.map.className}
              frameBorder="0"
              scrolling="no"
              src={contactPageData.map.src}
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
