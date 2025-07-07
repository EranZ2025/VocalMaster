import Link from 'next/link';

export default function Progress() {
  // This is placeholder content — eventually you'll pull real entries from a database
  const mockEntries = [
    {
      date: '2025-07-07',
      summary: 'Practiced breathing and recorded “Vocalise”',
      feedback: 'Good breath control. Work on smoother phrase endings.',
    },
    {
      date: '2025-07-06',
      summary: 'Tried gentle bodywork and humming exercises',
      feedback: 'Nice resonance. Try to maintain relaxed posture while sustaining pitches.',
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Progress</h1>
      <p>Review your recent practice logs and AI feedback:</p>

      {mockEntries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <h3>{entry.date}</h3>
          <p><strong>📝 Summary:</strong> {entry.summary}</p>
          <p><strong>💬 Feedback:</strong> {entry.feedback}</p>
        </div>
      ))}

      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
