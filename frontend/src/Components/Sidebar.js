import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <NavLink
          style={{ textDecoration: "none" }}
          to="./"
          activeClassName="active-nav"
          className="row"
        >
          Home
        </NavLink>

        <NavLink
          style={{ textDecoration: "none" }}
          to="/appA"
          activeClassName="active-nav"
          className="row"
        >
          Application A
        </NavLink>

        <NavLink
          style={{ textDecoration: "none" }}
          to="/appB"
          activeClassName="active-nav"
          className="row"
        >
          Application B
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
