import React from "react";
import"./pt_monitor.css";

const Infor = () => {
  return (
    <div className="infor">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/user%20information%20icon.webp?alt=media&token=b9b06d1e-29cb-4ea1-b75b-75d9cd4befe4"
        className="userPic"
        alt="User"
      />
      <p>ชัชชญา สุวรรณจินดา</p>
      <p>Female&ensp;&ensp;Age&ensp;:&ensp; 20</p>
      <div className="feedtx">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/record%20icon.png?alt=media&token=3e2a2a48-bd16-4b62-8f9d-6e070dd30185"
          className="feedbk"
          alt="Feedback Icon"
        />
        <span>Feedback</span>
      </div>
      <div className="feedbox"></div>
    </div>
  );
};

export default Infor;
