import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Card } from "../../components/ui/card";
export const CallToAction = ({ isMobile }: { isMobile: string }) => {
  const isMobileOrTablet = ["M", "T"].includes(isMobile);
  let titleTextSize = "text-4xl";
  let bodyTextSize = "text-xl";
  let linkTextSize = "text-xl";
  if (isMobile === "M") {
    titleTextSize = "text-2xl";
    bodyTextSize = "text-md";
    linkTextSize = "text-xl";
  } else if (isMobile === "T") {
    bodyTextSize = "text-2xl";
    linkTextSize = "text-xl";
  }
  return (
    <>
      <Card className='flex flex-col justify-center items-center h-full w-full gap-8 pt-6 pb-12'>
        <h2 className={titleTextSize}>Let's work together</h2>
        <div className='flex flex-row gap-12'>
          <Link
            to='https://www.linkedin.com/in/markwong167/'
            target='_blank'
            rel='noreferrer noopener'
            className={`${linkTextSize} flex flex-row gap-2 items-center hover:underline text-secondary hover:text-secondary-foreground`}
          >
            <FaLinkedin size={24} /> Connect With Me
          </Link>
          <Link
            to='mailto:markwong167@gmail.com'
            target='_blank'
            rel='noreferrer noopener'
            className={`${linkTextSize} flex flex-row gap-2 items-center hover:underline text-secondary hover:text-secondary-foreground`}
          >
            <FaEnvelope size={24} /> Email Me
          </Link>
        </div>
      </Card>
    </>
  );
};
