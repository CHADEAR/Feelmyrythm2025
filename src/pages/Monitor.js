import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./monitor.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Monitorr = () => {
  const [heartRate, setHeartRate] = useState(100);
  const [spo2, setSpo2] = useState(98);
  const [heartRateData, setHeartRateData] = useState([]);
  const [sys, setSys] = useState(0);
  const [dia, setDia] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get-latest-data");
  
        // Update heartRate and spo2 as normal
        setHeartRate(response.data.bpm);
        setSpo2(response.data.spo2);
  
        // Check if the new sys or dia value is non-zero before updating
        setSys(prevSys => response.data.sys !== 0 ? response.data.sys : prevSys);
        setDia(prevDia => response.data.dia !== 0 ? response.data.dia : prevDia);
  
        // Update heart rate data for chart
        setHeartRateData(prevData => {
          const newData = [...prevData, response.data.bpm];
          if (newData.length > 500) {
            newData.shift();
          }
          return newData;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const circleColor = heartRate > 50 ? "red" : "green";
  const statusText = heartRate > 50 ? "Dangerous" : "Normal";

  const strokeDasharray = 2 * Math.PI * 16;
  const strokeDashoffset = strokeDasharray * (1 - (spo2 / 100));

  const chartData = {
    labels: heartRateData.map((_, index) => index + 1),
    datasets: [
      {
        label: "Heart Rate (BPM)",
        data: heartRateData,
        borderColor: 'red',
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: true,
        borderWidth: 2,
        tension: 0.8,
        pointRadius: 0,
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="con1_monitor">
        <div className="leftside_monitor">
          <div className="infor_monitor">
            <div className="infor_tx">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/user%20information%20icon.webp?alt=media&token=b9b06d1e-29cb-4ea1-b75b-75d9cd4befe4"
                className="infor_pic"
                alt="user info"
              />
              <span>information</span>
              <span>Chatchaya Suwanchinda</span>
              <span>Female &ensp; &ensp; Age : 21</span>
            </div>
            <div className="feed_box">
              <div className="feed_tx">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/record%20icon.png?alt=media&token=3e2a2a48-bd16-4b62-8f9d-6e070dd30185"
                  className="feed_tx_img"
                  alt="feedback"
                />
                <span>Feedback</span>
              </div>
              <div className="feedbox_box"></div>
            </div>
          </div>
          <div className="rec_monitor">
            <div className="rec_tx">
              <i className="bx bxs-folder-open"></i>
              <span>Record</span>
            </div>
            <div className="rec_box">   
            <img
                  src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/QR.png?alt=media&token=9ec0ad6b-a395-4c4b-8820-1b8dab37cd61"
                  className="QR_img"
                  alt="QR code"
                />         
            </div>
            
        </div>
        </div>

        <div className="rightside_monitor">
          <div className="bpm_con">
            <div className="bpm_box box box1">
              <h4>Heart Rate</h4>
              <div className="bpm_rate box_itemm">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/heart%20rate%20icon.png?alt=media&token=c178e3cf-9260-4d65-b27d-6f77de1d88fb"
                  alt="heart rate"
                />
                <span>{heartRate} <sub>BPM</sub></span>
              </div>
              <p>analysis result</p>
            </div>

            <div className="spo2_box box box2">
              <h4>spo2</h4>
              <div className="spo2_rate">
                <div className="spo2_rate box_itemm">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/SpO2%20icon.png?alt=media&token=84b2634e-80ff-4d24-b86d-55260add2983"
                    alt="spo2"
                  />
                  <span>{spo2} <sub>%</sub></span>
                </div>
              </div>
              <p>analysis result</p>
            </div>

            <div className="Pao2_box box box3">
              <h4>SYS & DIA</h4>
              <div className="Pao2_rate">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/PaO2%20icon.png?alt=media&token=88d4726c-5dfa-4d40-aacb-0d70288e23ea"
                  alt="Pao2"
                />
                <span>{sys} <sub>mmHg</sub></span>
                <br />
                <span className="mmhg2">{dia} <sub>mmHg</sub></span>
              </div>
              <p>analysis result</p>
            </div>
          </div>
          <div className="heartrate_gp_con">
            <div className="gp_box">
                <div className="gp_box_bpm">
                  {/* ใช้ Component Line จาก react-chartjs-2 */}
                  <Line 
                    data={chartData} 
                    options={{
                      responsive: true,
                      plugins: {
                        title: {
                          display: true,
                          text: 'Heart Rate BPM',
                        },
                      },
                    }} 
                  />
                </div>
           </div>

            <div className="avg_box">
              <div className="avgBoxhr">
                <h4>
                  avg&ensp;<span>Heart&ensp;Rate</span>
                </h4>
                <p>{heartRate}<sub>bpm</sub></p>
                <div className="statusHr">
                  <div className={`circle ${circleColor}`}></div> {/* ใช้คลาสเพื่อตั้งสี */}
                  &ensp;<h5>{statusText}</h5> {/* เปลี่ยนข้อความเป็น "Dangerous" */}
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
                      style={{
                        strokeDasharray: strokeDasharray,
                        strokeDashoffset: strokeDashoffset,
                      }}
                    ></path>
                  </svg>
                  <div className="circle-text">{spo2} %</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
     </div>
     
  );
};

export default Monitorr;
