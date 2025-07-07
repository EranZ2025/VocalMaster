import Link from 'next/link';

export default function Learn() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎓 VocalMaster – Learn</h1>
      <p>Select a topic to begin learning:</p>

      <ul style={{ lineHeight: '2' }}>
        <li><Link href="/learn/anatomy">🫁 Vocal Anatomy</Link></li>
        <li><Link href="/learn/ipa">🔤 IPA (International Phonetic Alphabet)</Link></li>
        <li><Link href="/learn/styles">🎶 Vocal Styles</Link></li>
        <li><Link href="/learn/masters">🎤 Great Singers</Link></li>
      </ul>

      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
