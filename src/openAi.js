import { allTemplates } from "./templates";

export async function aiSelectTemplate(prompt) {
  const url = "https://api.openai.com/v1/chat/completions";

  const titles = allTemplates.map((item) => item.title);

  const conversation = [
    { role: "system", content: "You are the user." },
    {
      role: "system",
      content: `Template names: ${titles}`,
    },
    {
      role: "assistant",
      content: `return the name of the template best suited for this prompt: ${prompt}`,
    },
  ];
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  };

  const requestBody = {
    model: "gpt-3.5-turbo-0613",
    messages: conversation,
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

    const index = allTemplates.findIndex(
      (template) => template.title.toLowerCase() === reply.toLowerCase()
    );

    if (index !== -1) {
      console.log(`valid index: ${index}`);
      console.log(`template object: ${allTemplates[index].text}`);
      return allTemplates[index].text;
    } else {
      console.log(`No template found`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function apiValid() {
  const url = "https://api.openai.com/v1/engines";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
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
