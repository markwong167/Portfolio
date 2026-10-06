"use client";

import React from "react";
import Link from "next/link";
import { HomeIcon, Moon, Sun } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import MobileNav from "./MobileNav";
import LinkedinIcon from "../components/LinkedinIcon";
import GithubIcon from "../components/GithubIcon";

export type NavItem = {
  id: string;
  name: string;
  mobileName: string;
  link: string;
  isExternalLink: boolean;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    id: "home",
    name: "Mark Wong",
    mobileName: "Home",
    link: "/",
    isExternalLink: false,
    icon: <HomeIcon />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    mobileName: "LinkedIn",
    link: "https://www.linkedin.com/in/markwong167/",
    isExternalLink: true,
    icon: <LinkedinIcon />,
  },
  {
    id: "github",
    name: "Github",
    mobileName: "Github",
    link: "https://github.com/markwong167",
    isExternalLink: true,
    icon: <GithubIcon />,
  },
];

export const Header = ({
  currentTheme,
  toggleTheme,
}: {
  currentTheme: string;
  toggleTheme: () => void;
}) => {
  const isMobile = useIsMobile();
  if (isMobile === "M") {
    return (
      <MobileNav
        navItems={navItems}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
      />
    );
  }
  return (
    <div
      className={`fixed w-full top-0 z-50 h-[var(--header-height)] dark:border-b-2 dark:border-white flex items-center justify-between py-3 text-header-text
        bg-gradient-305 from-blue-200 to-[hsl(var(--header-bg))] dark:from-[hsl(var(--header-bg))] dark:to-slate-600`}
    >
      <div className='flex items-center justify-between gap-6 px-4 text-center'>
        <Link className='hover:underline' href='/'>
          <h1 className='text-2xl font-bold'>Mark Wong</h1>
        </Link>
      </div>
      <div className='flex items-center justify-between gap-6 px-4 text-center'>
        {navItems
          .filter((item) => item.name !== "Mark Wong")
          .map((item) => {
            if (!item.isExternalLink) {
              return (
                <Link key={item.id} className='hover:underline' href={item.link}>
                  <h2 className={`font-bold text-xl`}>{item.name}</h2>
                </Link>
              );
            }
            return (
              <a
                key={item.id}
                className='hover:underline'
                href={item.link}
                target='blank'
                rel='noreferrer noopener'
              >
                <h2 className={`font-bold flex items-center gap-2 text-xl`}>
                  {item.name} {item.icon}
                </h2>
              </a>
            );
          })}

        <button
          aria-label='Toggle Theme'
          onClick={toggleTheme}
          className='flex gap-1'
        >
          <Sun className={currentTheme === "light" ? "" : "opacity-30"} />
          <Moon className={currentTheme === "dark" ? "" : "opacity-30"} />
        </button>
      </div>
    </div>
  );
};
