import Link from 'next/link';

export default function Profile() {
  return (
    <div>
      <h1>👤 Your Profile</h1>
      <p>Welcome, Sarah Johnson!</p>

      <h2>📊 Weekly Goal</h2>
      <p>12 / 15 sessions completed</p>

      <h2>🔥 Practice Streak</h2>
      <p>14 days</p>

      <h2>🏆 Achievements</h2>
      <ul>
        <li>✅ First Recording</li>
        <li>✅ 7-Day Streak</li>
        <li>✅ Breath Master</li>
      </ul>

      <button>Edit Profile (coming soon)</button>

      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
