import React from "react";
import "./Scoreboard.css";

const Scoreboard = ({ correct, incorrect, stop }) => {
  return (
    <div className="scoreboard">
      <div className="correct-incorrect">
        <span className="correct">
          Correct answers:
          {correct}{" "}
        </span>
        / <span className="incorrect">Incorrect answers: {incorrect}</span>
      </div>
      <div>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default Scoreboard;
