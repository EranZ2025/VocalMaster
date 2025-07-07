import React, { useState } from 'react';

export default function ProfilePage() {
  const [goal, setGoal] = useState('');
  const [savedGoal, setSavedGoal] = useState('');

  const handleSave = () => {
    localStorage.setItem('vocalGoal', goal);
    setSavedGoal(goal);
  };

  const handleLoad = () => {
    const storedGoal = localStorage.getItem('vocalGoal');
    if (storedGoal) {
      setSavedGoal(storedGoal);
    }
  };

  return (
    <div>
      <h1>👤 Your Profile</h1>
      <p>Set your vocal development goal and track it here:</p>
      
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>Save Goal</button>
      <button onClick={handleLoad}>Load Goal</button>

      {savedGoal && (
        <p><strong>🎯 Your Goal:</strong> {savedGoal}</p>
      )}

      <p><a href="/">← Back to Home</a></p>
    </div>
  );
}
