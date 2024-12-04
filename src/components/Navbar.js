import React from 'react';
import './Navbar.css'; 
import 'boxicons/css/boxicons.min.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mainNav">
      <div className="leftnav">
        <img src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/Logo%20icon%20(1).png?alt=media&token=dab0faf1-4d39-4494-9a52-d898981cccd7" alt="Logo" style={{ width: '38px', height: 'auto' }} />
        <span>Feel my Rhythm</span>
      </div>
      <div className="rightnav">
        <a href="#" className="list-group-item active">Home</a>
        <Link to="/pt-monitor" className="list-group-item">How it Works</Link>
        <Link to="/pt-list" className="list-group-item">list</Link>
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
