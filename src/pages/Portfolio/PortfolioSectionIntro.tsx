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
export const PortfolioSectionIntro = ({
  data,
  isMobile,
}: {
  data: SectionDataType;
  isMobile: string;
}) => {
  const isMobileOrTablet = ["M", "T"].includes(isMobile);
  let titleTextSize = "text-5xl font-bold";
  let bodyTextSize = "text-xl";
  let linkTextSize = "text-2xl";
  if (isMobile === "M") {
    titleTextSize = "text-3xl font-bold";
    bodyTextSize = "text-md";
    linkTextSize = "text-xl";
  } else if (isMobile === "T") {
    bodyTextSize = "text-2xl";
    linkTextSize = "text-3xl";
  }
  return (
    <section
      className={`flex h-full w-full bg-gradient-to-br from-blue-200 dark:from-blue-900 to-[hsl(var(--card))] dark:to-[hsl(var(--card))] p-6 shadow-lg ${
        isMobileOrTablet ? "flex-col" : "flex-row"
      }`}
    >
      <div className='flex flex-col h-full w-full'>
        <CardHeader>
          <CardTitle className={titleTextSize}>{data.title}</CardTitle>
        </CardHeader>
        <CardContent className='flex-grow flex gap-4'>
          <p className={bodyTextSize}>{data.description}</p>
          {data.role && (
            <span className={bodyTextSize}>
              <strong>Role:</strong> {data.role}
            </span>
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
                  !link.link.startsWith("mailto:") && (
                    <ExternalLink size={24} />
                  )}
              </Link>
            );
          })}
        </CardFooter>
      </div>
      <div className='flex-grow py-4 px-8'>
        <PorfolioSectionPictureCard data={data} />
      </div>
    </section>
  );
};
