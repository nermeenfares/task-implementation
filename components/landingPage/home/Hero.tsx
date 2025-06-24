import Image from "next/image";
import React from "react";
import TextInput from "../../FormFields/TextInput";

function Hero() {
  return (
    <section
      style={{
        borderBottomLeftRadius: "50% 150px",
        borderBottomRightRadius: "50% 150px",
      }}
      className="pt-28 bg-white flex flex-col items-center justify-center w-full pb-16 text-center relative z-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[349px] h-[60%] bg-[#c7deec] blur-3xl"></div>
      <div
        className="absolute bg-[#b5cddf] rounded-4xl -rotate-[40deg] blur-3xl"
        style={{
          width: "100vw",
          maxWidth: "1000px",
          height: "200px",
          top: "160px",
          left: "50%",
          transform: "translateX(-50%) rotate(-60deg)",
        }}
      ></div>

      <div className="z-10 flex flex-col items-center gap-16 px-4">
        <p className="text-[#373737] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[86px] font-bold leading-tight">
          ELEVATING EVENTS TO
        </p>
        <p className="text-[#52758b] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-semibold tracking-[0.165em] drop-shadow-lg">
          EXAMPLE
        </p>

        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          <TextInput
            type="email"
            endIcon="/assets/icons/right-arrow.svg"
            endIconAlt="arrow"
            icon="/assets/icons/mail.svg"
            placeholder="Join our Community"
            iconClassName="brightness-0 saturate-100 [filter:invert(22%)_sepia(0%)_saturate(0%)_hue-rotate(0deg)]"
          />
          <Image
            src="/assets/icons/down-arrow.svg"
            width={20}
            height={20}
            alt="down-arrow"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
