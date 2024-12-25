import React, { useState, useEffect } from "react";
import axios from "axios"; // ใช้ axios สำหรับเรียก API
import "./pt_monitor.css";

const AvgBox = () => {
  const [bpm, setBpm] = useState(0);
  const [spo2, setSpo2] = useState(95);

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/get-latest-data"); // URL ของ API
      setBpm(response.data.bpm);  // อัพเดตค่า bpm
      setSpo2(response.data.spo2);  // อัพเดตค่า spo2
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // ดึงข้อมูลทุกๆ 1 วินาที
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000); // ดึงข้อมูลใหม่ทุกๆ 1 วินาที
    return () => clearInterval(interval); // ทำการลบ interval เมื่อ component ถูก unmount
  }, []);

  // คำนวณ strokeDasharray ตามค่า SPO2
  const spo2Percentage = (spo2 / 100) * 100;

  return (
    <div className="con3_avg">
      <div className="avgBoxhr">
        <h4>
          avg&ensp;<span>Heart&ensp;Rate</span>
        </h4>
        <p>{bpm}<sub>bpm</sub></p>
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
              strokeDasharray={`${spo2Percentage}, 100`} // ใช้ค่า SPO2
            ></path>
          </svg>
          <div className="circle-text">{spo2}%</div> {/* แสดงเปอร์เซ็นต์ SPO2 */}
        </div>
      </div>
    </div>
  );
};

export default AvgBox;
