import React from "react";
import Navbar from "../components/Navbar";
import "./monitor.css";

const Monitorr = () => {
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
          <div className="rec_box"></div>
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
              <span>100 <sub>BPM</sub></span>
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
                <span>98 <sub>%</sub></span>
              </div>
            </div>
            <p>analysis result</p>
          </div>

          <div className="Pao2_box box box3">
            <h4>Pao2</h4>
            <div className="Pao2_rate">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/PaO2%20icon.png?alt=media&token=88d4726c-5dfa-4d40-aacb-0d70288e23ea"
                alt="Pao2"
              />
              <span>120/80 <sub>mmHg</sub></span>
              <br />
              <span className="mmhg2">100/80 <sub>mmHg</sub></span>
            </div>
            <p>analysis result</p>
          </div>
        </div>
        <div className="heartrate_gp_con">
          <div className="gp_box">
            <div className="gp_box_bpm">
              <canvas id="heartRateChart"></canvas>
            </div>
          </div>

          <div className="avg_box">
            <div className="avgBoxhr">
              <h4>
                avg&ensp;<span>Heart&ensp;Rate</span>
              </h4>
              <p>50<sub>bpm</sub></p>
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
                  ></path>
                </svg>
                <div className="circle-text">98 %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
  </div>
);
};

export default Monitorr;