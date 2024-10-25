"use client";

import { useEffect } from "react";
import { Message, useChat } from "ai/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockMessages = [
  "Shipment Created: Textile from Shanghai to LA",
  "Shipment Created: Electronics from Shenzhen to NY",
  "Shipment: Electronics from Shenzhen to NY - Delivered",
  "Shipment: Furniture from Guangzhou to London - In Transit",
  "Shipment: Food from Tokyo to Paris - In Transit",
  "Shipment: Textile from Mumbai to Dubai - Delivered",
];

// type Message = {
//   id: number;
//   role: "system" | "user";
//   content: string;
//   createdAt: Date;
// };
export default function Chatbot() {
  const { messages, input, handleInputChange, setMessages, setInput } =
    useChat();
  //({ messages });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    setMessages((prev: Message[]) => [
      ...prev,
      {
        id: String(prev.length),
        role: "user",
        content: input,
        createdAt: new Date(),
      },
    ]);
    const response =
      mockMessages[Math.ceil(messages.length / 2 - 1) % mockMessages.length];
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setMessages((prev: Message[]) => [
      ...prev,
      {
        id: String(prev.length),
        role: "system",
        content: response,
        createdAt: new Date(),
      },
    ]);
  };

  useEffect(() => {
    setMessages([
      {
        id: "0",
        role: "system",
        content: "Welcome to the LogiVoyage Support! How may I help you?",
        createdAt: new Date(),
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col h-[90vh] w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Support Chatbot</h1>
      <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
        {messages.map((m: Message) => (
          <div
            key={m.id}
            className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            >
              {m.content}
            </span>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          autoFocus
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="flex-grow"
        />
        <Button type="submit">
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
