import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  
    const activeLink = {
      color: "#ffaa00",
      fontSize: "1.2rem",
      fontWeight: "bold",
    };
  
    const inactiveLink = {
      color: "#EEF0F2",
      fontSize: "1.2rem",
    };
    return (
      <nav className="navbar navbar-expand-sm navcolors">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.BssJyMMZoiycyDPiPtq6DgHaE8&pid=Api&P=0"
              width="80px"
              alt=""
              className="navimg"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Widgets"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                >
                  Widgets
                </NavLink>
              </li>

  
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Calender"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                >
                  Calender
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavigationBar;