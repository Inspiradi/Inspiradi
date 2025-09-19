// This is our "middleman" function.
// It runs securely on Netlify's servers, not on the user's browser.

exports.handler = async function (event) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing!");
    return { statusCode: 500, body: JSON.stringify({ error: "Missing API key" }) };
  }

  const { prompt, mode } = JSON.parse(event.body || "{}");
  if (!prompt) {
    console.error("No prompt provided!");
    return { statusCode: 400, body: JSON.stringify({ error: "No prompt provided" }) };
  }

  // Adjust the prompt
  let finalPrompt = prompt;
  if (mode === "elaborate") {
    finalPrompt = `Elaborate on this creative idea:\n\n${prompt}`;
  } else if (mode === "brief") {
    finalPrompt = `Turn this idea into a structured creative brief.
Respond ONLY in JSON with fields: title, subject, setting, mood, artStyle, colorPalette (array), keyElements (array).
Idea:\n\n${prompt}`;
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: finalPrompt }] }],
    generationConfig: { temperature: 0.8, topK: 40, topP: 0.95, maxOutputTokens: 1024 }
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google API error:", response.status, errorText);
      throw new Error(`Google API responded with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("Google API success:", JSON.stringify(data, null, 2));

    return { statusCode: 200, body: JSON.stringify(data) };

  } catch (error) {
    console.error("Function Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

