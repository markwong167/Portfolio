import { Card, CardContent } from "../../components/ui/card";
import React from "react";
export const PorfolioSectionPictureCard = ({
  data,
}: {
  data: SectionDataType;
}) => {
  return (
    <Card className='flex-1 overflow-hidden'>
      <CardContent className='p-0'>
        <img
          src={data?.image}
          alt={data.image}
          className='w-full h-full object-cover'
        />
      </CardContent>
    </Card>
  );
};
