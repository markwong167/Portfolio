import styled from "styled-components";
export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: ${({ theme }) => theme.headerText};
  background-color: ${({ theme }) => theme.headerBg};
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

type SideBarAsideProps = { sidebarOpen: boolean };
export const SideBarAside = styled.aside<SideBarAsideProps>`
  width: 250px;
  display: flex;
  position: ${({ sidebarOpen }) => (sidebarOpen ? " sticky" : "fixed")};
  transform: ${({ sidebarOpen }) =>
    sidebarOpen ? " translateX(0)" : "translateX(-100%)"};
  flex-direction: column;
  overflow-y: auto;
  color: ${({ theme }) => theme.sidebarText};
  background-color: ${({ theme }) => theme.sidebarBg};
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1) ease;
`;
export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: var(--accent-color);
  }
`;

export const SidebarKnob = styled.button<SideBarAsideProps>`
  position: fixed;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "10px")};
  transform: translateX(${({ sidebarOpen }) => (sidebarOpen ? "-3rem" : "0")});
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.accentBgColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease, background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentHoverColor};
  }
`;

export const SidebarKnobTriangle = styled.div<SideBarAsideProps>`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
`;
