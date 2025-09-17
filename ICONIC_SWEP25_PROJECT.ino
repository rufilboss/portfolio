#define TRIG_PIN 9    // Ultrasonic sensor trigger pin
#define ECHO_PIN 10   // Ultrasonic sensor echo pin
#define BUZZER 8      // Buzzer pin

long duration;
int distance;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Send ultrasonic pulse
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Read echo time
  duration = pulseIn(ECHO_PIN, HIGH, 30000); // timeout 30ms (~5m range)

  // Convert time to distance (cm)
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  // If object detected within 100cm
  if (distance > 0 && distance <= 100) {
    // Map distance to beep delay: closer → faster beep
    int beepDelay = map(distance, 5, 100, 50, 600);  
    digitalWrite(BUZZER, HIGH);
    delay(50);              // short beep
    digitalWrite(BUZZER, LOW);
    delay(beepDelay);       // pause before next beep
  } else {
    digitalWrite(BUZZER, LOW); // no obstacle → silent
  }
}