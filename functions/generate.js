// This is our "middleman" function.
// It runs securely on Netlify's servers, not on the user's browser.

exports.handler = async function (event) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "Missing API key" }) };
  }

  const { prompt, mode } = JSON.parse(event.body);

  // Adjust the prompt based on mode
  let finalPrompt = prompt;
  if (mode === "elaborate") {
    finalPrompt = `Elaborate on this creative idea with more detail and depth:\n\n${prompt}`;
  } else if (mode === "brief") {
    finalPrompt = `Turn this idea into a structured creative brief.
Respond in JSON with fields: title, subject, setting, mood, artStyle, colorPalette (array), keyElements (array).
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

    if (!response.ok) throw new Error(`Google API responded with status: ${response.status}`);

    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    console.error("Function Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

};
