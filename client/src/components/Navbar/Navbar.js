import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">
              <h1>Exams</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <h1>Admin</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
