// /pages/practice.js

import { useEffect } from "react";

export default function Practice() {
  useEffect(() => {
    const recordBtn = document.getElementById("recordBtn");
    const stopBtn = document.getElementById("stopBtn");
    const player = document.getElementById("player");
    const status = document.getElementById("status");
    const feedback = document.getElementById("feedback");

    let mediaRecorder;
    let audioChunks = [];

    if (recordBtn) {
      recordBtn.onclick = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          player.src = audioUrl;

          const formData = new FormData();
          formData.append("audio", audioBlob, "recording.wav");

          try {
            const response = await fetch("/api/transcribe-feedback", {
              method: "POST",
              body: formData,
            });

            const data = await response.json();
            feedback.textContent = `Transcript: ${data.transcript}\nFeedback: ${data.feedback}`;
          } catch (error) {
            feedback.textContent = "Error: Could not get feedback.";
          }
        };

        mediaRecorder.start();
        recordBtn.disabled = true;
        stopBtn.disabled = false;
        status.textContent = "Recording...";
      };
    }

    if (stopBtn) {
      stopBtn.onclick = () => {
        mediaRecorder.stop();
        recordBtn.disabled = false;
        stopBtn.disabled = true;
        status.textContent = "Recording stopped.";
      };
    }
  }, []);

  return (
    <div>
      <h1>Practice Area</h1>
      <p>Record your voice and receive feedback:</p>
      <button id="recordBtn">Start Recording</button>
      <button id="stopBtn" disabled>Stop Recording</button>
      <br />
      <audio id="player" controls />
      <p id="status"></p>
      <p id="feedback"></p>
      <a href="/">← Back to Home</a>
    </div>
  );
}
