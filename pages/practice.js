export default function Practice() {
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
      <a href="/">← Back to Home</a>

      <script dangerouslySetInnerHTML={{ __html: `
        let mediaRecorder;
        let audioChunks = [];

        const recordBtn = document.getElementById("recordBtn");
        const stopBtn = document.getElementById("stopBtn");
        const player = document.getElementById("player");
        const status = document.getElementById("status");
        const feedback = document.getElementById("feedback");

        recordBtn.onclick = async () => {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorder = new MediaRecorder(stream);
          audioChunks = [];

          mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
          mediaRecorder.onstop = async () => {
            const blob = new Blob(audioChunks, { type: "audio/webm" });
            player.src = URL.createObjectURL(blob);
            status.textContent = "Processing...";

            const formData = new FormData();
            formData.append("file", blob, "recording.webm");

            try {
              const response = await fetch("/api/transcribe-feedback", {
                method: "POST",
                body: formData,
              });

              const data = await response.json();
              status.textContent = "";
              feedback.innerHTML = "<strong>Transcript:</strong> " + data.transcript + "<br><strong>Feedback:</strong> " + data.feedback;
            } catch (err) {
              status.textContent = "";
              feedback.textContent = "Error: Could not get feedback.";
              console.error(err);
            }
          };

          mediaRecorder.start();
          recordBtn.disabled = true;
          stopBtn.disabled = false;
        };

        stopBtn.onclick = () => {
          mediaRecorder.stop();
          recordBtn.disabled = false;
          stopBtn.disabled = true;
        };
      ` }} />
    </div>
  );
}
