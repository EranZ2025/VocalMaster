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

          mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
          mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            player.src = audioUrl;
            status.textContent = "Analyzing...";

            const formData = new FormData();
            formData.append("audio", audioBlob, "recording.wav");

            try {
              const res = await fetch("/api/transcribe-feedback", {
                method: "POST",
                body: formData
              });

              const data = await res.json();
              feedback.textContent = "Feedback: " + data.feedback;
              status.textContent = "Done.";
            } catch (err) {
              feedback.textContent = "Error: Could not get feedback.";
              status.textContent = "";
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
