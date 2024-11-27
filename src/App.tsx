import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalFonts from "./assets/fonts/fonts";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { AppDiv, MainDiv, MainWrapperDiv } from "./styles/app-style";
import { PortfolioPage } from "./pages/Portfolio/PortfolioPage";
import { ResumePage } from "./pages/ResumePage";
import { Header } from "./layout/Header";
import { IconContext } from "react-icons";
import {
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { SideBarContainer } from "./layout/SideBarContainer";
import "./globals.css";
import { ContactPage } from "./pages/ContactPage";
import { useIsMobile } from "./hooks/use-mobile";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const isMobile = useIsMobile();
  return (
    <AppDiv>
      <GlobalFonts />
      <IconContext.Provider value={{ style: { verticalAlign: "-10%" } }}>
        <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <BrowserRouter>
              <div className='w-full flex flex-col'>
                <Header toggleTheme={toggleTheme} />
                <MainWrapperDiv>
                  {!isMobile && (
                    <>
                      <SideBarContainer sidebarOpen={sidebarOpen} />

                      <SidebarTrigger
                        onClick={() => setSidebarOpen(true)}
                        style={{
                          left: sidebarOpen
                            ? SIDEBAR_WIDTH
                            : SIDEBAR_WIDTH_ICON,
                        }}
                        className='mt-2 ml-1 fixed transition-all duration-200 ease-linear  [&_svg]:size-6'
                        size='lg'
                      />
                    </>
                  )}
                  <MainDiv>
                    <Routes>
                      <Route path='/Resume' element={<ResumePage />} />
                      <Route path='/Contact' element={<ContactPage />} />
                      <Route path='/' element={<PortfolioPage />} />
                    </Routes>
                  </MainDiv>
                </MainWrapperDiv>
              </div>
            </BrowserRouter>
          </SidebarProvider>
        </StyledThemeProvider>
      </IconContext.Provider>
    </AppDiv>
  );
};

export default App;
