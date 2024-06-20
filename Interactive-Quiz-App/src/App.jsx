import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Who wrote Hamlet?",
    options: ["Shakespeare", "Marlowe", "Jonson", "Johnson"],
    answer: "Shakespeare"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelected = (selectedOption) => {
    setUserAnswers([...userAnswers, selectedOption]);
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    questionsData.forEach((question, index) => {
      if (question.answer === userAnswers[index]) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="App">
      <h1>Interactive Quiz App</h1>
      {showResult ? (
        <Result score={score} onReset={handleResetQuiz} />
      ) : (
        <Question
          question={questionsData[currentQuestion]}
          onAnswerSelected={handleAnswerSelected}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default App;
