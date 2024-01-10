import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoReorderThreeSharp } from "react-icons/io5";
const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isLoggedIn } = useAuth(); // this is for saving the state after logging in 
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        RelX 
      </Link><HiChatBubbleBottomCenterText className="title-icon"/>
      <IoReorderThreeSharp
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        style={{color : "white"}}
      ></IoReorderThreeSharp>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className="nav-li-for-hovering">
            <Link to="/home" className="nav-item">
              Home
            </Link>
          </li>
          <li className="nav-li-for-hovering">
            <Link to="/dashboard" className="nav-item">
              DashBoard
            </Link>
          </li>
          <li className="nav-li-for-hovering">
            {isLoggedIn ? (
              <Link to="/tryit" className="nav-item">Try It</Link>
            ) : (
              <Link to="/login" className="nav-item">Try It</Link>
            )}
          </li>
          <li className="nav-li-for-hovering">
            <Link to="/about" className="nav-item">
              AboutUs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;