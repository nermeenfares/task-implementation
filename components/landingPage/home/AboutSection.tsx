import { about } from "@/constants";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-[#171D2E] text-white py-20 px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#339DFF] to-transparent rounded-full blur-[180px] opacity-40"></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#339DFF] blur-sm opacity-50 animate-pulse`}
            style={{
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 flex flex-col items-start">
            <h2 className="text-[66px] font-semibold">Almal GTM</h2>

            <p
              style={{ lineHeight: "198%" }}
              className="text-[#9A9A9A] leading-relaxed font-normal text-[23px]"
            >
              Has various experiences and every year finally mexsa finds its
              breaking point to focus on visualization and maintain its
              consistency to become the number one company in the world
            </p>

            <div className="grid grid-cols-3 ms-0 pt-8">
              {about.map((stat, index) => (
                <div
                  key={index}
                  className="space-y-2 flex flex-col items-start"
                >
                  <div className="text-[32px] font-medium text-white">
                    {stat.number}
                  </div>
                  <div className="text-[16px] font-normal text-[#9A9A9A] leading-tight text-start">
                    {(() => {
                      const words = stat.label.split(" ");
                      if (words.length === 2) {
                        return (
                          <>
                            <div>{words[0]}</div>
                            <div>{words[1]}</div>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <div>{words.slice(0, 2).join(" ")}</div>
                            <div>{words.slice(2).join(" ")}</div>
                          </>
                        );
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative pt-6 px-6 pb-4 rounded-xl overflow-hidden bg-gradient-to-bl from-[#171D2E] to-[#2A2F41] border border-white/10 backdrop-blur-sm">
              <div
                className="absolute inset-0 rounded-xl border border-white pointer-events-none"
                style={{
                  opacity: 0.08,
                  maskImage: "linear-gradient(to top left, white, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to top left, white, transparent)",
                }}
              ></div>

              <div className="text-3xl font-bold mb-2 text-white">
                120+ Billion
              </div>
              <div className="text-slate-400 text-sm leading-relaxed">
                Many of them have tried new world fantasy
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-fit">
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="absolute opacity-15 w-[520px] h-[520px] border-[0.5px] border-white rounded-full"></div>
                <div className="absolute opacity-15 w-[580px] h-[580px] border-[0.5px] border-white rounded-full"></div>
                <div className="absolute opacity-15 w-[640px] h-[640px] border-[0.5px] border-white rounded-full"></div>
              </div>

              <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] pt-14 px-10 pb-10 bg-white rounded-full flex items-center justify-center relative z-10 shadow-lg">
                <Image
                  width="260"
                  height="260"
                  src={"/assets/icons/about.svg"}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
