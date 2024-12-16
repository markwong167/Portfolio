import { Card, CardContent } from "../../components/ui/card";
import React from "react";
export const PorfolioSectionPictureCard = ({
  data,
}: {
  data: SectionDataType;
}) => {
  return (
    <Card className='flex-1 overflow-hidden'>
      <img
        src={data?.image}
        alt={data.image}
        className='w-full h-full object-cover max-h-[30rem]'
      />
    </Card>
  );
};
