"use client";

import { Card, CardContent } from "../../components/ui/card";
import React from "react";
export const PorfolioSectionPictureCard = ({
  data,
  imageClassName = "",
}: {
  data: SectionDataType;
  imageClassName?: string;
}) => {
  return (
    <Card className='flex-1 overflow-hidden'>
      <img
        src={data.image?.src}
        alt={data.title}
        className={`w-full h-full object-cover ${imageClassName}`}
      />
    </Card>
  );
};
