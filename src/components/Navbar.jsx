import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobile = () => {
    setMobileNav(!mobileNav);
  }
  return (
    <div className="navbar">
      <div>
        <Link to="/"><h4>BCH</h4></Link>
      </div>
      <div>
        <nav>
          <button className="mobile" onClick={handleMobile}>
            <span className="material-symbols-outlined">Menu</span>
          </button>
          <div className={`nav-links ${mobileNav ? "mobile-nav" : ""}`}>
            {props.loginData.logged && (
              <p>Welcome, {props.loginData.username}</p>
            )}

            <ul>
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
              {props.loginData.logged && <li className="nav-item">
                <Link to="/myevents" className="nav-link">
                  My Events
                </Link>
              </li>}
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
              {props.loginData.logged && (
                <li className="nav-item">
                  <button onClick={props.handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>

  );
}

export default Navbar;