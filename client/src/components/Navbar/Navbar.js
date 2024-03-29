import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Main
      </Link>
      <Link to="/admin" className="nav-link">
        Admin
      </Link>
    </nav>
  );
};
export default Navbar;
