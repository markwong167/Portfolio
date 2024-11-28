import React from "react";
import samplePdf from "@/assets/Mark Wong Resume.pdf";

export const ResumePage = () => {
  return (
    <div className='relative w-9/12 h-[calc(100vh-var(--header-height)-2rem)] mx-auto border border-gray-300 rounded-lg overflow-hidden'>
      <iframe
        src={samplePdf}
        title='PDF Viewer'
        className='w-full h-full border-none'
      />
    </div>
  );
};
