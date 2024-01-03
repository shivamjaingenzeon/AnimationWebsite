import React from "react";
import navbarLogo from "../../assets/navbarImage.jpg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/aboutUs");
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={navbarLogo} alt="navbar logo" className="navbar_logo" />
      </div>
      <button className="about-button" onClick={handleNavigate}>
        About Us
      </button>
    </nav>
  );
};

export default Navbar;
