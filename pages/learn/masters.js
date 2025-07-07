import Link from 'next/link';

export default function Masters() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎤 Great Singers</h1>
      <p>Watch master performers and observe their vocal technique in action:</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=tZrZpOSZK1Y" target="_blank" rel="noopener noreferrer">Luciano Pavarotti – Nessun Dorma</a></li>
        <li><a href="https://www.youtube.com/watch?v=UJ7jHK1MrhU" target="_blank" rel="noopener noreferrer">Dietrich Fischer-Dieskau – Schubert</a></li>
        <li><a href="https://www.youtube.com/watch?v=TLP2giiZmXY" target="_blank" rel="noopener noreferrer">Joan Sutherland – Bell Song (Lakmé)</a></li>
      </ul>

      <p style={{ marginTop: '30px' }}><Link href="/learn">← Back to Learn</Link></p>
    </div>
  );
}
