import OpenAI from "openai";
import type { AIClient, ChatMessage } from "../client";

export class OpenAIAI implements AIClient {
  private client: OpenAI;
  private model: string;

  constructor(apiKey: string, model = "gpt-4o-mini") {
    this.client = new OpenAI({ apiKey });
    this.model = model;
  }

  async chat(messages: ChatMessage[]): Promise<string> {
    const prompt = messages
      .map(m => `${m.role}: ${m.content}`)
      .join("\n");

    const res = await this.client.responses.create({
      model: this.model,
      input: prompt,
      temperature: 0.3,
    });

    // The new OpenAI v4 unified output:
    return res.output_text ?? "";
  }
}
