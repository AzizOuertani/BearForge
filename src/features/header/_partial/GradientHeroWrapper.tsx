import React, { ReactNode } from "react";

import GradientHero from "./GradientHero";
type GradientHeroWrapperProps = {
  children: ReactNode;
};

const GradientHeroWrapper: React.FC<GradientHeroWrapperProps> = ({
  children,
}) => (
  <div className="relative h-[140%] w-full">
    <GradientHero className="absolute z-40 h-[120%] w-full bg-gradient-to-b" />
    <div className="relative">{children}</div>
  </div>
);

export default GradientHeroWrapper;
