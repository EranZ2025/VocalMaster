import Link from 'next/link';

export default function LearnIndex() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎓 Learn – Choose a Topic</h1>
      <ul>
        <li><a href="/learn/anatomy">🫁 Vocal Anatomy</a></li>
        <li><a href="/learn/style">🎶 Vocal Styles</a></li>
        <li><a href="/learn/masters">🎤 Great Singers</a></li>
      </ul>

      <p style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  );
}
