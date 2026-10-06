"use client";

import { Card } from "../../components/ui/card";
import React from "react";

export const PorfolioSectionPictureCard = ({
  data,
}: {
  data: SectionDataType;
}) => {
  return (
    <Card className='flex-1 overflow-hidden'>
      <img
        src={data.image?.src}
        alt={data.title}
        className={`w-full h-full max-h-[30rem] object-cover ${
          data.browserFrame ? "object-top" : ""
        }`}
      />
    </Card>
  );
};
