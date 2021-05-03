import React from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = ({ start }) => {
  return (
    <div className="welcome-screen">
      <h1>Movie Quiz</h1>
      <button onClick={start}>Start</button>
    </div>
  );
};

export default WelcomeScreen;
