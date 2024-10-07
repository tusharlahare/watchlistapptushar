import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); // State to track form visibility
  const location = useLocation(); // Hook to get current route
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleLoginForm = () => {
    if (location.pathname === "/Login") {
      navigate("/"); // Redirect to home if on the login page
    } else {
      setShowLoginForm(!showLoginForm); // Toggle the login form visibility
      navigate("/Login"); // Navigate to the login page
    }
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MyWatchList</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                +Add
              </Link>
            </li>
            <li>
              <button onClick={toggleLoginForm} className="btn">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
