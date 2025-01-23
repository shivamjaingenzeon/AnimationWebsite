import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_logo-container">
        <div className="home_loading-spinner"></div> {/* Vibrant spinner */}
      </div>
      <div className="home_engaging-text">
        Unleash the Power of Animation!
      </div>
      <div className="home_subheading">
        Choose from a wide range of animations that will elevate your web design and user experience.
      </div>

      <div className="home_cards-container">
        {/* Card 1 */}
        <div className="home_card">
          <div className="home_card-icon">🎨</div>
          <h3>Creative Animations</h3>
          <p>Explore unique and visually appealing loading animations to make your projects stand out.</p>
        </div>

        {/* Card 2 */}
        <div className="home_card">
          <div className="home_card-icon">📜</div>
          <h3>Code Ready</h3>
          <p>Copy and paste the code directly into your project with ease. It’s that simple!</p>
        </div>

        {/* Card 3 */}
        <div className="home_card">
          <div className="home_card-icon">🚀</div>
          <h3>Fast & Efficient</h3>
          <p>Optimized animations that ensure quick load times without compromising on style.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;