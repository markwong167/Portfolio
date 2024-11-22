import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalFonts from "./assets/fonts/fonts";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { AppDiv, MainDiv, MainWrapperDiv } from "./styles/app-style";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import { IconContext } from "react-icons";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <AppDiv>
      <GlobalFonts />
      <IconContext.Provider value={{ style: { verticalAlign: "-10%" } }}>
        <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Router>
            <Header toggleTheme={toggleTheme} />
            <MainWrapperDiv>
              <SideBar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
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
