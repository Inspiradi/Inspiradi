// This is our "middleman" function.
// It runs securely on Netlify's servers, not on the user's browser.

exports.handler = async function (event) {
  // Your secret API key will be stored securely by Netlify.
  // We access it here using `process.env`.
  const apiKey = process.env.GEMINI_API_KEY;

   if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing API key in environment variables" }),
    };
  }

  // This is the prompt sent from your website's JavaScript.
  const { prompt } = JSON.parse(event.body);
  
  // The URL for the Google Gemini API.
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  // This is the data structure Google's API expects.
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.8,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    }
  };

  try {
    // We call the Google API from our secure function.
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // We send the result from Google back to our website.
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Function Error:", error);
    // If something goes wrong, we send an error message back.
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
