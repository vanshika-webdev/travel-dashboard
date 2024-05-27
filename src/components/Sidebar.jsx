import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // Active Sidebar
  const navStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#3B9AA4" : "",
      color: isActive ? "#fff" : "",
    };
  };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <NavLink to="/" style={navStyle} className="nav-link active">
            <span>Home Page</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/destination" style={navStyle} className="nav-link">
            <span>Banner & Details</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tripp" style={navStyle} className="nav-link">
            <span>Tripp & Details</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/enquiry" style={navStyle} className="nav-link">
            <span>Inquiry</span>
          </NavLink>
        </li>

        <li className="nav-item logout">
          <a href="/" className="nav-link">
            <img src="./logout-icon.svg" alt="" />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
