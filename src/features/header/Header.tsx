import React from "react";

import GradientHeroWrapper from "@/features/header/_partial/GradientHeroWrapper";
import Hero from "@/features/header/_partial/Hero";

const Header = () => {
  return (
    <GradientHeroWrapper>
      <Hero />
      <div className="z-20 h-5 bg-gradient-to-b from-gray-50 to-white" />
    </GradientHeroWrapper>
  );
};

export default Header;
