import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";
export const PorfolioSectionPictureCard = ({
  data,
}: {
  data: SectionDataType;
}) => {
  return (
    <Card className='flex-1'>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};
