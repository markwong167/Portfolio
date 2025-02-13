import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import * as sectionData from "../assets/sectionData/sectionData";
import { Link, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const sectionDataItems = [
  sectionData.intro,
  sectionData.leago,
  sectionData.builderLynx,
  sectionData.grg,
].map((item) => ({
  ...item,
  url: `/#${item.id}`,
  title: item.id === "intro" ? "Introduction" : item.title,
}));
const nonPortfolioItems = [
  { id: "backToHome", title: "Back To Portfolio", url: "/", icon: ArrowLeft },
];

const scrollTo = (id: string, offset: number) => {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};
export const SideBarContainer = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Sidebar variant='sidebar' collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-lg text-nowrap mt-2'>
            Mark's Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className='gap-3 mt-4'>
              {(location.pathname !== "/"
                ? nonPortfolioItems
                : sectionDataItems
              ).map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <div className='cursor-pointer'>
                      <Link
                        to={item.url}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        onClick={() =>
                          location.pathname !== "/"
                            ? navigate(item.url)
                            : scrollTo(item.id, -100)
                        }
                        className='flex gap-2 text-nowrap'
                      >
                        <item.icon
                          className={
                            sidebarOpen
                              ? ""
                              : "-translate-x-1 duration-150 ease-in-out"
                          }
                        />
                        <span className='text-lg'>{item.title}</span>
                      </Link>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
