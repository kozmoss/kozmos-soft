import { createXai } from "@ai-sdk/xai";

export const xai = createXai({
  apiKey: process.env.XAI_MODEL_ID,
});


export const MessageRole = {
    USER: "user",
    ASSISTANT: "assistant",
    SYSTEM: "system"
  };