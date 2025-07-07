import { useEffect, useState } from 'react';

export default function Progress() {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vocalProgress') || '[]');
    setRecordings(data);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📈 Your Vocal Progress</h1>
      <p>All your past practice feedbacks appear below:</p>

      {recordings.length === 0 ? (
        <p>No practice feedback recorded yet.</p>
      ) : (
        recordings.map((item, index) => (
          <div key={index} style={{ marginBottom: 20 }}>
            <audio controls src={item.url} />
            <p><strong>Feedback:</strong> {item.feedback}</p>
          </div>
        ))
      )}

      <p><a href="/">← Back to Home</a></p>
    </div>
  );
}
