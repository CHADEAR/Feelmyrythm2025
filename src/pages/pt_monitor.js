import React, { useState } from "react";
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import Container1 from "../components/pt_monitor/Container1";
import RightSide from "../components/pt_monitor/RightSide";
import "../components/pt_monitor/pt_monitor.css";

const PtMonitor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ฟังก์ชันสำหรับสลับธีม
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"} style={{ position: "relative" }}>
      <Navbar />
      <label className="toggle-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <div className="bodycon">
        <Container1 />
        <RightSide />
      </div>
    </div>
  );
};

export default PtMonitor;
