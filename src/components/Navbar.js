import React, { useState } from 'react';
import './Navbar.css'; 
import 'boxicons/css/boxicons.min.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // ฟังก์ชันที่ใช้ในการสลับสถานะของเมนู
  const toggleMenu = () => {
    setIsMenuActive(prevState => !prevState);
  };

  return (
    <div className="nav">
      <div className="left_Navitem">
        <div className="Nav_logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/Logo%20icon%20(1).png?alt=media&token=dab0faf1-4d39-4494-9a52-d898981cccd7"
            className="logo"
            alt="Logo"
          />
        </div>
        <div className="Nav_tx">
          <p>Feel&ensp;My&ensp;Rythm</p>
        </div>
      </div>
      <div className="right_Nav">
        <div className="menu_list">
          <ul className={isMenuActive ? 'active' : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/monitor">Monitor</Link></li>
            <li><Link to="/user-doctor">Login</Link></li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
