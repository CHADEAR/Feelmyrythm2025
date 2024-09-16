import React from 'react';
import './HowItWorksSection.css'; 

const HowItWorksSection = () => {
  return (
    <div className="con4">
      <h1 className="how-tx">HOW IT'S WORK?</h1>
      <div className="top-con4">
        <div className="gd2">
          {/* Content for GD2 */}
        </div>
        <div className="gd1">
          <embed
            width="480"
            height="260"
            src="https://www.youtube.com/embed/pYn96ujbJX0?si=DOOneRroxBUvUAaU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></embed>
        </div>
      </div>
      <div className="bot-con4">
        <div className="gd1">
          <embed
            width="480"
            height="260"
            src="https://www.youtube.com/embed/pYn96ujbJX0?si=DOOneRroxBUvUAaU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></embed>
        </div>
        <div className="gd2">
          {/* Content for GD2 */}
        </div>
      </div>
    </div>
    
};

export default HowItWorksSection;
