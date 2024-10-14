import React from "react";
import { BiBarChart } from "react-icons/bi";
import "./ResposiveNavbar.css";
import { NavLink, Link } from "react-router-dom";
const ResposiveNavbar = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = React.useState(false);
  return (
    <>
      <section className="responsiveNav">
        <BiBarChart
          onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
        />
        {showResponsiveMenu && (
          <div className="responsiveMenu">
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
            <button className="responsivebtn">
              <Link to="/status"> Check Status </Link>
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default ResposiveNavbar;
