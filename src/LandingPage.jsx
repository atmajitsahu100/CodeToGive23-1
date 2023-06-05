import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import SlideshowBox from './SlideshowBox';
import OurAchievements from './Achievements';
import OurServices from './OurServices';
import UpcomingSessions from './UpcomingSessions';
const LandingPage = () => {
  return (
    <>
    <div className="landing-page">
      <h1>Tiny Miracles</h1>
      <SlideshowBox/>   
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, quos. Culpa magni architecto iure, repellat blanditiis ullam laudantium, obcaecati asperiores itaque ducimus eum? Voluptate modi repellat voluptatibus a commodi? Fugiat tenetur rerum nulla eius.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sequi exercitationem qui odit obcaecati minima impedit voluptatibus, unde molestiae. Animi!</p>

      <div className="login-options">
    
        <Link to="/AdminLogin" className="login admin-login">Admin Login</Link>
        <Link to="/VolunteerLogin" className="login volunteer-login">Volunteer Login</Link>
      </div>
    </div>
    <OurAchievements/>
    <OurServices/>
    <UpcomingSessions/>
    </>
  );
};

export default LandingPage;
