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

type SideBarAsideProps = { sidebarOpen: boolean };
export const SideBarAside = styled.aside<SideBarAsideProps>`
  width: 250px;
  display: flex;
  position: ${(props) => (props.sidebarOpen ? " sticky" : "fixed")};
  flex-direction: column;
  overflow-y: auto;
  color: light-dark(#333b3c, #dfdfdc);
  background-color: light-dark(#cfcdca, #2a2a2a);
  transform: ${(props) =>
    props.sidebarOpen ? " translateX(0)" : "translateX(-100%)"};
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
