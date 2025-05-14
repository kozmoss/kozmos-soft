import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

export async function POST(request: NextRequest) {
  try {
    const { value } = await request.json();

    const client = new InferenceClient(`${process.env.HUGGINGFACE_API_KEY}`);

    const chatCompletion = await client.chatCompletion({
      provider: "hf-inference",
      model: "meta-llama/Llama-3.3-70B-Instruct",
      messages: [
        {
          role: "user",
          content: value,
        },
      ],
      max_tokens: 512,
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
