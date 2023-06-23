import { allTemplates } from "./templates";
const apiKey = "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";

export async function apiValid() {
  const url = "https://api.openai.com/v1/engines";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (response.ok) {
        console.log("API key is valid.");
      } else {
        console.error("Invalid API key.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function aiSelectPrompt(prompt) {
  console.log("hit aiSelectPrompt");
  const url = "https://api.openai.com/v1/chat/completions";

  let templateTitle = "";

  // const prompt =
  //   "Advanced double digit subtraction (21 - 17) using 2 and 12 and 8";

  const titles = allTemplates.map((item) => item.title);
  const stringTemplatesTitles = titles.join(", ");

  const userMessage =
    "help me choose the template best suited for this prompt and only return the template name and no other text" +
    " prompt: " +
    prompt +
    " template: " +
    stringTemplatesTitles;
  console.log(userMessage);

  // Prepare conversation history with user message and templates
  const conversation = [
    { role: "system", content: "You are the user." },
    {
      role: "user",
      content: userMessage,
    },
  ];
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: conversation,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log(data);
    const reply = data.choices[0].message.content;
    console.log(reply);
    return reply; // Return the 'reply' value
  } catch (error) {
    console.error("Error:", error);
    throw error; // Throw the 'error' to be caught by the caller
  }
}
