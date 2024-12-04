import React from "react";
import "./pt_monitor.css";

const Box = ({ title, value, icon, className, valueUnit }) => {
  return (
    <div className={`box ${className}`}>
      <h3>{title}</h3>
      <div className={className}>
        <img src={icon} alt={`${title} Icon`} className={`${title}Pic`} />
        <span>{value} <sub>{valueUnit}</sub></span>
      </div>
      <p>analysis result</p>
    </div>
  );
};

export default Box;
