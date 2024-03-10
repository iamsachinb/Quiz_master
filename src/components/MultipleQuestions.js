import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const MultipleQuestions = ({ onQuestionsExtracted }) => {
  const [excelFile, setExcelFile] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setExcelFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];

        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const extractedQuestions = sheetData.slice(1).map((row) => ({
          question: row[0],
          options: [row[1], row[2], row[3], row[4]],
          correctAnswer: row[5],
          topic: row[6],
        }));

        setQuestions(extractedQuestions);

        // Notify parent component about the extracted questions
        onQuestionsExtracted(extractedQuestions);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <h1>Upload Multiple Questions by Excel</h1>

      <label>
        Upload Excel File:
        <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
      </label>

      {questions.length > 0 && (
        <div>
          <h2>Parsed Questions:</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <p>{`Question: ${question.question}`}</p>
                <p>{`Options: ${question.options.join(', ')}`}</p>
                <p>{`Correct Answer: ${question.correctAnswer}`}</p>
                <p>{`Topic: ${question.topic}`}</p>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultipleQuestions;
