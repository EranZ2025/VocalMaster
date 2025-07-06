export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const formData = await req.formData();
    const blob = formData.get('audio');
    const buffer = await blob.arrayBuffer();
    const file = new File([buffer], 'recording.webm', { type: 'audio/webm' });

    // Whisper transcription
    const whisperForm = new FormData();
    whisperForm.append('file', file);
    whisperForm.append('model', 'whisper-1');

    const whisperRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: whisperForm,
    });

    const whisperData = await whisperRes.json();
    if (!whisperRes.ok) {
      console.error('Whisper error:', whisperData);
      return new Response(JSON.stringify({ feedback: 'Whisper failed.', error: whisperData }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transcript = whisperData.text;

    // GPT feedback
    const gptRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a vocal coach specializing in opera technique. Provide short, practical vocal feedback on tone, vowels, breath, or posture based on what the student sang.',
          },
          {
            role: 'user',
            content: `I sang: ${transcript}`,
          },
        ],
      }),
    });

    const gptData = await gptRes.json();
    if (!gptRes.ok) {
      console.error('GPT error:', gptData);
      return new Response(JSON.stringify({ feedback: 'GPT failed.', error: gptData }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const feedback = gptData.choices?.[0]?.message?.content;

    return new Response(JSON.stringify({ transcript, feedback }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ feedback: 'Unexpected error', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
