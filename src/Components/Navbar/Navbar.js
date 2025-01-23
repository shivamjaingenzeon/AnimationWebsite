import React from "react";
import navbarLogo from "../../assets/navbarImage.jpg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { setAnimationButtonActive } from "../../Redux/AlertSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handleNavigate() {
    navigate("/aboutUs");
  }
  const onClickAnimation = () => {
    // Dispatch the action to set the active animation and button state
    dispatch(
      setAnimationButtonActive({
        isActive: false,
        animationName: "",
      })
    );
    navigate('/')
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={navbarLogo} alt="navbar logo" className="navbar_logo" onClick={onClickAnimation} />
      </div>
      <button className="about-button" onClick={handleNavigate}>
        About Us
      </button>
    </nav>
  );
};

export default Navbar;
