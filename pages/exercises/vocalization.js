import Link from 'next/link';

export default function VocalizationPractice() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎶 Vocalization Practice</h1>
      <p>
        Warming up your voice with vocalizations builds flexibility and range.
      </p>
      <h3>🎵 Exercise: 5-Tone Scale on "ma"</h3>
      <ul>
        <li>Start on a comfortable pitch</li>
        <li>Sing: ma-ma-ma-ma-ma up and down a 5-note scale</li>
        <li>Move up by half-steps</li>
        <li>Keep tone light and forward</li>
      </ul>
      <p>
        Focus on clarity, even tone, and breath support.
      </p>
      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
