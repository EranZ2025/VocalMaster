import Link from 'next/link';
import { useState } from 'react';

export default function Learn() {
  const [section, setSection] = useState('anatomy');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎓 VocalMaster – Learn</h1>

      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setSection('anatomy')}>🫁 Anatomy</button>{' '}
        <button onClick={() => setSection('ipa')}>🔤 IPA</button>{' '}
        <button onClick={() => setSection('styles')}>🎶 Vocal Styles</button>{' '}
        <button onClick={() => setSection('examples')}>🎤 Great Singers</button>
      </nav>

      {section === 'anatomy' && (
        <div>
          <h2>Vocal Anatomy</h2>
          <p>Learn how the vocal folds, diaphragm, tongue, and resonators work.</p>
          <img src="/vocal-anatomy-placeholder.jpg" alt="Vocal Anatomy Diagram" width="300" />
          <p><em>(We'll add a real diagram later!)</em></p>
        </div>
      )}

      {section === 'ipa' && (
        <div>
          <h2>IPA Chart (International Phonetic Alphabet)</h2>
          <p>Understand vowel/consonant production for clear opera diction.</p>
          <img src="/ipa-placeholder.jpg" alt="IPA Chart" width="300" />
        </div>
      )}

      {section === 'styles' && (
        <div>
          <h2>Vocal Styles</h2>
          <p>Compare vocal color, vibrato, phrasing between styles (e.g. Verismo, Bel Canto, Lieder).</p>
          <ul>
            <li>🎭 Bel Canto – Legato, agile, light phrasing</li>
            <li>🔥 Verismo – Passion, chest-dominant, dramatic delivery</li>
            <li>🎹 Lieder – Precision, diction, subtle vibrato</li>
          </ul>
        </div>
      )}

      {section === 'examples' && (
        <div>
          <h2>Examples from Great Singers</h2>
          <p>Watch and listen to the masters in action:</p>
          <ul>
            <li><a href="https://youtu.be/tZrZpOSZK1Y" target="_blank">Pavarotti – Nessun Dorma</a></li>
            <li><a href="https://youtu.be/UJ7jHK1MrhU" target="_blank">Fischer-Dieskau – Schubert</a></li>
            <li><a href="https://youtu.be/TLP2giiZmXY" target="_blank">Sutherland – Bell Song</a></li>
          </ul>
        </div>
      )}

      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
