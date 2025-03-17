import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ลงทะเบียนคอมโพเนนต์ที่ใช้
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  // ใช้ useState เพื่อเก็บข้อมูล BPM
  const [bpm, setBpm] = useState(0);
  const [data, setData] = useState([]);

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-latest-data");
      const result = await response.json();
      setBpm(result.bpm);
      // เก็บข้อมูลใน array เพื่อใช้ในกราฟ
      setData((prevData) => [
        ...prevData,
        { bpm: result.bpm }, // เก็บแค่ค่า bpm เท่านั้น
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ดึงข้อมูลเมื่อ component ถูกโหลด
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // ดึงข้อมูลทุกๆ 5 วินาที
    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกลบ
  }, []);

  // ข้อมูลสำหรับกราฟ (แสดงแค่ค่า BPM)
  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => `Data ${i + 1}`), // เลขข้อมูลเป็น labels
    datasets: [
      {
        label: "BPM",
        data: data.map((entry) => entry.bpm),
        fill: false,
        borderColor: "rgb(192, 75, 75)",
        tension: 0.4, // เพิ่มความโค้งให้กราฟดูเหมือนคลื่น
        pointRadius: 0, // ปิดการแสดงจุด
        borderDash: [], // ใช้เส้นตรง
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Heart Rate Graph (BPM)", // ชื่อกราฟ
      },
    },
  };

  return (
    <div className="con3_graph">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Graph;
