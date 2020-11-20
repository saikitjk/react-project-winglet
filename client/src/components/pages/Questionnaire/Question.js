import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import LandingPage from "../LandingPage"; //welcome page
//import { useHistory } from "react-router-dom";
import "./style.css";

export default function App() {
  const { userData } = useContext(UserContext);
  const questions = [
    {
      questionText: "What's your favorite music genre?",
      answerOptions: [
        { answerText: "Alternative" },
        { answerText: "Country" },
        { answerText: "Hip-Hop" },
        { answerText: "K-Pop" },
      ],
    },
    {
      questionText: "What are your interests?",
      answerOptions: [
        { answerText: "Hiking" },
        { answerText: "Clubbing" },
        { answerText: "Travel" },
        { answerText: "Food" },
      ],
    },
    {
      questionText: "What is your favorite language?",
      answerOptions: [
        { answerText: "Python" },
        { answerText: "JavaScript" },
        { answerText: "C#" },
        { answerText: "C++" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(1);
  const history = useHistory();

  const [userAnswers, setUserAnswers] = useState([]);

  const appendAnswertoArray = () => {
    //setUserAnswers([...userAnswers, ])
    console.log("i am hit ");
  };

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  function counter() {
    setCount(count + 1);
    console.log("this is" + count);
  }

  const goHome = () => history.push("/home");

  return (
    <>
      {userData.user ? (
        <div className="app">
          {count > questions.length ? (
            <button
              type="button"
              className="btn btn btn-success goHomeButton"
              onClick={goHome}
            >
              Submit
            </button>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="answerButton"
                      onClick={() => {
                        handleAnswerOptionClick();
                        counter();
                        appendAnswertoArray();
                      }}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}
