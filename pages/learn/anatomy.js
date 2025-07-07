import Link from 'next/link';

export default function Anatomy() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Vocal Anatomy</h1>
      <p>Learn how the vocal folds, diaphragm, tongue, and resonators work.</p>
      <img src="/vocal-anatomy-placeholder.jpg" alt="Vocal Anatomy Diagram" width="300" />
      <p><em>We’ll add a real diagram later!</em></p>
      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
