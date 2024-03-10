// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Quiz from './components/QuizAttend';
import questionsData from './questions.json';
import QuizQuestion from './components/QuizQuestion';
import MultipleQuestions from './components/MultipleQuestions';
import GenerateQuestion from './components/GenerateQuestion';
// import Login from './Login';
import { AuthProvider } from './AuthContext';
import StudentMarks from './components/StudentMarks';
import ApiCall from './ApiCall';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
const App = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [excelQuestions, setExcelQuestions] = useState([]);
  const studentMarksData = [
    { studentName: 'John Doe', testName: 'Test 1', marks: 85 },
    { studentName: 'Jane Doe', testName: 'Test 1', marks: 92 },
    // Add more entries as needed
  ];
  const handleQuizQuestionSubmit = (question) => {
    setQuizQuestions([...quizQuestions, question]);
  };

  const handleExcelQuestionsExtracted = (questions) => {
    setExcelQuestions(questions);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
      <h1>auth0 login</h1>
      {/* {error && <p>authentication error</p>}
      {!error && isLoading && <p>Loading....</p>} */}
      {/* <LoginButton/> */}
      <LogoutButton/>
      <Profile/>
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route
            path="/generate"
            element={<GenerateQuestion topics={[...quizQuestions.map((q) => q.topic), ...excelQuestions.map((q) => q.topic)]} />}
          />
          <Route path="/attend" element={ <Quiz questions={questionsData} />}/>
          <Route path="/api" element = {<ApiCall/>}/>
          <Route path="/multiple" element={<MultipleQuestions onQuestionsExtracted={handleExcelQuestionsExtracted} />} />
          <Route path="/single" element={<QuizQuestion onQuestionSubmitted={handleQuizQuestionSubmit} />} />
          <Route path="/" element={<LoginButton/>} />
          <Route path="/studentmarks" element={ <StudentMarks studentMarksData={studentMarksData} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
