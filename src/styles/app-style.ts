import styled from "styled-components";
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  min-height: 100vh;
  width: 100%;
  color-scheme: light dark;
`;
export const MainWrapperDiv = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  color: light-dark(#333b3c, #dfdfdc);
  background-color: light-dark(#efedea, #1a1a1a);
`;
export const MainDiv = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const FlexRowCtrDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FlexRowTopCtrDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const FlexColCtrDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FlexColTopCtrDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
