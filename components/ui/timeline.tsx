"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 relative"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        
        {/* Central Vertical Line (Desktop: Center, Mobile: Left) */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 md:left-1/2 md:-ml-[1px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#00AEEF] via-[#00AEEF] to-transparent from-[0%] via-[10%] rounded-full z-10"
          />
        </div>

        {data.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex justify-start md:justify-center pt-10 md:pt-40 w-full"
            >
              {/* Dot on the central line */}
              <div className="absolute left-8 md:left-1/2 md:-ml-[20px] top-10 md:top-40 h-10 w-10 rounded-full bg-[#FAFBFC] flex items-center justify-center border border-slate-200 z-20 shadow-sm mt-4 md:mt-2">
                <div className="h-4 w-4 rounded-full bg-slate-200 border border-slate-300 p-2" />
              </div>

              {/* Desktop Layout (Alternating Left/Right) */}
              <div className="hidden md:flex w-full">
                {isEven ? (
                  <>
                    <div className="w-1/2 pr-12 lg:pr-20 flex flex-col items-end text-right z-30">
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-slate-300 transition-all duration-300 hover:text-[#00AEEF]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-full text-left">
                        {item.content}
                      </div>
                    </div>
                    <div className="w-1/2 pl-12 lg:pl-20" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-12 lg:pr-20 flex justify-end items-center" />
                    <div className="w-1/2 pl-12 lg:pl-20 flex flex-col items-start z-30">
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-slate-300 transition-all duration-300 hover:text-[#00AEEF]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-full">
                        {item.content}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Layout (Everything on Right) */}
              <div className="flex md:hidden w-full pl-24 pr-4 flex-col items-start z-30">
                <h3 className="text-2xl font-bold text-slate-300 mb-4">
                  {item.title}
                </h3>
                <div className="w-full">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
