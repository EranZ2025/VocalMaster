import React from 'react';
import Link from 'next/link';

export default function Breathing() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🌬️ Breathing Practice</h1>
      <p>
        Proper breath support is the foundation of good singing. These exercises will help you engage your diaphragm and control airflow.
      </p>

      <ul>
        <li>Silent deep breaths – 4 counts in, 6 out</li>
        <li>Lip trills or “motorboats” while exhaling</li>
        <li>Sss-s-s-s hissing on one breath as long as possible</li>
        <li>Panting like a dog, then slowing to deep breath</li>
      </ul>

      <p>
        Always aim for low, relaxed breathing without raising your shoulders.
      </p>

      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
