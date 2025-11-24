export interface AIClient {
  chat(messages: ChatMessage[]): Promise<string>
}

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};