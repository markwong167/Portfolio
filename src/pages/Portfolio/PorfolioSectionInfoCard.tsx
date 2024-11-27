import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";
import { PorfolioSectionPictureCard } from "./PorfolioSectionPictureCard";
import { useNavigate } from "react-router";

export const PorfolioSectionInfoCard = ({
  data,
  isMobile,
}: {
  data: SectionDataType;
  isMobile: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      className={`flex flex-col h-full ${isMobile ? "w-full" : "max-w-md"}`}
    >
      <CardHeader>
        <CardTitle className='text-6xl'>{data.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-grow flex flex-col gap-4'>
        <p className='text-xl'>{data.description}</p>
        {isMobile && data?.image && (
          <div className='flex-grow'>
            <PorfolioSectionPictureCard data={data} />
          </div>
        )}
      </CardContent>
      <CardFooter
        className={`${data.linkLeft ? "items-start" : "items-end"} flex ${
          isMobile ? "flex-row" : "flex-col"
        } gap-2 justify-end mt-auto`}
      >
        {data.links?.map((link) => (
          <Button
            key={link.id}
            size={isMobile ? "lg" : "default"}
            onClick={() =>
              link.link.startsWith("/")
                ? navigate(link.link)
                : window.open(link.link, "_blank", "noreferrer noopener")
            }
          >
            {link.linkText}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};
