import OpenAI from "openai";
;

const openai = new OpenAI({
  apiKey: process.env.GROK3_MODEL_ID,
  baseURL: "https://api.x.ai/v1",
});

export async function generateResponse(prompt: string) {
  try {
    const stream = await openai.chat.completions.create({
      model: "grok-3-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: true,
    });

    // Yanıt parçalarını birleştirmek için bir dize oluştur
    let fullResponse = "";

    // Stream'den gelen tüm parçaları toplama
    for await (const chunk of stream) {
     
      const content = chunk.choices[0]?.delta?.content || "";
      fullResponse += content;
    }

    // Eğer yanıt boşsa bir hata fırlat
    if (!fullResponse) {
      throw new Error("Boş yanıt alındı");
    }

    return fullResponse;
  } catch (error) {
    console.error("LLM yanıtı üretilirken hata oluştu:", error);
    throw new Error("AI yanıtı alınamadı. Lütfen daha sonra tekrar deneyin.");
  }
}
