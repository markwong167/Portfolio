import React from "react";
import { PortfolioSection } from "./PortfolioSection";
import * as sectionData from "../../assets/sectionData/sectionData";
import { useIsMobile } from "../../hooks/use-mobile";
import { CallToAction } from "./CallToAction";
import { PortfolioSectionIntro } from "./PortfolioSectionIntro";

export const PortfolioPage = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={` gap-6 flex flex-col mb-6 ${
        isMobile === "M" ? "w-11/12" : "w-7/12"
      }`}
    >
      <PortfolioSectionIntro data={sectionData.intro} isMobile={isMobile} />
      <PortfolioSection data={sectionData.leago} layout='picLeft' />
      <PortfolioSection data={sectionData.builderLynx} layout='picRight' />
      <PortfolioSection data={sectionData.grg} layout='picLeft' />
      <CallToAction isMobile={isMobile} />
    </div>
  );
};
