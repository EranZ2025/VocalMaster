import { useState, useRef } from 'react';

export default function Practice() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [feedback, setFeedback] = useState('No feedback.');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);

      // OPTIONAL: send the audioBlob to your API here
      fetch('/api/transcribe-feedback')
        .then(res => res.json())
        .then(data => setFeedback(data.feedback))
        .catch(() => setFeedback("Error fetching feedback."));
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div>
      <h1>Practice Area</h1>
      <button onClick={startRecording} disabled={recording}>Record</button>
      <button onClick={stopRecording} disabled={!recording}>Stop</button>
      {audioURL && <audio controls src={audioURL} />}
      <p><strong>Feedback:</strong> {feedback}</p>
      <a href="/">← Back to Home</a>
    </div>
  );
}
