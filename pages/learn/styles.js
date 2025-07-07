import Link from 'next/link';

export default function Styles() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎶 Vocal Styles</h1>
      <p>Compare how different classical singing styles sound and feel.</p>
      <ul>
        <li>🎭 <strong>Bel Canto</strong> – Smooth legato, agility, and even tone</li>
        <li>🔥 <strong>Verismo</strong> – Intense emotion, dramatic vocalism, strong chest resonance</li>
        <li>🎹 <strong>Lieder</strong> – Precise diction, text expression, subtle vibrato</li>
      </ul>

      <p style={{ marginTop: '30px' }}><Link href="/learn">← Back to Learn</Link></p>
    </div>
  );
}
