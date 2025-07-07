import { useState, useEffect } from 'react';

export default function Record() {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [audioURL, setAudioURL] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleStart = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      setChunks((prev) => [...prev, e.data]);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);

      // Simulate feedback
      const fakeFeedback = 'Your pitch is mostly accurate, but try to relax your jaw for smoother vowels.';
      setFeedback(fakeFeedback);

      // Save to localStorage
      const saved = JSON.parse(localStorage.getItem('vocalProgress') || '[]');
      saved.push({ url, feedback: fakeFeedback });
      localStorage.setItem('vocalProgress', JSON.stringify(saved));
    };

    setChunks([]);
    setMediaRecorder(recorder);
    recorder.start();
  };

  const handleStop = () => {
    mediaRecorder.stop();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎙️ Record Your Practice</h1>
      <p>Use this section to record your exercises or singing practice and get feedback.</p>

      <button onClick={handleStart}>Record</button>
      <button onClick={handleStop} disabled={!mediaRecorder}>Stop</button>

      {audioURL && <audio controls src={audioURL} style={{ display: 'block', marginTop: 10 }} />}

      <p><strong>Feedback:</strong> {feedback || 'No feedback yet.'}</p>
      <p><a href="/">← Back to Home</a></p>
    </div>
  );
}
