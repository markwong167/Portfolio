import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderSubSection,
  UnstyledAnchor,
  UnstyledLink,
} from "./layout-style";
import { FaExternalLinkAlt } from "react-icons/fa";

const Header = ({ onToggleSidebar, sidebarOpen }) => {
  return (
    <HeaderContainer>
      <HeaderSubSection>
        <UnstyledLink to='/'>
          <h1>Mark Wong</h1>
        </UnstyledLink>
      </HeaderSubSection>
      <HeaderSubSection>
        <UnstyledLink to='/Resume'>
          <h2>Resume</h2>
        </UnstyledLink>
        <UnstyledAnchor href='https://www.linkedin.com/in/markwong167/'>
          <h2>Contact</h2>
        </UnstyledAnchor>
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
      </HeaderSubSection>
    </HeaderContainer>
  );
};

export default Header;
