import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/"><h4>BCH</h4></Link>
      </div>
      <div>
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/browse" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Event
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/questions" className="nav-link">
                FAQ?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;