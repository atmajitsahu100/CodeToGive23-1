import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
const VolunteerLoginLandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Volunteer's Page</h1>
      <div className="login-options">
        <Link to="/Register-User" className="login admin-login">Register User</Link>
        <Link to="/Already-Reg" className="login volunteer-login">Already Registered</Link>
      </div>
    </div>
  );
};

export default VolunteerLoginLandingPage;
