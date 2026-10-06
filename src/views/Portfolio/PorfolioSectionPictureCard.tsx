"use client";

import { Card } from "../../components/ui/card";
import { Minus, Square, X } from "lucide-react";
import React from "react";

export const PorfolioSectionPictureCard = ({
  data,
}: {
  data: SectionDataType;
}) => {
  const image = (
    <img
      src={data.image?.src}
      alt={data.title}
      className={`w-full h-full max-h-[30rem] object-cover ${
        data.browserFrame ? "object-top" : ""
      }`}
    />
  );

  if (!data.browserFrame) {
    return <Card className='flex-1 overflow-hidden'>{image}</Card>;
  }

  return (
    <Card className='flex-1 overflow-hidden flex flex-col'>
      <div
        className='flex items-center justify-end gap-4 border-b bg-muted px-3 py-1.5 text-muted-foreground'
        aria-hidden='true'
      >
        <Minus size={14} />
        <Square size={11} />
        <X size={14} />
      </div>
      <div className='flex-1 min-h-0 overflow-hidden'>{image}</div>
    </Card>
  );
};
