import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo-container">
        <img
          src="https://blog.hubspot.com/hs-fs/hubfs/ezgif-3-5a4b29c94d53-1.gif?width=1000&name=ezgif-3-5a4b29c94d53-1.gif"
          alt="Loading Animations Logo"
          className="logo"
        />
      </div>
      <h1>Welcome to Loading Animations!</h1>
      <p>
        Searching for the perfect loading animation for your project? Look no
        further! Here, you can:
      </p>
      <ul>
        <li>👁️‍🗨️ View a variety of loading animations.</li>
        <li>📜 Access the source code and CSS for any animation.</li>
        <li>📋 Easily copy the code to use in your projects.</li>
      </ul>
      <p>
        Navigate to the animations section, choose your favorite animation, and
        start implementing it in your projects today!
      </p>
    </div>
  );
};

export default Home;
