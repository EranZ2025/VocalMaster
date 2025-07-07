import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Progress() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vocalProgress') || '[]');
    setEntries(data);
  }, []);

  return (
    <div>
      <h1>📈 Your Vocal Progress</h1>
      <p>All your past practice feedbacks appear below:</p>

      {entries.length === 0 ? (
        <p>No practice feedback recorded yet.</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <audio controls src={entry.url} />
            <p><strong>Feedback:</strong> {entry.feedback}</p>
          </div>
        ))
      )}

      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
