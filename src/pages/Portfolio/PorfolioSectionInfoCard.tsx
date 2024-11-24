import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";

export const PorfolioSectionInfoCard = ({
  data,
}: {
  data: SectionDataType;
}) => {
  return (
    <Card className='max-w-md'>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        {/* <CardDescription>{data.description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{data.description}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
