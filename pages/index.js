import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎤 VocalMaster</h1>
      <p>Welcome to your vocal training hub. Choose a section below to begin:</p>
      <ul>
        <li><Link href="/learn">Learning</Link></li>
        <li><Link href="/exercises">Exercises</Link></li>
        <li><Link href="/record">Record</Link></li>
        <li><Link href="/progress">Progress</Link></li>
        <li><Link href="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}
