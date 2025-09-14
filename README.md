# Feel My Rythm  

Feel My Rythm is an IoT project designed for displaying measurements of the body’s basic functions before diagnosis, such as:  
- Heart Rate (BPM)  
- Oxygen Saturation (SpO₂)  
- Blood Pressure  

The system helps doctors diagnose heart disease in three categories:  
1. Normal 
2. Murmur 
3. Stenosis  

This is achieved by applying audio classification on AI Edge Impulse.  

---

## IoT Device  
The IoT device serves as a measuring instrument equipped with a speaker.  
- Enhances audibility of heart sounds  
- Records sounds for further AI-based analysis  

---

## How to Run the Project  

### Frontend  
1. Install dependencies:  
   npm install
2.run project
   npm start

### backend
Backend (IoT Device & Sensor)
1. Power on the IoT device
2. Run the sensor script:
  node sensor.js

