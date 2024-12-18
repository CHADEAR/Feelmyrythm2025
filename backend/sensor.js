const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // ใช้พอร์ตที่ต่างจาก React app
const cors = require('cors');

app.use(bodyParser.json()); // ให้ Express รู้จักการรับข้อมูล JSON
app.use(cors());

// ตัวแปรสำหรับเก็บข้อมูล BPM และ SPO2
let bpm = 0;
let spo2 = 0;


// API สำหรับรับข้อมูลจาก ESP8266
app.post('/update', (req, res) => {
  const { bpm: newBpm, spo2: newSpo2 } = req.body;

  // บันทึกข้อมูลที่ได้รับใน Console
  console.log(`Received data: BPM = ${newBpm}, SPO2 = ${newSpo2}`);

  if (newBpm && newSpo2) {
    bpm = newBpm;
    spo2 = newSpo2;
    res.status(200).send("Data received successfully");
  } else {
    console.log("Invalid data received");
    res.status(400).send("Invalid data");
  }
});

// API สำหรับให้ React app ดึงข้อมูลล่าสุด
app.get('/get-latest-data', (req, res) => {
  res.json({ bpm, spo2 });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});