import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderSubSection,
} from "./layout-style";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar, sidebarOpen }) => {
  return (
    <HeaderContainer>
      <HeaderSubSection>
        <HeaderButton onClick={onToggleSidebar}>
          {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </HeaderButton>
        <h1>Mark Wong</h1>
      </HeaderSubSection>
      <HeaderSubSection>
        <Link to='/Resume'>
          <h2>Resume</h2>
        </Link>
        <a href='https://www.linkedin.com/in/markwong167/'>
          <h2>Contact</h2>
        </a>
        <a href='https://www.linkedin.com/in/markwong167/'>
          <h2>
            LinkedIn <FaExternalLinkAlt />
          </h2>
        </a>

        <a href='https://github.com/VLegatus/Portfolio'>
          <h2>
            Portfolio Code <FaExternalLinkAlt />
          </h2>
        </a>
      </HeaderSubSection>
    </HeaderContainer>
  );
};

export default Header;
