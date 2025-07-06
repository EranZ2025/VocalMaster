export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const formData = await req.formData();
  const audioBlob = formData.get('audio');

  const audioBuffer = await audioBlob.arrayBuffer();
  const audioFile = new Uint8Array(audioBuffer);

  // 1. Whisper transcription
  const whisperResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: createForm(audioFile)
  });

  const whisperData = await whisperResponse.json();
  const transcript = whisperData.text;

  // 2. GPT vocal feedback
  const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a vocal coach specializing in opera technique. Listen to a student\'s singing and give constructive, supportive feedback on things like vowel placement, breath, support, or mouth position.'
        },
        {
          role: 'user',
          content: `Here is what I sang: ${transcript}`
        }
      ]
    })
  });

  const gptData = await gptResponse.json();
  const feedback = gptData.choices?.[0]?.message?.content;

  return new Response(JSON.stringify({ transcript, feedback }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

function createForm(audioFile) {
  const form = new FormData();
  const file = new File([audioFile], 'recording.webm', {
    type: 'audio/webm'
  });
  form.append('file', file);
  form.append('model', 'whisper-1');
  return form;
}
