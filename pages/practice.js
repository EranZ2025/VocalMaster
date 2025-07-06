import { useEffect } from 'react';

export default function Practice() {
  useEffect(() => {
    const recordBtn = document.getElementById("recordBtn");
    const stopBtn = document.getElementById("stopBtn");
    const player = document.getElementById("player");
    const status = document.getElementById("status");
    const feedback = document.getElementById("feedback");

    let mediaRecorder;
    let audioChunks = [];

    recordBtn.onclick = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        player.src = audioUrl;

        status.textContent = "Transcribing...";

        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.webm");

        const response = await fetch("/api/transcribe-feedback", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        status.textContent = "Done!";
        feedback.textContent = `Transcript: ${data.transcript} | Feedback: ${data.feedback}`;
      };

      mediaRecorder.start();
      recordBtn.disabled = true;
      stopBtn.disabled = false;
      status.textContent = "Recording...";
    };

    stopBtn.onclick = () => {
      mediaRecorder.stop();
      recordBtn.disabled = false;
      stopBtn.disabled = true;
    };
  }, []);

  return (
    <div>
      <h1>Practice Area</h1>
      <p>Record your voice and receive feedback:</p>

      <button id="recordBtn">Start Recording</button>
      <button id="stopBtn" disabled>Stop Recording</button>
      <br />
      <audio id="player" controls></audio>
      <p id="status"></p>
      <p id="feedback"></p>
      <a href="/">Back to Home</a>
    </div>
  );
}
