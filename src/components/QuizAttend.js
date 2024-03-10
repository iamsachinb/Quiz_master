import React, { useState } from 'react';

const QuizAttend = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach(question => {
      if (question.answer === answers[question.id]) {
        totalScore++;
      }
    });
    setScore(totalScore);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map(question => (
        <div key={question.id}>
          <p>{question.question}</p>
          <ul>
            {question.options.map(option => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleChange(question.id, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
};

export default QuizAttend;
