import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalFonts from "./assets/fonts/fonts";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { AppDiv, MainDiv, MainWrapperDiv } from "./styles/app-style";
import { PortfolioPage } from "./pages/Portfolio/PortfolioPage";
import { ResumePage } from "./pages/ResumePage";
import { Header } from "./layout/Header";
import { IconContext } from "react-icons";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { SideBarContainer } from "./layout/SideBarContainer";
import "./globals.css";
import { ContactPage } from "./pages/ContactPage";

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
          <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <Router>
              <div className='w-full flex flex-col'>
                <Header toggleTheme={toggleTheme} />
                <MainWrapperDiv>
                  <SideBarContainer
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />

                  <SidebarTrigger
                    onClick={() => setSidebarOpen(true)}
                    className='ml-1 mt-2'
                  />
                  <MainDiv>
                    <Switch>
                      <Route path={"/Resume"} component={ResumePage} />
                      <Route path={"/Contact"} component={ContactPage} />
                      <Route path={"/"} component={PortfolioPage} />
                    </Switch>
                  </MainDiv>
                </MainWrapperDiv>
              </div>
            </Router>
          </SidebarProvider>
        </StyledThemeProvider>
      </IconContext.Provider>
    </AppDiv>
  );
};

export default App;
