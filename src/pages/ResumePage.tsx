import React from "react";
import samplePdf from "@/assets/Mark Wong Resume.pdf";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "../components/ui/button";

export const ResumePage = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`relative w-9/12 h-[calc(100vh-var(--header-height)-2rem)] mx-auto rounded-lg overflow-hidden ${
        isMobile ? "" : "border border-gray-300"
      }`}
    >
      {isMobile ? (
        <div className='flex flex-col mt-20 items-center h-full gap-20'>
          <h4 className='text-6xl font-bold'>My Resume</h4>
          <Button
            size='3xl'
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
