import { NextResponse } from "next/server";
import { OpenAIAI } from "@bc/ai";
export async function POST(req: Request) {
  const body = await req.json();
  const ai = new OpenAIAI(process.env.OPENAI_API_KEY!);
  const summary = await ai.chat(body.text);
  return NextResponse.json({ summary });
}
