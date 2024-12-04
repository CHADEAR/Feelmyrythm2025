import React from "react";
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import Container1 from "../components/pt_monitor/Container1";
import RightSide from "../components/pt_monitor/RightSide";

const PtMonitor = () => {
  return (
    <>
       <Navbar />
       <div className="bodycon">
         <Container1 />
         <RightSide />
       </div>
    </>
  );
};

export default PtMonitor;
