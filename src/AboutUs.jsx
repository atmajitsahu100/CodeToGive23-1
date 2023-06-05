import React from 'react';
import './AboutUs.css'
const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-description">
        The Tiny Miracle Foundation is dedicated to improving the lives of children in need around the world.
        We believe that every child deserves love, care, and the opportunity to thrive.
        Our mission is to provide support, education, and resources to underprivileged children, empowering them to
        break the cycle of poverty and build a brighter future.
      </p>
      <p className="about-us-description">
        Since our establishment in 2010, we have been working tirelessly to make a positive impact in communities
        through various initiatives, including healthcare, education, and social development programs.
        We collaborate with local partners, volunteers, and donors to maximize our reach and effectiveness.
      </p>
      <p className="about-us-description">
        Join us in making a difference and giving these children the chance they deserve.
        Together, we can create a world where every child's potential can be realized, regardless of their circumstances.
      </p>
      <div className="about-us-image-container">
        <img src="./assets/images/about-us.jpg" alt="About Us" className="about-us-image" />
      </div>
    </div>
  );
};

export default AboutUsPage;
