#include <Wire.h>  
#include "MAX30105.h"
#include "heartRate.h"
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

// Wi-Fi Credentials
const char* ssid = "chadearr";
const char* password = "dear1294";

// Server URL
const String serverURL = "http://192.168.187.237:3001/update";

WiFiClient wifiClient; // WiFiClient สำหรับการเชื่อมต่อ

MAX30105 particleSensor;

const byte RATE_SIZE = 4; // Increase this for more averaging. 4 is good.
byte rates[RATE_SIZE]; // Array of heart rates
byte rateSpot = 0;
long lastBeat = 0; // Time at which the last beat occurred

float beatsPerMinute;
int beatAvg;
float spo2 = 99.0; // Initial SpO2 value (set to 99%)

// ค่า IR และ Red สำหรับคำนวณ SpO2
long irValue;
long redValue;

unsigned long previousMillis = 0;
const long interval = 5000;  // 5 seconds

void setup() {
  Serial.begin(115200);
  Serial.println("Initializing...");

  // เชื่อมต่อ Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to Wi-Fi...");
  }
  Serial.println("Connected to Wi-Fi");

  // Initialize MAX30105 sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) {
    Serial.println("MAX30105 was not found. Please check wiring/power.");
    while (1);
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");

  particleSensor.setup();
  particleSensor.setPulseAmplitudeRed(0x0A); 
  particleSensor.setPulseAmplitudeGreen(0);  
}

void loop() {
  irValue = particleSensor.getIR();
  redValue = particleSensor.getRed();

  if (checkForBeat(irValue)) {
    long delta = millis() - lastBeat;
    lastBeat = millis();
    beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20) {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE; 

      beatAvg = 0;
      for (byte x = 0; x < RATE_SIZE; x++)
        beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }

  // คำนวณค่า SpO2 (การคำนวณนี้จะใช้แค่ IR และ Red เป็นพื้นฐาน)
  // ใช้สูตรหรือการวิเคราะห์ทางคณิตศาสตร์เพื่อคำนวณ SpO2 จากค่าที่ได้จากเซ็นเซอร์
  // (ในกรณีนี้ ค่า spo2 ถูกตั้งค่าเริ่มต้นที่ 99% เพื่อทดสอบ)
  spo2 = calculateSpO2(redValue, irValue);  // ฟังก์ชันที่คำนวณ SpO2

  // ส่งข้อมูล BPM และ SpO2 ไปยังเซิร์ฟเวอร์ทุกๆ 5 วินาที
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    if (WiFi.status() == WL_CONNECTED) {
      HTTPClient http;
      http.begin(wifiClient, serverURL);
      http.addHeader("Content-Type", "application/json");

      // สร้าง JSON ข้อมูลที่จะส่ง
      String jsonData = "{\"bpm\": " + String(beatAvg) + ", \"spo2\": " + String(spo2) + "}";

      // ส่ง POST request
      int httpResponseCode = http.POST(jsonData);

      // ตรวจสอบการตอบสนองจากเซิร์ฟเวอร์
      if (httpResponseCode == 200) {
        Serial.println("Data sent successfully");
      } else {
        Serial.print("Failed to send data, HTTP error code: ");
        Serial.println(httpResponseCode);
      }

      http.end();
    }
  }

  // แสดงข้อมูล BPM และ SpO2 ใน Serial Monitor
  Serial.print("IR=");
  Serial.print(irValue);
  Serial.print(", BPM=");
  Serial.print(beatsPerMinute);
  Serial.print(", Avg BPM=");
  Serial.print(beatAvg);
  Serial.print(", SpO2=");
  Serial.print(spo2); // แสดงค่า SpO2 ใน Serial Monitor

  if (irValue < 50000)
    Serial.print(" No finger?");

  Serial.println();
}

// ฟังก์ชันที่คำนวณค่า SpO2 จากค่า Red และ IR
float calculateSpO2(long red, long ir) {
  // ตัวอย่างการคำนวณอัตราส่วน IR และ Red เพื่อคำนวณ SpO2
  float ratio = (float)red / (float)ir;  // การหาค่าอัตราส่วนระหว่าง Red และ IR
  return 99.0 - (ratio * 100);  // ตัวอย่างการคำนวณ SpO2 (สูตรอาจต้องปรับแต่งตามความเหมาะสม)
}
