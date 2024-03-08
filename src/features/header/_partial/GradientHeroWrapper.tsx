import React, { ReactNode } from "react";

import GradientHero from "./GradientHero";
type GradientHeroWrapperProps = {
  children: ReactNode;
};

const GradientHeroWrapper: React.FC<GradientHeroWrapperProps> = ({
  children,
}) => (
  <div style={{ position: "relative", width: "100%", height: "140%" }}>
    <GradientHero
      style={{
        position: "absolute",
        width: "100%",
        height: "120%",
        zIndex: 40,
      }}
    />
    <div style={{ position: "relative" }}>{children}</div>
  </div>
);

export default GradientHeroWrapper;
