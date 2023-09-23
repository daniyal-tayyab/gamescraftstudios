import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ hoverSidebar, item, handleToggleDrawer }) => {
  const [hover, setHover] = useState(false);

  const { title, Icon, Active, to } = item;

  const handleHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <NavLink
      to={to}
      className="sidebar-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleToggleDrawer}
    >
      <div className="sidebar-item__icon">{hover ? <Active /> : <Icon />}</div>
      {hoverSidebar && (
        <div
          className={`sidebar-item__title ${
            hover && ".sidebar-item__title__hover"
          }`}
        >
          {title}
        </div>
      )}
      {hoverSidebar === undefined && (
        <div
          className={`sidebar-item__title ${
            hover && ".sidebar-item__title__hover"
          }`}
        >
          {title}
        </div>
      )}
    </NavLink>
  );
};

export default SidebarItem;
