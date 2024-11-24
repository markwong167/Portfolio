import React from "react";
import { PorfolioSectionInfoCard } from "./PorfolioSectionInfoCard";
import { PorfolioSectionPictureCard } from "./PorfolioSectionPictureCard";

export const PortfolioSection = ({ data }: { data: SectionDataType }) => {
  return (
    <div className='flex gap-4 flex-1'>
      <PorfolioSectionInfoCard data={data} />
      <PorfolioSectionPictureCard data={data} />
    </div>
  );
};
