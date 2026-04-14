"use client";
import React, { createContext, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const videoPreview = createContext({});
export default function VideoModule({ children }: { children: ReactNode }) {
  const [data, setData] = useState({ open: false, video: "", iframe: true });
  return (
    <videoPreview.Provider value={{ data, setData }}>
      {children}

      <AnimatePresence>
        {data.open && (
          <motion.div
            variants={{
              initial: { x: "-100%", opacity: 0 },
              open: { x: "0%", opacity: 1 },
            }}
            initial={"initial"}
            animate="open"
            exit={"initial"}
            transition={{ duration: 0.4, type: "tween" }}
            className="bg-black/50 fixed inset-0 top-0 z-[999] flex flex-col items-center justify-center px-mobile"
          >
            <div className="relative aspect-video h-[500] w-full bg-primary rounded-xl overflow-hidden md:w-[800px]">
              {data.iframe ? (
                <iframe allowFullScreen className="w-full h-full" src={data.video} />
              ) : (
                <video className="w-full h-full" controls autoPlay muted src={data.video}></video>
              )}
            </div>
            <button
              onClick={() => {
                setData((pri) => ({ ...pri, open: false }));
              }}
              className="mt-5 size-14 rounded-full bg-primary_gradinet text-xl font-bold text-white"
            >
              X
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </videoPreview.Provider>
  );
}
