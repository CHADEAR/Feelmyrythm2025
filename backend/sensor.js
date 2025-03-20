const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // ใช้พอร์ตที่ต่างจาก React app
const cors = require('cors');

app.use(bodyParser.json()); // ให้ Express รู้จักการรับข้อมูล JSON
app.use(cors());

// ตัวแปรสำหรับเก็บข้อมูล BPM, SPO2, SYS และ DIA
let bpm = 0;
let spo2 = 0;
let sys = 0;
let dia = 0;

// API สำหรับรับข้อมูลจาก ESP8266
app.post('/update', (req, res) => {
  const { bpm: newBpm, spo2: newSpo2, sys: newSys, dia: newDia } = req.body;

  console.log(`Received data: BPM = ${newBpm}, SPO2 = ${newSpo2}, SYS = ${newSys}, DIA = ${newDia}`);

  // อัปเดตเฉพาะค่าที่ส่งมา
  if (newBpm !== undefined) bpm = newBpm;
  if (newSpo2 !== undefined) spo2 = newSpo2;
  if (newSys !== undefined) sys = newSys;
  if (newDia !== undefined) dia = newDia;

  res.status(200).send("Data received successfully");
});


// API สำหรับให้ React app ดึงข้อมูลล่าสุด
app.get('/get-latest-data', (req, res) => {
  res.json({ bpm, spo2, sys, dia });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
