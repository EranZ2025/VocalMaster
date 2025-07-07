import React from 'react';
import Link from 'next/link';

export default function Bodywork() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🧘‍♂️ Bodywork & Core</h1>
      <p>
        Body alignment and awareness are foundational for vocal freedom. These exercises help release tension and engage your support system.
      </p>

      <ul>
        <li>Neck and shoulder rolls</li>
        <li>Spine alignment check (against a wall)</li>
        <li>Gentle forward bends and stretches</li>
        <li>Pelvic tilt and grounding awareness</li>
        <li>Plank hold (start with 15–30 seconds)</li>
      </ul>

      <p>
        Keep breathing naturally during each movement. The goal is to find release, not strain.
      </p>

      <p style={{ marginTop: '30px' }}>
        <Link href="/exercises">← Back to Exercises</Link>
      </p>
    </div>
  );
}
