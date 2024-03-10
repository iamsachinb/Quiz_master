// StudentMarks.js

import React from 'react';

const StudentMarks = ({ studentMarksData }) => {
  return (
    <div>
      <h2>Student Marks</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Test Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentMarksData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.studentName}</td>
              <td>{entry.testName}</td>
              <td>{entry.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
