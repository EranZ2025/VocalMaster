import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [goals, setGoals] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const [entryText, setEntryText] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedGoals = localStorage.getItem('singingGoals');
    const storedJournal = localStorage.getItem('practiceJournalEntries');
    if (storedGoals) setGoals(storedGoals);
    if (storedJournal) setJournalEntries(JSON.parse(storedJournal));
  }, []);

  const handleSave = () => {
    localStorage.setItem('singingGoals', goals);
    localStorage.setItem('practiceJournalEntries', JSON.stringify(journalEntries));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAddEntry = () => {
    if (!entryText.trim()) return;
    const newEntry = {
      date: new Date().toLocaleDateString(),
      text: entryText.trim(),
    };
    const updatedEntries = [newEntry, ...journalEntries];
    setJournalEntries(updatedEntries);
    setEntryText('');
    localStorage.setItem('practiceJournalEntries', JSON.stringify(updatedEntries));
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all saved content?')) {
      setGoals('');
      setJournalEntries([]);
      localStorage.removeItem('singingGoals');
      localStorage.removeItem('practiceJournalEntries');
    }
  };

  const handleExport = () => {
    const content = `🎯 Goals:\n${goals}\n\n📓 Journal Entries:\n` +
      journalEntries.map(entry => `${entry.date}:\n${entry.text}`).join('\n\n');
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
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Write today's practice..."
          rows={4}
          style={{ width: '100%' }}
        />
        <button onClick={handleAddEntry} style={{ marginTop: '10px' }}>➕ Add Entry</button>
        <ul style={{ paddingLeft: 0, marginTop: '20px', listStyle: 'none' }}>
          {journalEntries.map((entry, idx) => (
            <li key={idx} style={{ marginBottom: '10px', background: '#f0f0f0', padding: '10px' }}>
              <strong>{entry.date}</strong><br />
              {entry.text}
            </li>
          ))}
        </ul>
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
