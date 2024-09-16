import React from 'react';
import './Navbar.css'; 
import 'boxicons/css/boxicons.min.css'; 

const Navbar = () => {
  return (
    <nav>
      <div className="leftnav">
        <img src="../pic/Logo.png" alt="Logo" style={{ width: '38px', height: 'auto' }} />
        <span>Feel my Rhythm</span>
      </div>
      <div className="rightnav">
        <a href="#" className="list-group-item active">Home</a>
        <a href="#" className="list-group-item">How it Works</a>
        <a href="#" className="list-group-item">Contact Us</a>
        <div className="signin-login">
          <a href="#"><i className='bx bxs-user'></i></a>
          <a href="#"><span>Sign in</span></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
