// pages/progress.js

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Progress() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Load saved journal entries from localStorage
    const savedJournal = JSON.parse(localStorage.getItem('vocal_journal')) || [];
    const savedFeedback = JSON.parse(localStorage.getItem('vocal_feedbacks')) || [];
    setJournalEntries(savedJournal);
    setFeedbacks(savedFeedback);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📊 Progress</h1>

      <section>
        <h2>📝 Practice Journal</h2>
        {journalEntries.length === 0 ? (
          <p>No journal entries yet.</p>
        ) : (
          <ul>
            {journalEntries.map((entry, index) => (
              <li key={index}>
                <strong>{entry.date}</strong>: {entry.text}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>🎧 Feedback History</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback history yet.</p>
        ) : (
          <ul>
            {feedbacks.map((item, index) => (
              <li key={index}>
                <strong>{item.date}</strong>: {item.feedback}
              </li>
            ))}
          </ul>
        )}
      </section>

      <p style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  );
}
