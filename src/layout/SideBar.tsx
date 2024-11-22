import React from "react";
import { SideBarAside, SidebarKnob, SidebarKnobTriangle } from "./layout-style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <SideBarAside sidebarOpen={sidebarOpen}>Sidebar</SideBarAside>{" "}
      <SidebarKnob
        sidebarOpen={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <SidebarKnobTriangle sidebarOpen={sidebarOpen}>
          {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </SidebarKnobTriangle>
      </SidebarKnob>
    </>
  );
};

export default SideBar;
