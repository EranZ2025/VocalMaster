import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎤 Welcome to VocalMaster</h1>
      <p>This is your opera voice training app.</p>

      <div style={{ marginTop: '20px' }}>
        <Link href="/learn">
          <button style={{ marginRight: '10px' }}>📘 Learn</button>
        </Link>
        <Link href="/practice">
          <button>🎙️ Practice</button>
        </Link>
      </div>
    </div>
  );
}
