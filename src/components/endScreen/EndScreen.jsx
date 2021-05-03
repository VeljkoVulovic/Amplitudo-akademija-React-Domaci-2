import React from "react";
import "./EndScreen.css";

const EndScreen = ({ counter, correct, incorrect, endMessage, restart }) => {
  return (
    <div className="end-screen">
      <h1>{endMessage}</h1>
      <div>
        <span className="correct">Correct answers: {correct}</span>
      </div>
      <div>
        <span className="incorrect">Incorrect answers: {incorrect}</span>
      </div>
      <div>
        Time left: <span className="time-left">{counter} </span>sec
      </div>
      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default EndScreen;
