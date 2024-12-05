import React from "react";
import { ThemeToggleButton, HeaderSubSection } from "./layout-style";
import {
  FaExternalLinkAlt,
  FaLinkedin,
  FaHome,
  FaFilePdf,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import MobileNav from "./MobileNav";

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
    icon: <FaHome />,
  },
  {
    id: "resume",
    name: "Resume",
    mobileName: "Resume",
    link: "/Resume",
    isExternalLink: false,
    icon: <FaFilePdf />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    mobileName: "LinkedIn",
    link: "https://www.linkedin.com/in/markwong167/",
    isExternalLink: true,
    icon: <FaLinkedin />,
  },
  {
    id: "portfolio",
    name: "Portfolio Code",
    mobileName: "Portfolio Code",
    link: "https://github.com/VLegatus/Portfolio",
    isExternalLink: true,
    icon: <FaGithub />,
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
      style={{
        backgroundColor: "hsl(var(--header-bg))",
      }}
      className={`sticky top-0 z-50 h-[var(--header-height)] flex items-center justify-between py-3 text-header-text`}
    >
      <HeaderSubSection>
        <Link className='hover:underline' to='/'>
          <h1 className='text-2xl font-bold'>Mark Wong</h1>
        </Link>
      </HeaderSubSection>
      <HeaderSubSection>
        {navItems
          .filter((item) => item.name !== "Mark Wong")
          .map((item) => {
            if (!item.isExternalLink) {
              return (
                <Link className='hover:underline' to={item.link}>
                  <h2 className={`font-bold text-xl`}>{item.name}</h2>
                </Link>
              );
            }
            return (
              <a
                className='hover:underline'
                href={item.link}
                target='blank'
                rel='noreferrer noopener'
              >
                <h2 className={`font-bold flex items-center gap-2 text-xl`}>
                  {item.name} <FaExternalLinkAlt />
                </h2>
              </a>
            );
          })}

        <ThemeToggleButton onClick={toggleTheme} className='flex gap-1'>
          <Sun className={currentTheme === "light" ? "" : "opacity-30"} />
          <Moon className={currentTheme === "dark" ? "" : "opacity-30"} />
        </ThemeToggleButton>
      </HeaderSubSection>
    </div>
  );
};
