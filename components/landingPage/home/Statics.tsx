import { statics } from "@/constants";
import React from "react";

function Statics() {
  return (
    <section
      className="w-full -mt-40 bg-[#171D2E] text-white flex items-end justify-center px-4 sm:px-8 pt-[80px] sm:pt-[100px] pb-[40px] sm:pb-[50px] relative z-0"
      style={{
        minHeight: "370px",
      }}
    >
      <div className="grid grid-cols-2 pt-28 sm:grid-cols-3  gap-12 max-w-6xl w-full text-center">
        {statics.map((data, index) => {
          let translateClass = "";
          if (index === 0) translateClass = "sm:-translate-y-8";
          if (index === 1) translateClass = "sm:translate-y-8";
          if (index === 2) translateClass = "sm:-translate-y-8";

          return (
            <div
              key={data.number}
              className={`transition-transform duration-300 ${translateClass}`}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                {data.number}
              </p>
              <p className="text-gray-400 text-base sm:text-lg">{data.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Statics;
