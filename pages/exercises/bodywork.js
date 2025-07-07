import Link from 'next/link';

export default function Bodywork() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🏋️ Bodywork & Core</h1>

      <p>
        Core strength, posture, and alignment are essential for breath support
        and vocal stamina. Incorporating movement disciplines such as Alexander
        Technique, Feldenkrais, Pilates, and Yoga can support better vocal coordination.
      </p>

      <ul>
        <li>🧘 Basic posture alignment check</li>
        <li>💨 Breathing with core engagement (Pilates-style)</li>
        <li>🌀 Gentle spinal rotations (Feldenkrais)</li>
        <li>🧍‍♂️ Alexander semi-supine position practice</li>
      </ul>

      <p><Link href="/exercises">← Back to Exercises</Link></p>
    </div>
  );
}
