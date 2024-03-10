import React, { useState } from 'react';

const QuizQuestion = ({ onQuestionSubmitted }) => {
  const [inputQuestion, setInputQuestion] = useState('');
  const [inputOptions, setInputOptions] = useState(['', '', '', '']);
  const [inputTopic, setInputTopic] = useState('');
  const [inputCorrectAnswer, setInputCorrectAnswer] = useState('');

  const handleSubmit = () => {
    const submittedObject = {
      question: inputQuestion,
      options: inputOptions,
      correctAnswer: inputCorrectAnswer,
      topic: inputTopic,
    };

    onQuestionSubmitted(submittedObject);

    // Reset input fields
    setInputQuestion('');
    setInputOptions(['', '', '', '']);
    setInputTopic('');
    setInputCorrectAnswer('');
  };

  return (
    <div>
      <h1>Upload Question By Manual</h1>
      <label>
        Question:
        <input
          type="text"
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
        />
      </label>

      <br />

      <label>
        Options:
        <ul>
          {inputOptions.map((option, index) => (
            <li key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...inputOptions];
                  updatedOptions[index] = e.target.value;
                  setInputOptions(updatedOptions);
                }}
              />
            </li>
          ))}
        </ul>
      </label>

      <br />

      <label>
        Correct Answer:
        <input
          type="text"
          value={inputCorrectAnswer}
          onChange={(e) => setInputCorrectAnswer(e.target.value)}
        />
      </label>

      <br />

      <label>
        Topic:
        <input
          type="text"
          value={inputTopic}
          onChange={(e) => setInputTopic(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizQuestion;
