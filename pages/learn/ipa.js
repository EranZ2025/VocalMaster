import Link from 'next/link';

export default function IPA() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🔤 IPA – International Phonetic Alphabet</h1>
      <p>Understand vowel/consonant production for clear opera diction.</p>
      <img src="/ipa-placeholder.jpg" alt="IPA Chart" width="300" />
      <p style={{ marginTop: '30px' }}><Link href="/learn">← Back to Learn</Link></p>
    </div>
  );
}
