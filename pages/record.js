import Link from 'next/link';

export default function Record() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎙️ Record Your Practice</h1>
      <p>Use this section to record your exercises or singing practice and get feedback.</p>

      <h3>🟢 Step 1: Start Recording</h3>
      <p>[Audio/video recording button will go here]</p>

      <h3>📄 Step 2: Transcribe & Analyze</h3>
      <p>[After recording, your session will be transcribed and analyzed]</p>

      <h3>📂 Step 3: Save or Discard</h3>
      <p>[Option to save recording with notes or discard it]</p>

      <p style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </div>
  );
}
