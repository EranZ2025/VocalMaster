import { useEffect } from 'react';

export default function Practice() {
  useEffect(() => {
    let mediaRecorder;
    let audioChunks = [];

    const recordBtn = document.getElementById("recordBtn");
    const stopBtn = document.getElementById("stopBtn");
    const player = document.getElementById("player");
    const status = document.getElementById("status");
    const feedback = document.getElementById("feedback");

    if (recordBtn && stopBtn && player && status && feedback) {
      recordBtn.onclick = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
        mediaRecorder.onstop = async () => {
          const blob = new Blob(audioChunks, { type: "audio/wav" });
          player.src = URL.createObjectURL(blob);
          status.textContent = "Processing...";

          const response = await fetch("/api/transcribe-feedback", {
            method: "POST",
            body: blob,
          });

          const result = await response.json();
          feedback.textContent = result.text || "No feedback.";
          status.textContent = "";
        };

        mediaRecorder.start();
        status.textContent = "Recording...";
      };

      stopBtn.onclick = () => {
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
          status.textContent = "Stopped.";
        }
      };
    }
  }, []);

  return (
    <div>
      <h1>Practice Area</h1>
      <button id="recordBtn">Record</button>
      <button id="stopBtn">Stop</button>
      <br />
      <audio id="player" controls></audio>
      <p id="status"></p>
      <p><strong>Feedback:</strong> <span id="feedback"></span></p>
      <p><a href="/">← Back to Home</a></p>
    </div>
  );
}
