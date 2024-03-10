import React, { useState, useEffect } from 'react';
// import '../GenerateQuestions.css'; // Import the CSS file

const GenerateQuestions = ({ topics, questionsByTopic }) => {
  const [selectedTopics, setSelectedTopics] = useState([{ topic: '', numQuestions: 1 }]);
  const [error, setError] = useState(null);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const uniqueTopics = Array.from(new Set(topics));

  useEffect(() => {
    // Reset error and generatedQuestions when the selected topics change
    setError(null);
    setGeneratedQuestions([]);
  }, [selectedTopics]);

  const handleTopicChange = (index, e) => {
    const newTopics = [...selectedTopics];
    newTopics[index].topic = e.target.value;
    setSelectedTopics(newTopics);
  };

  const handleNumberChange = (index, e) => {
    const newTopics = [...selectedTopics];
    const num = parseInt(e.target.value, 10);
    newTopics[index].numQuestions = num;
    setSelectedTopics(newTopics);
  };

  const addTopic = () => {
    setSelectedTopics([...selectedTopics, { topic: '', numQuestions: 1 }]);
  };

  const removeTopic = (index) => {
    const newTopics = selectedTopics.filter((_, i) => i !== index);
    setSelectedTopics(newTopics);
  };

  const handleGenerateQuestions = () => {
    // Filter out topics with empty values
    const validSelectedTopics = selectedTopics.filter(({ topic, numQuestions }) => topic && numQuestions > 0);

    if (validSelectedTopics.length === 0) {
      setError('Please select at least one topic and provide a valid number of questions.');
    } else {
      // Generate a random questionPaperId for the entire question paper
      const questionPaperId = Math.floor(Math.random() * 1000000);

      // Create an object for the entire question paper
      const questionPaper = {
        id: questionPaperId,
        details: validSelectedTopics.map(({ topic, numQuestions }) => ({
          topic: String(topic),
          numQuestions: parseInt(numQuestions, 10),
        })),
      };

      // Update state with the generated question paper
      setGeneratedQuestions([questionPaper]);

      // Reset error
      setError(null);

      // Console log the object
      console.log('Generated Questions:', questionPaper);
    }
  };

  return (
    <div>
      <h1>Generate Questions</h1>

      {selectedTopics.map((selectedTopic, index) => (
        <div key={index}>
          <label>
            Select Topic {index + 1}:
            <select
              value={selectedTopic.topic}
              onChange={(e) => handleTopicChange(index, e)}
            >
              <option value="">Select a topic</option>
              {uniqueTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>

            <label>
              Number of Questions:
              <input
                type="number"
                value={selectedTopic.numQuestions}
                onChange={(e) => handleNumberChange(index, e)}
                min="0"
              />
            </label>

            <button onClick={() => removeTopic(index)}>Remove Topic</button>
          </label>
        </div>
      ))}

      <button onClick={addTopic}>Add Topic</button>

      <br />

      <button onClick={handleGenerateQuestions}>Generate Questions</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {generatedQuestions.length > 0 && (
        <div>
          <h2>Generated Questions:</h2>
          <ul>
            {generatedQuestions.map((question, index) => (
              <li key={index}>{`Topic: ${question.details[index].topic}, Number of Questions: ${question.details[index].numQuestions}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenerateQuestions;
