import React from "react";
import { PortfolioSection } from "./PortfolioSection";
import * as sectionData from "../../assets/sectionData/sectionData";

export const PortfolioPage = () => {
  return (
    <div className='w-9/12 gap-6 flex flex-col'>
      <PortfolioSection data={sectionData.intro} layout='picRight' />
      <PortfolioSection data={sectionData.leago} layout='picLeft' />
      <PortfolioSection data={sectionData.builderLynx} layout='picRight' />
      <PortfolioSection data={sectionData.grg} layout='picLeft' />
    </div>
  );
};
