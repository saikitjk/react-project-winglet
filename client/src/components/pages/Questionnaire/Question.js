import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function App() {
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

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  //use userContext as data source
  //this brings user back to login if they click logout
  // const { userData } = useContext(UserContext);
  // const history = useHistory();
  // useEffect(() => {
  //   if (!userData.user) history.push("./login");
  // }, [userData]);
  return (
    <div className="app">
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
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button
              className="answerButton"
              onClick={() => handleAnswerOptionClick()}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </>
    </div>
  );
}
