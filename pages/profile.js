import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [goals, setGoals] = useState('');
  const [journal, setJournal] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedGoals = localStorage.getItem('singingGoals');
    const storedJournal = localStorage.getItem('practiceJournal');
    if (storedGoals) setGoals(storedGoals);
    if (storedJournal) setJournal(storedJournal);
  }, []);

  const handleSave = () => {
    localStorage.setItem('singingGoals', goals);
    localStorage.setItem('practiceJournal', journal);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all saved content?')) {
      setGoals('');
      setJournal('');
      localStorage.removeItem('singingGoals');
      localStorage.removeItem('practiceJournal');
    }
  };

  const handleExport = () => {
    const content = `🎯 Goals:\n${goals}\n\n📓 Journal:\n${journal}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'vocal-profile.txt';
    a.click();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🧑‍🎤 Your Vocal Profile</h1>

      <div>
        <h2>🎯 Singing Goals</h2>
        <textarea
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          rows={5}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>📓 Practice Journal</h2>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          rows={10}
          placeholder="Add dates like:\n\n2025-07-07:\nPracticed breathing and lip trills..."
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSave}>💾 Save</button>{' '}
        <button onClick={handleClear}>🗑️ Clear</button>{' '}
        <button onClick={handleExport}>📤 Export</button>
        {saved && <span style={{ marginLeft: '10px' }}>✅ Saved!</span>}
      </div>

      <p style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  );
}
