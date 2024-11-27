import React from "react";
import { PortfolioSection } from "./PortfolioSection";
import * as sectionData from "../../assets/sectionData/sectionData";

export const PortfolioPage = () => {
  return (
    <div className='w-9/12 gap-4 flex flex-col'>
      <PortfolioSection data={sectionData.intro} />
      <PortfolioSection data={sectionData.leago} />
      <PortfolioSection data={sectionData.builderLynx} />
      <PortfolioSection data={sectionData.grg} />
    </div>
  );
};
