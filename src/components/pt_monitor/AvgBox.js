import React, { useEffect } from "react";
import "./pt_monitor.css";

const AvgBox = () => {
  useEffect(() => {
    const percent = 95;
    const progress = document.querySelector('.circle-progress');
    progress.style.strokeDasharray = `${percent}, 100`; 
    document.querySelector('.circle-text').textContent = `${percent}%`; 
  }, []); 

  return (
    <div className="con3_avg">
      <div className="avgBoxhr">
        <h4>
          avg&ensp;<span>Heart&ensp;Rate</span>
        </h4>
        <p>90<sub>bpm</sub></p>
        <div className="statusHr">
          <div className="circle"></div>
          &ensp;<h5>Normal average rate</h5>
        </div>
      </div>

      <div className="avgBoxSpo2">
        <div className="leftspo2">
          <h4>avg</h4>
          <span>Spo2</span>
        </div>
        <div className="circle-container">
          <svg className="progress-circle" viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
            ></path>
            <path
              className="circle-progress"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              strokeDasharray="95, 100" // ใช้ค่าเริ่มต้น 95%
            ></path>
          </svg>
          <div className="circle-text">95%</div> {/* แสดงเปอร์เซ็นต์ที่ 95% */}
        </div>
      </div>
    </div>
  );
};

export default AvgBox;
