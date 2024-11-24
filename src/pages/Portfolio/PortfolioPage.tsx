import React from "react";
import { PortfolioSection } from "./PortfolioSection";
import { intro } from "../../assets/sectionData/sectionData";
export const PortfolioPage = () => {
  return (
    <div className='w-9/12'>
      <h1>Portfolio</h1>
      <PortfolioSection data={intro} />
    </div>
  );
};
