export default function handler(req, res) {
  res.status(200).json({
    transcript: "This is a sample transcript of your singing.",
    feedback: "Your pitch is mostly accurate, but try to relax your jaw for smoother vowels.",
  });
