import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import { NavItem } from "./Header";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
export default function MobileNav({
  navItems,
  currentTheme,
  toggleTheme,
}: {
  navItems: NavItem[];
  currentTheme: string;
  toggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div
          style={{
            backgroundColor: "hsl(var(--header-bg))",
          }}
          className={`sticky top-0 z-50 h-[var(--mobile-header-height)] flex items-center justify-between text-header-text`}
        >
          <Button
            aria-label='Toggle Mobile Navigation'
            variant='ghost'
            size='mobileMenuIcon'
          >
            <MenuIcon />
          </Button>
        </div>
      </SheetTrigger>

      {/* isMobile is already caught in parent */}
      <SheetContent side='top'>
        <div className='flex flex-col items-start w-full h-screen mt-20 gap-10'>
          {navItems.map((item) => (
            <Button
              key={item.id}
              aria-label={item.mobileName}
              variant='ghost'
              size='mobileLink'
              onClick={() => {
                setOpen(false);
                if (item.isExternalLink) {
                  window.open(item.link, "_blank");
                } else {
                  navigate(item.link);
                }
              }}
              className='justify-start ml-4 gap-10'
            >
              {item.icon}
              {item.mobileName}
            </Button>
          ))}
          <button
            aria-label='Toggle Theme'
            onClick={toggleTheme}
            className='flex gap-10 justify-center w-full [&_svg]:size-20 mt-20'
          >
            <Sun className={currentTheme === "light" ? "" : "opacity-30"} />
            <Moon className={currentTheme === "dark" ? "" : "opacity-30"} />
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
