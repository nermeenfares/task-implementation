import React from "react";

function BlurredBackground() {
  return (
    <>
      <div className="absolute  z-0 top-0 left-0 w-[200px] sm:w-[300px] md:w-[349px] h-[60%] bg-[#c7deec] blur-3xl"></div>
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
    </>
  );
}

export default BlurredBackground;
