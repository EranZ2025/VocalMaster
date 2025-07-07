import Link from 'next/link';

export default function Vocalization() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎵 Vocalization Exercises</h1>
      <p>Warm up and develop your voice with targeted vocal exercises.</p>

      <ul style={{ lineHeight: '2em' }}>
        <li><strong>🎶 Lip Trills:</strong> Great for breath flow and gentle onset.</li>
        <li><strong>🎯 Sirens:</strong> Slide from low to high to loosen up the voice.</li>
        <li><strong>🌀 5-Tone Scales:</strong> Practice agility and tuning across registers.</li>
        <li><strong>📈 Arpeggios:</strong> Improve resonance and control.</li>
        <li><strong>🔁 Sustained Vowels:</strong> Train breath support and tone clarity.</li>
      </ul>

      <p><Link href="/exercises">← Back to Exercises</Link></p>
    </div>
  );
}
