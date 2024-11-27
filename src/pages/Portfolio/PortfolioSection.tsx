import React from "react";
import { PorfolioSectionInfoCard } from "./PorfolioSectionInfoCard";
import { PorfolioSectionPictureCard } from "./PorfolioSectionPictureCard";
import { useIsMobile } from "../../hooks/use-mobile";

export const PortfolioSection = ({ data }: { data: SectionDataType }) => {
  const isMobile = useIsMobile();
  return (
    <div className='flex gap-4 flex-1' id={data.id}>
      <PorfolioSectionInfoCard data={data} isMobile={isMobile} />
      {!isMobile && data?.image && <PorfolioSectionPictureCard data={data} />}
    </div>
  );
};
