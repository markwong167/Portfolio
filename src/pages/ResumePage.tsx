import React from "react";
import samplePdf from "@/assets/Mark Wong Resume.pdf";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "../components/ui/button";

export const ResumePage = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`relative  mx-auto rounded-lg overflow-hidden ${
        isMobile === "M"
          ? "h-[calc(100vh-var(--header-height)-var(--footer-height))]"
          : "border border-gray-300 h-[calc(100vh-var(--header-height)-2rem)]"
      } ${isMobile === "T" ? "w-11/12" : "w-9/12"}`}
    >
      {isMobile === "M" ? (
        <div className='flex flex-col mt-20 items-center h-full gap-20'>
          <h4 className='text-3xl font-bold'>My Resume</h4>
          <Button
            size='xl'
            className='bg-primary text-primary-foreground'
            onClick={() => {
              window.open(samplePdf, "_blank");
            }}
          >
            Download Resume
          </Button>
        </div>
      ) : (
        <iframe
          src={samplePdf}
          title='PDF Viewer'
          className='w-full h-full border-none'
        />
      )}
    </div>
  );
};
