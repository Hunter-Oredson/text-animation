import { allTemplates } from "./templates";
const apiKey = "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";

export async function aiSelectTemplate(prompt) {
  console.log("hit aiSelectTemplate");
  const url = "https://api.openai.com/v1/chat/completions";

  let templateTitle = "";

  const titles = allTemplates.map((item) => item.title);
  const stringTemplatesTitles = titles.join(", ");

  const userMessage = `given the array of templates: [${titles}] best suited for this prompt : ${prompt}`;
  console.log(userMessage);

  // Prepare conversation history with user message and templates
  const conversation = [
    { role: "system", content: "You are the user." },
    {
      role: "user",
      content: "your response should include a single number and no other text",
    },
    {
      role: "assistant",
      content: userMessage,
    },
  ];
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const requestBody = {
    model: "gpt-3.5-turbo-0613",
    messages: conversation,
    max_tokens: 1,
    temperature: 0, //reduce randomness
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
    console.log(`ai reply: ${reply}`);
    console.log(
      `ai title selection: \n${titles[reply]} \n${allTemplates[reply].title}`
    );
    return allTemplates[reply].text;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Throw the 'error' to be caught by the caller
  }
}

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
