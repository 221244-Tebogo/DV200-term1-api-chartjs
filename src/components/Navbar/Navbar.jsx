// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Sidebar className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-container" />
        </div>
        <Menu className="menu">
          <MenuItem className="nav-link">
            <Link to="/">
              <HomeRoundedIcon /> Home
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/compare">
              <InsertChartIcon /> Comparison
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/timeline">
              <TimelineRoundedIcon /> Timeline
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/manu">
              <TimelineRoundedIcon /> Manu
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/dogs">
              {" "}
              {/* Update path to /dogs */}
              <TimelineRoundedIcon /> Dogs
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Navbar;
