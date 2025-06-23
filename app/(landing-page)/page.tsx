import AboutSection from "@/components/landingPage/home/AboutSection";
import Hero from "@/components/landingPage/home/Hero";
import Statics from "@/components/landingPage/home/Statics";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <Statics />
      <div className="h-[3px] bg-white" />
      <AboutSection />
    </>
  );
}

export default Home;
