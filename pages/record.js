import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Record() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [feedback, setFeedback] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    setFeedback('');
    setAudioURL('');
    setRecording(true);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mimeType = /iPhone|iPad|iPod/.test(navigator.userAgent) ? 'audio/mp4' : 'audio/webm';
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

        // Save to localStorage
        const entry = {
          url,
          feedback: data.feedback,
          timestamp: Date.now(),
        };

        const existing = JSON.parse(localStorage.getItem('vocalProgress') || '[]');
        existing.unshift(entry);
        localStorage.setItem('vocalProgress', JSON.stringify(existing));
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
    <div>
      <h1>🎙️ Record Your Practice</h1>
      <p>Use this section to record your exercises or singing practice and get feedback.</p>
      <button onClick={startRecording} disabled={recording}>Record</button>
      <button onClick={stopRecording} disabled={!recording}>Stop</button>
      {audioURL && <audio controls src={audioURL} />}
      <p><strong>Feedback:</strong> {feedback || 'No feedback yet.'}</p>
      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
