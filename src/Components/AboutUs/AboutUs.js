import React from "react";
import "./AboutUs.css";
import shivamPhoto from "../../assets/Shivam_Jain_10930.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/link.png"
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          <h1 className="hero-title">Welcome to Animation Central</h1>
          <p className="hero-description">
            We are dedicated to bringing you the most captivating animations and
            designs. Our team works tirelessly to ensure you have the best user
            experience. Explore our vast collection of animations and get ready
            to be mesmerized. Thank you for choosing us!
          </p>

          {/* Thank Your Mentor Section */}
        </div>
        <div className="profile-container">
          <img src={shivamPhoto} alt="Profile" className="profile-image" />
          <h2 className="profile-name">Shivam Jain</h2>
          <div className="social-links">
            <a
              href="https://github.com/shivamjain169"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="logos github-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-jain-54772726a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="logos linkedin-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span>Contact Us: </span>
        <span>Phone: 7415131511 | </span>
        <span>Email: shivamjain169@gmail.com</span>
      </footer>
    </>
  );
};

export default AboutUs;
