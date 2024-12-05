import React from "react";
import { useIsMobile } from "../hooks/use-mobile";
export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex justify-around h-[var(--footer-height)] bg-sidebar w-full text-2xl rounded-lg ${
        isMobile === "M" ? " pl-5 text-lg flex-col" : "items-center"
      }`}
    >
      <span>
        <strong>City:</strong> Toronto, Ontario
      </span>
      <a href='mailto:markwong167@gmail.com' className='hover:text-white'>
        <strong>Email:</strong> markwong167@gmail.com
      </a>
      <a
        href='https://github.com/VLegatus'
        className='hover:text-white'
        target='_blank'
        rel='noopener noreferrer'
      >
        <strong>Github:</strong> github.com/VLegatus
      </a>
    </div>
  );
};
