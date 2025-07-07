import Link from 'next/link';

export default function Progress() {
  const sampleSessions = [
    { date: '2025-07-05', feedback: 'Great breath control, work on vowel clarity.' },
    { date: '2025-07-03', feedback: 'Support was strong, but pitch drifted at the end.' },
    { date: '2025-07-01', feedback: 'Excellent focus and tone. Keep it up!' },
  ];

  const journalNotes = `Reflections:
- Feeling more comfortable with high notes.
- Need to be more consistent with daily warmups.
- Try incorporating bodywork before long sessions.`;

  return (
    <div>
      <h1>📈 Your Vocal Progress</h1>
      <p>Track your past sessions and reflect on your vocal development.</p>

      <h2>🗓️ Practice Session History</h2>
      <ul>
        {sampleSessions.map((session, index) => (
          <li key={index}>
            <strong>{session.date}:</strong> {session.feedback}
          </li>
        ))}
      </ul>

      <h2>📝 Journal Notes</h2>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', whiteSpace: 'pre-wrap' }}>
        {journalNotes}
      </pre>

      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
