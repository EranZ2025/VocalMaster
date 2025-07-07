import Link from 'next/link';

export default function BreathingPractice() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🫁 Breathing Practice</h1>
      <p>
        Proper breath support is essential for healthy and powerful singing.
        Try the following exercise:
      </p>
      <h3>🧘‍♂️ Exercise: 4-7-8 Breathing</h3>
      <ul>
        <li>Inhale for 4 seconds</li>
        <li>Hold for 7 seconds</li>
        <li>Exhale slowly for 8 seconds</li>
        <li>Repeat 5 times</li>
      </ul>
      <p>
        This exercise improves breath control, relaxes the body, and prepares you for singing.
      </p>
      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
