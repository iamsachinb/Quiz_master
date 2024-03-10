import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "./mainpage.css"

const MainPage = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  // const confirmLogout = () => {
  //   // Perform logout actions here
  //   console.log('Logout confirmed');
  //   navigate('/');
  //   // Reset the confirmation state
  //   setShowLogoutConfirmation(false);
  // };

  const { user } = useAuth();

  // const cancelLogout = () => {
  //   // Cancel logout
  //   setShowLogoutConfirmation(false);
  // };

  return (
    <div className="container">
      <div className="header">
              <p>welcome user</p>
              <h1>Main Page</h1>
      </div>

      <div className="button-container">
        <Link to="/generate">
          <button>Generate Questions</button>
        </Link>
        <Link to="/multiple">
          <button>Upload Multiple Questions</button>
        </Link>
        <Link to="/single">
          <button>Upload Single Question</button>
        </Link>
        <Link to="/studentmarks">
          <button>View Student Marks</button>
        </Link>
        {/* <button className="logout-button" onClick={handleLogout}>
          Logout
        </button> */}
      </div>

      {/* Logout confirmation dialog */}
      {/* {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <p>Are you sure you want to sign out?</p>
          <button onClick={confirmLogout}>Yes</button>
          <button onClick={cancelLogout}>No</button>
        </div>
      )} */}
    </div>
  );

};

export default MainPage;
