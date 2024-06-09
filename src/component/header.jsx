import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFilter } from "react-icons/md";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className="title-header">TravelWorld</div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className="nav-link"
              activeClassName="active"
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packages"
              className="nav-link"
              activeClassName="active"
            >
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className="nav-link"
              activeClassName="active"
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <div className="search-icon">
          <FaSearch />
        </div>
        <div className="filter-icon">
          <MdOutlineFilter />
        </div>
        {/* Render different links based on login status */}
        {isLoggedIn ? (
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        ) : (
          <div className="login">
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </div>
        )}
        <div className="register">
          <NavLink to="/register" className="nav-link" activeClassName="active">
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
