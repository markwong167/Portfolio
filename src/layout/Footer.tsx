import React from "react";
import { useIsMobile } from "../hooks/use-mobile";
export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex justify-around items-center h-[var(--footer-height)] bg-sidebar w-full text-2xl mt-6 rounded-lg`}
    >
      <div className='flex flex-1 items-center justify-center'>
        {!isMobile ? (
          <span>City: Toronto, Ontario</span>
        ) : (
          <div className='flex flex-col text-2xl'>
            <strong>City</strong>
            <p>Toronto, Ontario</p>
          </div>
        )}
      </div>
      <div className='flex flex-1 items-center justify-center'>
        {!isMobile ? (
          <a href='mailto:markwong167@gmail.com' className='hover:text-white'>
            Email: markwong167@gmail.com
          </a>
        ) : (
          <div className='flex flex-col text-2xl'>
            <strong>Email</strong>
            <p>markwong167@gmail.com</p>
          </div>
        )}
      </div>
      <div className='flex flex-1 items-center justify-center'>
        {!isMobile ? (
          <a
            href='https://github.com/VLegatus'
            className='hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github: github.com/VLegatus
          </a>
        ) : (
          <div className='flex flex-col text-2xl'>
            <strong>Github</strong>
            <p>github.com/VLegatus</p>
          </div>
        )}
      </div>
    </div>
  );
};
