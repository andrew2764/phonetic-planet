const API_KEY = process.env.GOOGLE_API_KEY;

export async function POST(request) {
  const { text } = await request.json();
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=zh&target=en&q=${encodeURIComponent(
      text,
    )}&format=text`,
  );
  const data = await response.json();
  const translatedText = data.data.translations[0].translatedText;
  return new Response(JSON.stringify({ translatedText }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
