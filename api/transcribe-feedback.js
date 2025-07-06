export async function POST(req) {
  try {
    return new Response(
      JSON.stringify({
        transcript: "La la laaa 🎶",
        feedback: "Great vowel placement and breath control!",
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
