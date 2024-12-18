import React, { useState, useEffect } from "react";
import axios from "axios";  // ใช้ axios สำหรับเรียก API
import Navg from "./Navg";
import Graph from "./Graph";
import AvgBox from "./AvgBox";
import "./pt_monitor.css";

const RightSide = () => {
  // กำหนด state สำหรับค่าแต่ละตัว
  const [heartRate, setHeartRate] = useState(100);  // ค่าเริ่มต้นสำหรับ Heart Rate
  const [spo2, setSpo2] = useState(98);  // ค่าเริ่มต้นสำหรับ Spo2

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get-latest-data"); // ใช้ axios ดึงข้อมูลจาก API
        // อัพเดตค่าต่าง ๆ จาก API
        setHeartRate(response.data.bpm);  // ใช้ค่า heartRate ที่รับจาก API
        setSpo2(response.data.spo2);  // ใช้ค่า spo2 ที่รับจาก API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // เรียกใช้ฟังก์ชัน fetchData ทุก ๆ 1 วินาที
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
  }, []);

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
            {/* แสดงค่าจาก state */}
            <span>{heartRate} <sub>BPM</sub></span>
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
            {/* แสดงค่าจาก state */}
            <span>{spo2} <sub>%</sub></span>
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
            {/* ค่า PaO2 กำหนดเป็น 00 เสมอ */}
            <span>00 <sub>mmHg</sub></span>
          </div>
          <p>analysis result</p>
        </div>
      </div>
      {/* ส่วนที่เหลือของคอมโพเนนต์ */}
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

