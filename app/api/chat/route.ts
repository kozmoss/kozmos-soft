import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    const client = new InferenceClient(`${process.env.HUGGINGFACE_API_KEY}`);

    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const assistantResponse = chatCompletion.choices[0].message;

    return NextResponse.json({
      response: assistantResponse.content || assistantResponse,
    });
  } catch (error) {
    console.error("HuggingFace API Error", error);
    return NextResponse.json(
      {
        error: "NO AI RESPONSE Received",
      },
      { status: 500 },
    );
  }
}
