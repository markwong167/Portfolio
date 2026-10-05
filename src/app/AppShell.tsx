"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../layout/Header";
import {
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { SideBarContainer } from "../layout/SideBarContainer";
import { useIsMobile } from "../hooks/use-mobile";
import { Footer } from "../layout/Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const isMobile = useIsMobile();
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <div className='w-full flex flex-col'>
            <Header currentTheme={theme} toggleTheme={toggleTheme} />
            <div
              className={`flex flex-1 overflow-hidden justify-center bg-[hsl(var(--body-bg))] text-[hsl(var(--body-text))]`}
            >
              {isMobile !== "M" && (
                <>
                  <SideBarContainer sidebarOpen={sidebarOpen} />
                  <SidebarTrigger
                    onClick={() => setSidebarOpen(true)}
                    style={{
                      left: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_ICON,
                    }}
                    className='mt-[calc(var(--header-height)+1rem)] ml-1 fixed transition-all duration-200 ease-linear [&_svg]:size-6'
                  />
                </>
              )}
              <div
                className={`${
                  isMobile === "M"
                    ? "w-11/12"
                    : "w-full mt-[var(--header-height)]"
                }`}
              >
                <div className='flex py-4 overflow-y-auto justify-center'>
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </div>
      </SidebarProvider>
    </div>
  );
};

export default AppShell;
