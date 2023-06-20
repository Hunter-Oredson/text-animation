import { OpenAIApi } from "openai";
// const api = new OpenAIApi(
//   "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"
// );
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

//test prompt
export async function testPrompt() {
  console.log("hit testPrompt");

  const prompt = "What is the meaning of life?";
  const url = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
  };

  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   const reply = data.choices[0].message.content;
      //   console.log(reply);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
