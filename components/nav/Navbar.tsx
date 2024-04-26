import React from "react";
import { FaPhoneAlt, FaSignInAlt } from "react-icons/fa";
const Navbar = () => {
  const links = [
    "HOME",
    "SEARCH",
    "SELL",
    "COMMUNITIES",
    "RESOURCES",
    "PROPERTIES",
    "ABOUT",
    "CONTACT US",
  ];
  return (
    <>
      <nav className={`navbar navbar-expand-lg font-weight-bold nav_text`}>
        <div className="collapse navbar-collapse justify-content-center">
          <ul
            className="navbar-nav"
            style={{ backgroundColor: "white", color: "#beaf87 !important" }}
          >
            {links?.map((link) => {
              return (
                <li key={'links'} className="nav-item active">
                  <a href="#" className="nav-link">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div
        className="navbar"
        style={{ backgroundColor: "#beaf87", color: "white" }}
      >
        <div className="container d-flex justify-content-between">
          <div className="navbar-left">
            {/* Logo */}
            <img
              src="/logo.jpg"
              width={250}
              alt="Logo"
              className="navbar-logo"
            />
          </div>
          <div className="navbar-center">
            {/* Brand */}
            <span className="navbar-brand text-white">
              SUPER SAVVY SALES GROUP: OLA, AROUNA & ALIEU
            </span>
          </div>
          <div className="navbar-right d-flex justify-content-between align-items-center">
            <div className="ml-3">
              <span>202-257-1200</span>
            </div>
            <div>
              <button
                className="login-button btn btn btn-outline-light ml-4"
                style={{ marginLeft: "20px" }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
// Call for free quote now