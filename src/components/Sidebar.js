import React, { useState } from "react";

import SidebarItem from "./SidebarItem";

import { sidebarItems } from "../utils/dummyData";

const Sidebar = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <aside
      className={`sidebar ${hover === true && "hover"}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {sidebarItems.map((item, index) => (
        <SidebarItem hoverSidebar={hover} item={item} key={index} />
      ))}
    </aside>
  );
};

export default Sidebar;
