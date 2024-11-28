import React from "react";
export const Footer = () => {
  return (
    <div
      className={`flex justify-around items-center h-[var(--footer-height)] bg-sidebar w-full text-2xl mt-6 rounded-lg`}
    >
      <div className='flex flex-1 items-center justify-center'>
        <span>City: Toronto, Ontario</span>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <a href='mailto:markwong167@gmail.com' className='hover:text-white'>
          Email: markwong167@gmail.com
        </a>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <a
          href='https://github.com/VLegatus'
          className='hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github: github.com/VLegatus
        </a>
      </div>
    </div>
  );
};
