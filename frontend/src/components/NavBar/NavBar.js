import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isLoggedIn } = useAuth(); // this is for saving the state after logging in 
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        ChatBot
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/home" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-item">
              DashBoard
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link to="/tryit" className="nav-item">Try It</Link>
            ) : (
              <Link to="/login" className="nav-item">Try It</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;