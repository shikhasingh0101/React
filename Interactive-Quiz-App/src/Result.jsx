import React from "react";
import questionsData from "./App"; 

const Result = ({ score, onReset }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score} out of {questionsData.length}</p>
      <button onClick={onReset}>Restart Quiz</button>
    </div>
  );
};

export default Result;
