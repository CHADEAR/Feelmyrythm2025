import React from "react";
import Navbar from "../components/Navbar";
import "./homepage2.css";

const HomePagee = () => {
  
  return (
    <div>
      <Navbar />
      <div className="con1_homept">
        <i className="fi fi-rr-square-right"></i>
        <div className="hdtx_homept">
          <p className="hdtx_p1">YOU HEAR HEALTH <br /> IS OUR PRIORITY</p>
          <p className="hdtx_p2">
            Monitor Your Heart Rate for Health <br /> Checkups, Anytime Anywhere
          </p>
        </div>
        <div className="hdpic_hometx">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/headpic.jpg?alt=media&token=67cabd6a-518e-4977-9f49-a1b16661557a"
            className="headPic"
            alt="Header"
          />
        </div>
      </div>
      <div className="con2_banner_homept">
        <div className="bpmbox_banner box_banner">
          <p className="banner_dt">Monitor Your Heart Rate, <br /> Oxygen Saturation <br />and Blood Pressure </p>
        </div>
        <div className="soundbox_banner box_banner">
          <p className="banner_dt">Help Doctor diagnose <br /> by Heart Sound <br />using Audio Classifiacation</p>
        </div>
        <div className="analybox_banner box_banner">
          <p className="banner_dt">Analysis Heart Sound<br /> in 3 categories :<br />Normal, Murmur and Stenosis</p>
        </div>
      </div>
      <div className="con3_features_homept">
        <div className="featurestx">
          <h3>FEATURES</h3>
          <p>The key feature of our product is the ability to listen to <br />heartbeats and transmit relevant data to the monitor.</p>
        </div>
        <div className="featureslist">
          <div className="list1 boxlist">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/1.png?alt=media&token=7a440d13-888c-4c10-9114-0bc706411f7e"
              alt="Feature 1"
            />
            <div className="txlist">
              <span>Monitor</span>
              <p>displaying the  measurements of the body's basic functions before diagnosis, such as heart rate (BPM), oxygen saturation(SPO2) and blood pressure. </p>
            </div>
          </div>
          <div className="list2 boxlist">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/2.png?alt=media&token=590aa0a6-06ac-4b35-b477-1e28256424f3"
              alt="Feature 2"
            />
            <div className="txlist">
              <span>Sound Analytics</span>
              <p>helping doctor diagnose heart disease in 3 categories : Normal, Murmur and Stenosis by using audio classification on edge impulse</p>
            </div>
          </div>
        </div>
      </div>
      <div className="con4_howitw_homept">
        <div className="howtx">
          <h3>HOW ITS WORK ?</h3>
          An electronic stethoscope circuit for listening to heartbeats in order<br /> to 
           process and determine whether there are any irregularities  <br />in the heart's rhythm. 
           It can record the sounds and use AI <br /> to detect abnormal heart sounds, such as murmurs.
        </div>
        <div className="vdo_howitw">
          <iframe
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/heart-s.mp4?alt=media&token=d5d0391c-13b5-42ea-be83-b54e8645f074"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="con5_contact_homept">
        <h2>Contact Information</h2>
        <div className="contact-box">
          <div className="contact-box-item">
            <i className="bx bx-envelope" style={{ color: "#393a3a" }}></i>
            <br />
            <span>Email<br />65010204@kmitl.ac.th</span>
          </div>
          <div className="contact-box-item">
            <i className="bx bxs-phone" style={{ color: "#393a3a" }}></i>
            <br />
            <span>Phone<br />082292xxxx</span>
          </div>
          <div className="contact-box-item">
            <i className="bx bxs-map" style={{ color: "#393a3a" }}></i>
            <br />
            <span>Location<br />KMITL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagee;
