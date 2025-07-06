export async function POST(req) {
  const fakeTranscript = "O mio babbino caro, mi piace è bello, bello.";
  const fakeFeedback = "Great job! You maintained excellent breath support, but watch your vowel placement on 'caro'. Try a more open 'a'.";

  return new Response(JSON.stringify({
    transcript: fakeTranscript,
    feedback: fakeFeedback
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
