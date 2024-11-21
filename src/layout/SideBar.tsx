import React from "react";
import { SideBarAside } from "./layout-style";

const SideBar = ({ sidebarOpen }) => {
  return <SideBarAside sidebarOpen={sidebarOpen}>Sidebar</SideBarAside>;
};

export default SideBar;
