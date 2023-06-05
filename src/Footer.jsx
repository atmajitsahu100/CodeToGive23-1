import React from 'react';
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam blandit aliquet.</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">Email: info@example.com</p>
            <p className="footer-text">Phone: 123-456-7890</p>
            <p className="footer-text">Address: 123, Main Street, City</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-media-icons">
              <a href="#" className="social-icon">
                <FacebookIcon/>
              </a>
              <a href="#" className="social-icon">
                <InstagramIcon/>
              </a>
              <a href="#" className="social-icon">
               <TwitterIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">&copy; 2023 Tiny Miracle Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
