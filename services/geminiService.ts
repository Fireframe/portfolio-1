
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateGameIdea = async (genre: string) => {
  if (!API_KEY) throw new Error("API Key not found");
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Atue como um designer de jogos indie criativo. Gere uma ideia de jogo única e criativa para o gênero: ${genre}. Responda obrigatoriamente em PORTUGUÊS BRASILEIRO. Inclua um título, um "hook" único (uma frase impactante) e uma breve descrição do loop principal de jogabilidade. Retorne em formato JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          hook: { type: Type.STRING },
          description: { type: Type.STRING },
        },
        required: ["title", "hook", "description"]
      }
    },
  });

  const text = response.text;
  if (!text) {
    throw new Error("O modelo não retornou conteúdo de texto.");
  }

  return JSON.parse(text);
};
