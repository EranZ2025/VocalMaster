 import Link from 'next/link';

export default function Masters() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎤 Great Singers</h1>
      <ul>
        <li><a href="https://youtu.be/tZrZpOSZK1Y" target="_blank">Pavarotti – Nessun Dorma</a></li>
        <li><a href="https://youtu.be/UJ7jHK1MrhU" target="_blank">Fischer-Dieskau – Schubert</a></li>
        <li><a href="https://youtu.be/TLP2giiZmXY" target="_blank">Sutherland – Bell Song</a></li>
      </ul>
      <p style={{ marginTop: '30px' }}><Link href="/learn">← Back to Learn</Link></p>
    </div>
  );
}
