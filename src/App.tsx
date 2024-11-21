import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalFonts from "./assets/fonts/fonts";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AppDiv, MainDiv, MainWrapperDiv } from "./styles/app-style";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import { IconContext } from "react-icons";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <AppDiv>
      <GlobalFonts />
      <IconContext.Provider value={{ style: { verticalAlign: "-10%" } }}>
        <StyledThemeProvider theme={theme}>
          <Router>
            <Header
              onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              sidebarOpen={sidebarOpen}
            />
            <MainWrapperDiv>
              <SideBar sidebarOpen={sidebarOpen} />
              <MainDiv>
                <Switch>
                  <Route path={"/Resume"} component={ResumePage} />
                  <Route path={"/"} component={PortfolioPage} />
                </Switch>
              </MainDiv>
            </MainWrapperDiv>
          </Router>
        </StyledThemeProvider>
      </IconContext.Provider>
    </AppDiv>
  );
};

export default App;
