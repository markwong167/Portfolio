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
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

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
        <CardTitle className='text-5xl'>{data.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-grow flex flex-col gap-4'>
        <p className='text-xl'>{data.description}</p>
        {data.role && (
          <span className='text-xl'>
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
        className={`${data.linkLeft ? "items-start" : "items-end"} flex ${
          isMobile ? "flex-row" : "flex-col"
        } gap-2 justify-end mt-auto`}
      >
        {data.links?.map((link) => (
          <Link
            className='text-2xl hover:underline text-secondary hover:text-secondary-foreground flex items-center gap-2'
            key={link.id}
            to={link.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            {link.linkText}
            {!link.link.startsWith("/") && <ExternalLink />}
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
};
