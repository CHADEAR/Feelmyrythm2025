import React from "react";
import Box from "./Box";
import Navg from "./Navg";
import Graph from "./Graph";
import AvgBox from "./AvgBox";
import "./pt_monitor.css";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="container2">
        <div className="box box1">
          <h3>Heart Rate</h3>
          <div className="showrate">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/heart%20rate%20icon.png?alt=media&token=c178e3cf-9260-4d65-b27d-6f77de1d88fb" 
              className="hrPic" 
            />
            <span>100 <sub>BPM</sub></span>
          </div>
          <p>analysis result</p>
        </div>
        <div className="box box2">
          <h3>Spo2</h3>
          <div className="showperc">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/SpO2%20icon.png?alt=media&token=84b2634e-80ff-4d24-b86d-55260add2983" 
              className="spo2Pic" 
            />
            <span>98 <sub>%</sub></span>
          </div>
          <p>analysis result</p>
        </div>
        <div className="box box3">
          <h3>PaO2</h3>
          <div className="showmmHg">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/PaO2%20icon.png?alt=media&token=88d4726c-5dfa-4d40-aacb-0d70288e23ea" 
              className="Pa02Pic" 
            />
            <span>97 <sub>mmHg</sub></span>
          </div>
          <p>analysis result</p>
        </div>
      </div>
      <div className="container3">
        <Navg />
        <div className="bottomside">
          <Graph />
          <AvgBox />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
