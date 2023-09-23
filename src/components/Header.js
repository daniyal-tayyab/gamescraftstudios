import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import Button from "./Button";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

import logo from "../images/logo-full.png";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => setIsDrawerOpen((prevState) => !prevState);

  return (
    <header className="header">
      <div className="header__logo">
        {isDrawerOpen ? (
          <MdClose
            className="hamburger-icon"
            onClick={handleToggleDrawer}
            color="white"
          />
        ) : (
          <BiMenu className="hamburger-icon" onClick={handleToggleDrawer} />
        )}
        <Link to="/">
          <img className="logo-svg" src={logo} alt="gamescraft"/>
        </Link>
      </div>
      <div className="header__menu">
        {/* <div className="header__menu__icon-container">
          <LanguageIcon className="u-display-none" />
        </div>
        <div className="header__menu__icon-container">
          <CartIcon />
        </div>
        <Typography className="header__menu__signin">Sign In</Typography> */}
        
        <div className="">
          <Link to="/contact-us">
            <Button buttonType="default">Contact Us</Button>
          </Link>
        </div> 
      </div>
      <Drawer
        open={isDrawerOpen}
        handleToggleDrawer={handleToggleDrawer}
        anchor="left"
      />
    </header>
  );
};

export default Header;
