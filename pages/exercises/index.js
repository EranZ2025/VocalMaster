import Link from 'next/link';

export default function ExercisesIndex() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎯 Exercises – Choose a Focus Area</h1>
      <ul>
        <li><Link href="/exercises/breathing">🫁 Breathing Practice</Link></li>
        <li><Link href="/exercises/vocalization">🎶 Vocalization</Link></li>
        <li><Link href="/exercises/bodywork">💪 Bodywork & Core</Link></li>
      </ul>
      <p style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  );
}
