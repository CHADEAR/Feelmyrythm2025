import React from 'react';
import './FeaturesSection.css'; 

const FeaturesSection = () => {
  return (
    <div className="container31">
      <div className="left-con3">
        <h1>FEATURES</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Animi corporis debitis rem. Odit, id voluptatibus! <br />
          Nulla ab aliquid reiciendis?!
        </span>
      </div>
      <div className="right-con3">
        <div className="box-con3">
          <div className="img-box-con3 pic1">
            <img src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/1.png?alt=media&token=7a440d13-888c-4c10-9114-0bc706411f7e" style={{ width: '170px', height: 'auto' }} alt="Feature 1" />
          </div>
          <span>Monitor & Analysis</span>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.<br />Integer nec odio.</p>
        </div>
        <div className="box-con3">
          <div className="img-box-con3">
            <img src="https://firebasestorage.googleapis.com/v0/b/feelmyrythm-c4796.appspot.com/o/2.png?alt=media&token=590aa0a6-06ac-4b35-b477-1e28256424f3" style={{ width: '180px', height: 'auto' }} alt="Feature 2" />
          </div>
          <span>Monitor & Analysis</span>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.<br />Integer nec odio.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
