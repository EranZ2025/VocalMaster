import Link from 'next/link';

export default function BodyworkPractice() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>💪 Bodywork & Core Activation</h1>
      <p>
        Strengthening your posture and core supports vocal technique.
      </p>
      <h3>🌀 Exercise: Core Activation with Breath</h3>
      <ul>
        <li>Lie down or stand tall with relaxed shoulders</li>
        <li>Inhale into your lower ribs</li>
        <li>Engage your lower belly gently as you exhale</li>
        <li>Repeat slowly 10 times</li>
      </ul>
      <p>
        Inspired by Pilates, Alexander Technique, and Feldenkrais, this enhances breath and stability.
      </p>
      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
