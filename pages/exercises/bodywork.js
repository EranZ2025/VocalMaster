import React from 'react';
import Link from 'next/link';

export default function Bodywork() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🧘 Bodywork & Core</h1>
      <p>
        These exercises help you connect your breath, posture, and body alignment. A relaxed and supported body is key for healthy singing.
      </p>

      <ul>
        <li>Stretch shoulders, neck, and jaw</li>
        <li>Slow head rolls and shoulder rolls</li>
        <li>Rag-doll forward bend with soft sighs</li>
        <li>Pelvic tilts and balance on one foot</li>
      </ul>

      <p>
        Feel free to adapt these before singing sessions. You can also record your favorite warmups in the Record tab!
      </p>

      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
