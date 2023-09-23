import { SwipeableDrawer } from "@mui/material";
import SidebarItem from "./SidebarItem";

import { sidebarItems } from "../utils/dummyData";

import { MdClose } from "react-icons/md";

const Drawer = ({ open, handleToggleDrawer }) => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={handleToggleDrawer}
      anchor="left"
      onOpen={handleToggleDrawer}
      className="drawer"
      BackdropProps={{ invisible: true }}
    >
      <div className="drawer__close">
        <MdClose
          className="hamburger-icon drawer__close"
          onClick={handleToggleDrawer}
        />
      </div>
      <div className="drawer__layout">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            handleToggleDrawer={handleToggleDrawer}
          />
        ))}
      </div>
    </SwipeableDrawer>
  );
};

export default Drawer;
