import React, { useState, useEffect } from "react";
import "./Quiz.css";
import WelcomeScreen from "../welcomeScreen/WelcomeScreen";
import EndScreen from "../endScreen/EndScreen";
import Scoreboard from "../scoreboard/Scoreboard";
import { questions, shuffle } from "../../constants/questions";

const Quiz = () => {
  const [counter, setCounter] = useState(60);
  const [isConterActive, setIsCounterActive] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [endMessage, setEndMessage] = useState("");

  const startCounter = () => {
    setIsCounterActive(true);
  };

  const stopCounter = () => {
    setIsCounterActive(false);
    setShowEndScreen(true);
  };

  useEffect(() => {
    if (counter === 0) {
      stopCounter();
      setEndMessage("Time is up!");
    }
    let interval = null;
    if (isConterActive) {
      interval = setInterval(() => {
        setCounter((counter) => counter + -1);
      }, 1000);
    } else if (!isConterActive && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isConterActive, counter]);

  const start = () => {
    setShowWelcomeScreen(false);
    shuffle(questions);
    startCounter();
  };

  const stop = () => {
    setShowWelcomeScreen(true);
    setCurrentQuestion(0);
    setCounter(60);
    setIsCounterActive(false);
    setCorrect(0);
    setIncorrect(0);
    shuffle(questions);
  };

  const restart = () => {
    setShowWelcomeScreen(true);
    setShowEndScreen(false);
    setCurrentQuestion(0);
    setCounter(60);
    setIsCounterActive(false);
    setCorrect(0);
    setIncorrect(0);
    shuffle(questions);
  };

  const checkAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setCorrect((prevState) => prevState + 1);
    } else {
      setIncorrect((prevState) => prevState + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      stopCounter();
      setEndMessage("Well done!");
    }
  };

  return (
    <>
      {showWelcomeScreen ? (
        <div>
          <WelcomeScreen start={start} />
        </div>
      ) : showEndScreen ? (
        <div>
          <EndScreen
            counter={counter}
            correct={correct}
            incorrect={incorrect}
            endMessage={endMessage}
            restart={restart}
          />
        </div>
      ) : (
        <div>
          <div className="question-number">
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="counter">
            <h3>{counter}</h3>
          </div>
          <div className="question">{questions[currentQuestion].question}</div>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((item, index) => {
              return (
                <button key={index} onClick={() => checkAnswer(item.isCorrect)}>
                  {item.answer}
                </button>
              );
            })}
          </div>

          <Scoreboard correct={correct} incorrect={incorrect} stop={stop} />
        </div>
      )}
    </>
  );
};

export default Quiz;
