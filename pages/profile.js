import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [goal, setGoal] = useState('');
  const [savedGoal, setSavedGoal] = useState('');

  const handleSave = () => {
    setSavedGoal(goal);
    localStorage.setItem('vocalGoal', goal);
  };

  // Load saved goal on page load
  if (typeof window !== 'undefined' && savedGoal === '' && localStorage.getItem('vocalGoal')) {
    setSavedGoal(localStorage.getItem('vocalGoal'));
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>👤 Your Vocal Profile</h1>
      <p>Set your vocal development goal and track your focus:</p>

      <label>
        🎯 Your current goal:
        <br />
        <input
          type="text"
          placeholder="e.g., Improve breath support"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={{ marginTop: '8px', width: '300px', padding: '5px' }}
        />
      </label>
      <br />
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        Save Goal
      </button>

      {savedGoal && (
        <p style={{ marginTop: '20px' }}>
          ✅ <strong>Saved Goal:</strong> {savedGoal}
        </p>
      )}

      <p style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  );
}
