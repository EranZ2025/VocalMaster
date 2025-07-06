import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Practice() {
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
    let options = { mimeType: 'audio/mp4' };

    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options = { mimeType: 'audio/webm' };
    }

    const mediaRecorder = new MediaRecorder(stream, options);
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);

      const formData = new FormData();
      formData.append('audio', blob, 'recording.mp4');

      try {
        const res = await fetch('/api/transcribe-feedback', {
          method: 'POST',
          body: formData
        });

        const data = await res.json();
        setFeedback(data.feedback);
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
    mediaRecorderRef.current?.stop();
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Practice Area</h1>
      <button onClick={startRecording} disabled={recording}>Record</button>
      <button onClick={stopRecording} disabled={!recording}>Stop</button>
      <div style={{ margin: '1rem 0' }}>
        {audioURL && <audio controls src={audioURL} />}
      </div>
      <div>
        <strong>Feedback:</strong> {feedback || 'No feedback.'}
      </div>
      <br />
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
