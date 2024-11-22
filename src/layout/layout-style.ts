import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: light-dark(#333b3c, #dfdfdc);
  background-color: light-dark(#cfcdca, #2a2a2a);
`;

export const HeaderSubSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  padding: 1rem;
  text-align: center;
  h2 {
    vertical-align: middle;
  }
`;
export const UnstyledAnchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;
export const UnstyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;

type SideBarAsideProps = { sidebarOpen: boolean };
export const SideBarAside = styled.aside<SideBarAsideProps>`
  width: 250px;
  display: flex;
  position: ${({ sidebarOpen }) => (sidebarOpen ? " sticky" : "fixed")};
  transform: ${({ sidebarOpen }) =>
    sidebarOpen ? " translateX(0)" : "translateX(-100%)"};
  flex-direction: column;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.headerBg};
  /* color: light-dark(#333b3c, #dfdfdc);
  background-color: light-dark(#cfcdca, #2a2a2a); */
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1) ease;
`;
export const HeaderButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 2rem;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: var(--accent-color);
    transform: scale(1.2);
  }
`;

export const SidebarKnob = styled.button<SideBarAsideProps>`
  position: fixed;
  top: 50%;
  left: ${({ sidebarOpen }) =>
    sidebarOpen ? "250px" : "10px"}; /* Adjust based on sidebar width */
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease, background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentHoverColor};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.accentFocusColor};
  }
`;

export const SidebarKnobTriangle = styled.div<SideBarAsideProps>`
  width: 0;
  height: 0;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "0.25rem" : "-0.25rem")};
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-bottom: 17px solid ${({ theme }) => theme.headerText};
  transform: ${({ sidebarOpen }) =>
    sidebarOpen ? "rotate(90deg)" : "rotate(-90deg)"};
  transition: transform 0.15s ease;
`;
