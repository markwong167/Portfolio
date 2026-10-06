"use client";

import { Card } from "../../components/ui/card";
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
        data.browserUrl ? "object-top" : ""
      }`}
    />
  );

  if (!data.browserUrl) {
    return <Card className='flex-1 overflow-hidden'>{image}</Card>;
  }

  return (
    <Card className='flex-1 overflow-hidden flex flex-col'>
      <div className='flex items-center gap-3 border-b bg-muted px-3 py-2'>
        <div className='flex gap-1.5' aria-hidden='true'>
          <span className='h-3 w-3 rounded-full bg-[#ff5f57]' />
          <span className='h-3 w-3 rounded-full bg-[#febc2e]' />
          <span className='h-3 w-3 rounded-full bg-[#28c840]' />
        </div>
        <div className='flex-1 truncate rounded-md bg-background px-3 py-1 text-center text-sm text-muted-foreground'>
          {data.browserUrl}
        </div>
        {/* balances the dots so the URL pill stays centered */}
        <div className='w-[3.25rem]' aria-hidden='true' />
      </div>
      <div className='flex-1 min-h-0 overflow-hidden'>{image}</div>
    </Card>
  );
};
