import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎤 Welcome to VocalMaster</h1>
      <p>This app helps you learn opera singing and track your vocal progress.</p>
      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        <li><Link href="/learn">📘 Learning</Link></li>
        <li><Link href="/exercises">🏋️ Exercises</Link></li>
        <li><Link href="/record">🎙️ Record</Link></li>
        <li><Link href="/progress">📈 Progress</Link></li>
        <li><Link href="/profile">👤 Profile</Link></li>
      </ul>
    </div>
  );
}
