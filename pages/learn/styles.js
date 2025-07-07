import Link from 'next/link';

export default function Styles() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎶 Vocal Styles</h1>
      <ul>
        <li>🎭 Bel Canto – Legato, agile, light phrasing</li>
        <li>🔥 Verismo – Passion, chest-dominant, dramatic delivery</li>
        <li>🎹 Lieder – Precision, diction, subtle vibrato</li>
      </ul>
      <p style={{ marginTop: '30px' }}><Link href="/learn">← Back to Learn</Link></p>
    </div>
  );
}
