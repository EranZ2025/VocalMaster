import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎙️ Welcome to VocalMaster</h1>
      <p>This app helps you learn opera singing and track your vocal progress.</p>

      <ul>
        <li>
          <Link href="/learn/anatomy">🫁 Vocal Anatomy</Link>
        </li>
        <li>
          <Link href="/learn/ipa">💬 IPA</Link>
        </li>
        <li>
          <Link href="/learn/styles">🎶 Vocal Styles</Link>
        </li>
        <li>
          <Link href="/learn/masters">🎤 Masterclasses from Great Singers</Link>
        </li>
        <li>
          <Link href="/practice">📝 Go to Practice Section</Link>
        </li>
      </ul>
    </div>
  );
}
