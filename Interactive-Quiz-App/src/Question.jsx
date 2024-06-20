import React, { useState } from "react";

const Question = ({ question, onAnswerSelected, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextClick = () => {
    onAnswerSelected(selectedOption);
    setSelectedOption("");
    onNextQuestion();
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextClick} disabled={!selectedOption}>
        Next
      </button>
    </div>
  );
};

export default Question;
