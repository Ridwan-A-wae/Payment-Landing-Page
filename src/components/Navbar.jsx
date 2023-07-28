import React from "react";
import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="container">
      <h1 className="logo">@</h1>

      <nav ref={navRef} className="mid">
        <li>
          {" "}
          <a className="textMid" href="">
            Featres
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="textMid" href="">
            Pricing
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="textMid" href="">
            Help
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="textMid" href="">
            Blog
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="textMid" href="">
            About us
          </a>{" "}
        </li>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <div className="right">
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <button className="btnLogIn">Log In</button>
        <button className="btnSignUp">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
