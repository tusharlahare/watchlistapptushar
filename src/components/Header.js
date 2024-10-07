import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); 
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const toggleLoginForm = () => {
    if (location.pathname === "/Login") {
      navigate("/"); 
    } else {
      setShowLoginForm(!showLoginForm); 
      navigate("/Login"); 
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
