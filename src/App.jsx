import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminLogin from './AdminLogin';
import VolunteerLogin from './VolunteerLogin';
import RegisterUser from './RegisterUser';
import VolunteerLoginLandingPage from './VolunteerLoginLandingPage';
import AlreadyRegistered from './AlreadyRegistered';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import AboutUs from './AboutUs'
import './index.css'
import Dashboard from './DashBoard';
import SlideshowBox from './SlideshowBox';
import SlideShow from './SlideShow';
import OurAchievements from './Achievements';
import Footer from './Footer';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
     <Routes>
     <Route path='/' element={<><LandingPage/></>} />
     
      <Route path='AdminLogin' element={<AdminLogin />} />
      <Route path='VolunteerLogin' element={<VolunteerLogin />} />
      <Route path='Volunteer-Page' element={<VolunteerLoginLandingPage/>} />
      <Route path='Register-User' element={<RegisterUser />} />
      <Route path='Already-Reg' element={<AlreadyRegistered />} />
      <Route path='About-Us' element={<AboutUs />} />
      <Route path='dash-board' element={<Dashboard />} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
};
export default App;
