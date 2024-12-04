import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";
import { PorfolioSectionPictureCard } from "./PorfolioSectionPictureCard";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export const PorfolioSectionInfoCard = ({
  data,
  isMobile,
}: {
  data: SectionDataType;
  isMobile: boolean;
}) => {
  return (
    <Card
      className={`flex flex-col h-full ${isMobile ? "w-full" : "max-w-md"}`}
    >
      <CardHeader>
        <CardTitle className='text-5xl'>{data.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-grow flex flex-col gap-4'>
        <p className={isMobile ? "text-3xl" : "text-xl"}>{data.description}</p>
        {data.role && (
          <span className={isMobile ? "text-3xl" : "text-xl"}>
            <strong>Role:</strong> {data.role}
          </span>
        )}
        {isMobile && data?.image && (
          <div className='flex-grow'>
            <PorfolioSectionPictureCard data={data} />
          </div>
        )}
      </CardContent>
      <CardFooter
        className={`${data.linkLeft ? "items-start" : "items-end"} ${
          isMobile ? "gap-7" : "gap-2"
        } flex flex-col justify-end mt-auto`}
      >
        {data.links?.map((link) => (
          <Link
            className={`hover:underline text-secondary hover:text-secondary-foreground flex items-center gap-2 ${
              isMobile ? "text-4xl" : "text-2xl"
            }`}
            key={link.id}
            to={link.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            {link.linkText}
            {!link.link.startsWith("/") && <ExternalLink size={24} />}
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
};
