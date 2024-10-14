import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import ResposiveNavbar from "./responsiveNavbar/ResposiveNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="#">
              <img src={logo} alt="Company logo" />
            </NavLink>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/schedule">Schedule</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
            <button className="btn">
              <Link to="/status"> Check Status </Link>
            </button>
          </div>
          <ResposiveNavbar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
