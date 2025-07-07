import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Practice() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [feedback, setFeedback] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const isIOS = () => {
    if (typeof window === 'undefined') return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };

  const startRecording = async () => {
    setFeedback('');
    setAudioURL('');
    setRecording(true);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mimeType = isIOS() ? 'audio/mp4' : 'audio/webm';
    const options = { mimeType };

    const mediaRecorder = new MediaRecorder(stream, options);
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(audioChunksRef.current, { type: mimeType });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);

      const formData = new FormData();
      formData.append('audio', blob, `recording.${mimeType.split('/')[1]}`);

      try {
        const res = await fetch('/api/transcribe-feedback', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        setFeedback(data.feedback);

        // ✅ Save feedback in localStorage
        const existing = JSON.parse(localStorage.getItem('vocal_feedbacks') || '[]');
        existing.push({ date: new Date().toLocaleString(), feedback: data.feedback });
        localStorage.setItem('vocal_feedbacks', JSON.stringify(existing));

      } catch (err) {
        setFeedback('Error getting feedback.');
        console.error(err);
      }
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current.stop();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎙️ Practice Area</h1>
      <p>Click <strong>Record</strong>, sing or speak, then click <strong>Stop</strong> to get feedback.</p>

      <button onClick={startRecording} disabled={recording}>🎤 Record</button>{' '}
      <button onClick={stopRecording} disabled={!recording}>⏹ Stop</button>

      {audioURL && (
        <div>
          <h3>▶️ Playback</h3>
          <audio controls src={audioURL} />
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>🧠 Feedback</h3>
        <p>{feedback || 'No feedback yet.'}</p>
      </div>

      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
