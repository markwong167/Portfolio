import React from "react";
import { SideBarAside, SidebarKnob, SidebarKnobTriangle } from "./layout-style";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <SideBarAside sidebarOpen={sidebarOpen}>Sidebar</SideBarAside>{" "}
      <SidebarKnob
        sidebarOpen={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <SidebarKnobTriangle sidebarOpen={sidebarOpen} />
      </SidebarKnob>
    </>
  );
};

export default SideBar;
