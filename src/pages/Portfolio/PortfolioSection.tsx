import React from "react";
import { PorfolioSectionInfoCard } from "./PorfolioSectionInfoCard";
import { PorfolioSectionPictureCard } from "./PorfolioSectionPictureCard";
import { useIsMobile } from "../../hooks/use-mobile";

export const PortfolioSection = ({
  data,
  layout,
}: {
  data: SectionDataType;
  layout: "picLeft" | "picRight";
}) => {
  const isMobile = useIsMobile();
  return (
    <div className='flex gap-5 flex-1' id={data.id}>
      {!isMobile && layout === "picLeft" && (
        <PorfolioSectionPictureCard data={data} />
      )}
      <PorfolioSectionInfoCard data={data} isMobile={isMobile} />
      {!isMobile && data?.image && layout === "picRight" && (
        <PorfolioSectionPictureCard data={data} />
      )}
    </div>
  );
};
