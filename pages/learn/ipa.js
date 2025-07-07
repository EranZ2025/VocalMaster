import Link from 'next/link';

export default function IPA() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🔤 IPA Chart (International Phonetic Alphabet)</h1>
      <p>Understand how vowels and consonants are produced for accurate and clear opera diction.</p>
      <img src="/ipa-placeholder.jpg" alt="IPA Chart" width="300" />
      <p><em>(We'll add a full IPA chart later!)</em></p>

      <p style={{ marginTop: '30px' }}><Link href="/learn">← Back to Learn</Link></p>
    </div>
  );
}
