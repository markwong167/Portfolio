import React from "react";
import {
  ThemeToggleButton,
  HeaderContainer,
  HeaderSubSection,
} from "./layout-style";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <HeaderSubSection>
        <Link className='hover:underline' to='/'>
          <h1 className='text-2xl font-bold'>Mark Wong</h1>
        </Link>
      </HeaderSubSection>
      <HeaderSubSection>
        <Link className='hover:underline' to='/Resume'>
          <h2 className='text-xl font-bold'>Resume</h2>
        </Link>
        <Link className='hover:underline' to='/Contact'>
          <h2 className='text-xl font-bold'>Contact</h2>
        </Link>
        <a
          className='hover:underline'
          href='https://www.linkedin.com/in/markwong167/'
          target='blank'
          rel='noreferrer noopener'
        >
          <h2 className='text-xl font-bold flex items-center gap-2'>
            LinkedIn <FaExternalLinkAlt />
          </h2>
        </a>
        <a
          className='hover:underline'
          href='https://github.com/VLegatus/Portfolio'
          target='blank'
          rel='noreferrer noopener'
        >
          <h2 className='text-xl font-bold flex items-center gap-2'>
            Portfolio Code <FaExternalLinkAlt />
          </h2>
        </a>
        <ThemeToggleButton onClick={toggleTheme}>🌓</ThemeToggleButton>
      </HeaderSubSection>
    </HeaderContainer>
  );
};
