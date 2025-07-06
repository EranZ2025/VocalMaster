export const config = {
  api: {
    bodyParser: false,
  },
};

import { Readable } from 'stream';

export default async function handler(req, res) {
  try {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = Buffer.concat(buffers);

    const boundary = req.headers['content-type'].split('boundary=')[1];
    const parts = body.toString().split(`--${boundary}`);

    const audioPart = parts.find(part => part.includes('filename="recording.wav"'));
    const start = audioPart.indexOf('\r\n\r\n') + 4;
    const audioBuffer = Buffer.from(audioPart.slice(start, audioPart.lastIndexOf('--')).trim(), 'binary');

    // 1. Transcribe using Whisper API
    const transcriptionResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: (() => {
        const data = new FormData();
        const blob = new Blob([audioBuffer], { type: 'audio/wav' });
        data.append("file", blob, "recording.wav");
        data.append("model", "whisper-1");
        return data;
      })()
    });

    const transcriptionData = await transcriptionResponse.json();
    const transcript = transcriptionData.text;

    // 2. Ask GPT-4 for feedback
    const gptResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a vocal coach specializing in opera technique. Listen to a student's singing and give constructive, supportive feedback on things like vowel placement, breath, support, or mouth position."
          },
          {
            role: "user",
            content: `Here is what I sang: ${transcript}`
          }
        ]
      })
    });

    const gptData = await gptResponse.json();
    const feedback = gptData.choices?.[0]?.message?.content || "No feedback generated.";

    res.status(200).json({ transcript, feedback });
  } catch (err) {
    console.error("Transcription Error:", err);
    res.status(500).json({ error: "Whisper transcription failed" });
  }
}
