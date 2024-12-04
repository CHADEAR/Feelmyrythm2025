import React from "react";
import"./pt_monitor.css";

const Navg = () => {
  return (
    <nav className="navg">
      <div className="leftnav">
        <span>Resting Heart Rate</span>
      </div>
      <ul className="rightnav">
        <li>day</li>
        <li>week</li>
        <li>month</li>
        <li>3month</li>
        <li>year</li>
      </ul>
    </nav>
  );
};

export default Navg;
