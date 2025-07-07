import Link from 'next/link';

export default function Breathing() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🌬️ Breathing Exercises</h1>
      <p>Train diaphragmatic breathing and breath control for singing.</p>

      <ul style={{ lineHeight: '2em' }}>
        <li><strong>🫁 Diaphragm Awareness:</strong> Place hands on lower ribs and feel the expansion.</li>
        <li><strong>📏 4-4-8 Breathing:</strong> Inhale for 4, hold for 4, exhale for 8 (slow and steady).</li>
        <li><strong>🪈 Straw Phonation:</strong> Hum through a straw to regulate airflow.</li>
        <li><strong>🎈 Balloon Expansion:</strong> Imagine inflating a balloon into your lower back and sides.</li>
        <li><strong>🎼 Breath-Release Practice:</strong> Silent inhale, controlled sigh-out with relaxed shoulders.</li>
      </ul>

      <p><Link href="/exercises">← Back to Exercises</Link></p>
    </div>
  );
}
