import { useState } from 'react';
import Link from 'next/link';

export default function Exercises() {
  const [exercise, setExercise] = useState('breathing');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🏃 Exercises</h1>

      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setExercise('breathing')}>🫁 Breathing</button>{' '}
        <button onClick={() => setExercise('vocalization')}>🎵 Vocalization</button>{' '}
        <button onClick={() => setExercise('bodywork')}>🏋️ Bodywork & Core</button>
      </nav>

      {exercise === 'breathing' && (
        <div>
          <h2>Breathing Exercises</h2>
          <p>Practice diaphragmatic breathing, breath control, and air flow for sustained singing.</p>
          <ul>
            <li>🎈 Balloon belly: Inhale 4, exhale 6</li>
            <li>📏 Straw breathing: slow steady flow</li>
            <li>🧘‍♀️ Rib expansion holds</li>
          </ul>
        </div>
      )}

      {exercise === 'vocalization' && (
        <div>
          <h2>Vocalization</h2>
          <p>Warm up your voice with these common vocal patterns and techniques.</p>
          <ul>
            <li>🎹 5-tone scale: "ma-ma-ma"</li>
            <li>🐴 Lip trills on scales</li>
            <li>🌀 Sirens from chest to head</li>
          </ul>
        </div>
      )}

      {exercise === 'bodywork' && (
        <div>
          <h2>Bodywork & Core</h2>
          <p>Activate your body’s support systems for singing: posture, balance, and strength.</p>
          <ul>
            <li>🧘‍♂️ Pelvic tilts + spine alignment</li>
            <li>🧍‍♀️ Wall sits for core stability</li>
            <li>🔄 Shoulder and neck releases</li>
            <li>🏋️ Light core pulses lying down</li>
          </ul>
        </div>
      )}

      <p style={{ marginTop: '30px' }}><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
