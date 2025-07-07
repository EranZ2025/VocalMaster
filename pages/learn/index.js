import Link from 'next/link';

export default function LearnIndex() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎓 Learn – Choose a Topic</h1>
      <ul>
        <li><Link href="/learn/anatomy">🫁 Vocal Anatomy</Link></li>
        <li><Link href="/learn/ipa">💬 IPA</Link></li>
        <li><Link href="/learn/styles">🎶 Vocal Styles</Link></li>
        <li><Link href="/learn/masters">🎤 Masterclasses from Great Singers</Link></li>
      </ul>
      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
