import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/cheese-and-crackers">
        Cheese and Crackers
      </NavLink>
      <NavLink exact to="/grapes">
        Grapes
      </NavLink>
      <NavLink exact to="/mixed-nuts">
        Mixed Nuts
      </NavLink>
    </nav>
  );
}

export default NavBar;
