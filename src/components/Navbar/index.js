import React from "react";

import { Nav, NavLink, Bars, NavBtn } from "./NavbarElements";

const Navbar = () => {
  const btnStyle = {
    color: "white",
    padding: 0,
    border: "none",
    background: "none",
    marginLeft: "24px",
    fontWeight:"bold",
    fontSize:"20px",
    hover: {
      transition: "all 0.2s ease-in-out",
      background: " white",
      color: " #010606",
    },
  };

  const imageStyle = {
    width: "120px",
    height: "60px",
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            style={imageStyle}
            src={require("../../images/loader_road_ready.png")}
            alt="logo"
          />
        </NavLink>
        <Bars />
        <NavBtn>
          <button style={btnStyle}>Logout</button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
