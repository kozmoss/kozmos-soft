// app/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUp, Square, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderTrail } from "./border-beam";

// Define message type
type Message = {
  role: "user" | "assistant";
  content: string;
  id: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentAssistantMessage, setCurrentAssistantMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, currentAssistantMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulate API call to AI service
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.body) {
        throw new Error("Response body is null");
      }

      // Get reader from response body
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      setIsTyping(true);
      setCurrentAssistantMessage("");

      // Process the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        setCurrentAssistantMessage((prev) => prev + chunk);
      }

      // When stream is complete, add the full assistant message
      const assistantMessage: Message = {
        role: "assistant",
        content: currentAssistantMessage,
        id: Date.now().toString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setCurrentAssistantMessage("");
      setIsTyping(false);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full ",
        messages.length === 0 ? "justify-center items-center" : "",
      )}
    >
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pb-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={cn(
                "w-max max-w-[80%]",
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "mr-auto",
              )}
            >
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {message.role === "user" ? "You" : "AI Assistant"}
                    </p>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Show typing indicator */}
          {isTyping && (
            <Card className="mr-auto w-max max-w-[80%]">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      AI Assistant
                    </p>
                    <p className="text-sm whitespace-pre-wrap">
                      {currentAssistantMessage}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {messages.length === 0 && (
        <div className="mb-5 text-3xl text-muted-foreground">
          What can I help with?
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={cn(
          "border-input bg-background rounded-3xl border p-2 shadow-xs relative",
          messages.length === 0 ? "w-full max-w-md" : "",
        )}
      >
        {messages.length === 0 && (
          <BorderTrail
            className="bg-gradient-to-l rounded-3xl from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            size={150}
          />
        )}

        <div className="flex items-center gap-2 h-16 ">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={isLoading}
            className="text-primary min-h-[44px] w-full resize-none border-none  shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            variant="default"
            size="icon"
            className="h-8 w-8 rounded-full"
            disabled={isLoading || !input.trim()}
            type="submit"
          >
            {isLoading ? (
              <Square className="size-5 fill-current" />
            ) : (
              <ArrowUp className="size-5" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
