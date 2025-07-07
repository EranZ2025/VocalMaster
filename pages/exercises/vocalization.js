import React from 'react';
import Link from 'next/link';

export default function Vocalization() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎶 Vocalization</h1>
      <p>
        These exercises warm up your vocal folds, build coordination, and extend range. Start gently and gradually increase intensity.
      </p>

      <ul>
        <li>5-tone scale on “ma” (1-2-3-4-5-4-3-2-1)</li>
        <li>Octave leaps on “ya”</li>
        <li>Arpeggios on “nee-nee-nee”</li>
        <li>Siren glides from bottom to top on “ng” or “oo”</li>
      </ul>

      <p>
        Focus on clarity, breath connection, and ease rather than volume or power.
      </p>

      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
