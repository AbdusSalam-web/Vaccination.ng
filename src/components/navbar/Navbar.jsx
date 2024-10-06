import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { BiBarChart } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <nav className="navbar  ">
        <div className="container">
          <div className="logo">
            <Link to="/">Vaccination.ng</Link>
          </div>
          <div className="menuIcon">
            <BiBarChart />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
