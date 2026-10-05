"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";
import { PorfolioSectionPictureCard } from "./PorfolioSectionPictureCard";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

export const PorfolioSectionInfoCard = ({
  data,
  isMobile,
}: {
  data: SectionDataType;
  isMobile: string;
}) => {
  const isMobileOrTablet = ["M", "T"].includes(isMobile);
  let titleTextSize = "text-3xl";
  let bodyTextSize = "text-xl";
  let linkTextSize = "text-lg";
  if (isMobile === "M") {
    titleTextSize = "text-2xl";
    bodyTextSize = "text-md";
    linkTextSize = "text-base";
  } else if (isMobile === "T") {
    bodyTextSize = "text-2xl";
    linkTextSize = "text-xl";
  }
  return (
    <Card
      className={`flex flex-col h-full ${
        isMobileOrTablet ? "w-full" : "max-w-md"
      }`}
    >
      <CardHeader>
        <CardTitle className={titleTextSize}>{data.title}</CardTitle>
        {data.jobTitle && (
          <p className={`${bodyTextSize} text-muted-foreground`}>
            {data.jobTitle}
          </p>
        )}
      </CardHeader>
      <CardContent className='flex-grow flex flex-col gap-4'>
        <p className={bodyTextSize}>{data.description}</p>
        {data.role && (
          <span className={bodyTextSize}>
            <strong>My work:</strong> {data.role}
          </span>
        )}
        {data.tags && (
          <ul className='flex flex-wrap gap-2'>
            {data.tags.map((tag) => (
              <li
                key={tag}
                className='rounded-md border px-2 py-0.5 text-sm text-muted-foreground'
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {isMobileOrTablet && data?.image && (
          <div className='flex-grow'>
            <PorfolioSectionPictureCard data={data} />
          </div>
        )}
      </CardContent>
      <CardFooter className='mt-auto flex flex-row flex-wrap items-center justify-start gap-x-5 gap-y-2'>
        {data.links?.map((link) => {
          if (!link.link) {
            return (
              <h3 key={link.id} className={linkTextSize}>
                {link.linkText}
              </h3>
            );
          }
          return (
            <Link
              className={`hover:underline text-secondary hover:text-secondary-foreground flex items-center gap-2 ${linkTextSize}`}
              key={link.id}
              href={link.link}
              target='_blank'
              rel='noreferrer noopener'
            >
              {link.linkText}
              {!link.link.startsWith("/") &&
                !link.link.startsWith("mailto:") && <ExternalLink size={18} />}
              {link.link.startsWith("mailto:") && <Mail size={18} />}
            </Link>
          );
        })}
      </CardFooter>
    </Card>
  );
};
