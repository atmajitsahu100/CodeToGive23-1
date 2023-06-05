import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
//import VolunteerPage from './VolunteerPage';
import VolunteerLoginLandingPage from './VolunteerLoginLandingPage';

const VolunteerLoginForm = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [islogin,setlogin] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Volunteer Login:', { Email, password });
     if(Email==='atmajit@gmail.com'){
        setlogin(true);
     }
  };

  return (
    <>
{islogin&&<div>
    <VolunteerLoginLandingPage/>
    </div>}

{!islogin&&<div>
    <div className="admin-login-container">
      <h2>Volunteer Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </div>}
    </>
  );
};

export default VolunteerLoginForm;
