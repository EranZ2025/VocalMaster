import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [goal, setGoal] = useState('');
  const [savedGoal, setSavedGoal] = useState('');

  useEffect(() => {
    const storedGoal = localStorage.getItem('userGoal');
    if (storedGoal) {
      setGoal(storedGoal);
      setSavedGoal(storedGoal);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('userGoal', goal);
    setSavedGoal(goal);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to delete all practice data?')) {
      localStorage.removeItem('vocalPracticeHistory');
      alert('Practice data deleted.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👤 Profile</h1>
      <p><strong>Name:</strong> VocalMaster User</p>

      <div style={{ marginTop: '1.5rem' }}>
        <label><strong>Your Vocal Goal / Note to Self:</strong></label>
        <br />
        <textarea
          rows="4"
          style={{ width: '100%', maxWidth: '400px', marginTop: '0.5rem' }}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <br />
        <button onClick={handleSa
