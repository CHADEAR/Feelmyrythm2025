import React from 'react';
import './ContactSection.css'; 
const ContactSection = () => {
  return (
    <div className="con5">
      <h2>Contact Information</h2>
      <div className="contact-box">
        <div className="contact-box-item">
          <i className='bx bx-envelope' style={{ color: '#393a3a' }}></i><br />
          <span>Lorem ipsum dolor<br />sit amet consectetur</span>
        </div>
        <div className="contact-box-item">
          <i className='bx bxs-phone' style={{ color: '#393a3a' }}></i><br />
          <span>Lorem ipsum dolor<br />sit amet consectetur</span>
        </div>
        <div className="contact-box-item">
          <i className='bx bxs-map' style={{ color: '#393a3a' }}></i><br />
          <span>Lorem ipsum dolor<br />sit amet consectetur</span>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default ContactSection;
