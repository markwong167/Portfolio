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
import { ExternalLink, Mail } from "lucide-react";

export const PorfolioSectionInfoCard = ({
  data,
  isMobile,
}: {
  data: SectionDataType;
  isMobile: string;
}) => {
  const isMobileOrTablet = ["M", "T"].includes(isMobile);
  let titleTextSize = "text-5xl";
  let bodyTextSize = "text-xl";
  let linkTextSize = "text-2xl";
  if (isMobile === "M") {
    titleTextSize = "text-3xl";
    bodyTextSize = "text-md";
    linkTextSize = "text-xl";
  } else if (isMobile === "T") {
    bodyTextSize = "text-2xl";
    linkTextSize = "text-3xl";
  }
  return (
    <Card
      className={`flex flex-col h-full ${
        isMobileOrTablet ? "w-full" : "max-w-md"
      }`}
    >
      <CardHeader>
        <CardTitle className={titleTextSize}>{data.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-grow flex flex-col gap-4'>
        <p className={bodyTextSize}>{data.description}</p>
        {data.role && (
          <span className={bodyTextSize}>
            <strong>Role:</strong> {data.role}
          </span>
        )}
        {isMobileOrTablet && data?.image && (
          <div className='flex-grow'>
            <PorfolioSectionPictureCard data={data} />
          </div>
        )}
      </CardContent>
      <CardFooter
        className={`${data.linkLeft ? "items-start" : "items-end"} ${
          isMobileOrTablet ? "gap-5" : "gap-2"
        } flex flex-col justify-end mt-auto`}
      >
        {data.links?.map((link) => {
          if (!link.link) {
            return <h3 className={linkTextSize}>{link.linkText}</h3>;
          }
          return (
            <Link
              className={`hover:underline text-secondary hover:text-secondary-foreground flex items-center gap-2 ${linkTextSize}`}
              key={link.id}
              to={link.link}
              target='_blank'
              rel='noreferrer noopener'
            >
              {link.linkText}
              {!link.link.startsWith("/") &&
                !link.link.startsWith("mailto:") && <ExternalLink size={24} />}
              {link.link.startsWith("mailto:") && <Mail size={24} />}
            </Link>
          );
        })}
      </CardFooter>
    </Card>
  );
};
