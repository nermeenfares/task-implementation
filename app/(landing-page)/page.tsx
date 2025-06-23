import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import Statics from "@/components/home/Statics";
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
