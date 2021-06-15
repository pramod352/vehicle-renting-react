import React from "react";
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top-footer-container">
          
          <div className="Address">
            <h1>Address</h1>
            <p>
              Sarswotikhel-01, Bhaktapur, Nepal.
            </p>
          </div>
          <div className="Contact">
            <h1>Contact Us</h1>
            <p>
              Phone:+977-9868832972<br></br>
              <span>Email:contactus@gmail.com </span>
            </p>
          </div>
          <div className="Aboutus">
            <Link className="link" to = "About">About Us</Link> 
            <p>Vehicle Rental Management System helps in automating all the services like booking, 
           finding the car, collecting the car, returning, accounting, and vehicle management.</p>
          </div>
        </div>
        <div className="bottom-footer-container">
          <div className="Copyright">
            <h4>Ⓒ Vehicle Renting -All Rights Reserved</h4>
          </div>
          <div className="Privacy-policy">
            <h4>Privacy Policy</h4>
          </div>
          <div className="Terms-use">
            <h4>Terms of Use</h4>
          </div>
        </div>
      </div>
    
       <div class="social">
       <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
       <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
       <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
       <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
       </div>
  </div>     
  );
};

export default Footer;