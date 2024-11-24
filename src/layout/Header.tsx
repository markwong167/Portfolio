import React from "react";
import {
  ThemeToggleButton,
  HeaderContainer,
  HeaderSubSection,
  UnstyledAnchor,
  UnstyledLink,
} from "./layout-style";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <HeaderSubSection>
        <UnstyledLink to='/'>
          <h1>Mark Wong</h1>
        </UnstyledLink>
      </HeaderSubSection>
      <HeaderSubSection>
        <Link className='hover:underline' to='/Resume'>
          <h2>Resume</h2>
        </Link>
        <Link className='hover:underline' to='/Contact'>
          <h2>Contact</h2>
        </Link>
        <UnstyledAnchor
          href='https://www.linkedin.com/in/markwong167/'
          target='blank'
          rel='noreferrer noopener'
        >
          <h2>
            LinkedIn <FaExternalLinkAlt />
          </h2>
        </UnstyledAnchor>

        <UnstyledAnchor
          href='https://github.com/VLegatus/Portfolio'
          target='blank'
          rel='noreferrer noopener'
        >
          <h2>
            Portfolio Code <FaExternalLinkAlt />
          </h2>
        </UnstyledAnchor>
        <ThemeToggleButton onClick={toggleTheme}>🌓</ThemeToggleButton>
      </HeaderSubSection>
    </HeaderContainer>
  );
};
