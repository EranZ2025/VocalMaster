import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Progress() {
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vocal_feedbacks') || '[]');
    setFeedbackHistory(stored);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Your Vocal Progress</h1>
      <p>All your past practice feedbacks appear below:</p>

      {feedbackHistory.length === 0 ? (
        <p>No practice feedback recorded yet.</p>
      ) : (
        <ul>
          {feedbackHistory.map((entry, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{entry.date}:</strong><br />
              {entry.feedback}
            </li>
          ))}
        </ul>
      )}

      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
