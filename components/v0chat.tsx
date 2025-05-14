"use client";

import type React from "react";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

// Define the message interface
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      // Temporarily shrink to get the right scrollHeight
      textarea.style.height = `${minHeight}px`;

      // Calculate new height
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY),
      );

      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight],
  );

  useEffect(() => {
    // Set initial height
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  // Adjust height on window resize
  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

export function KozmosChat() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!value.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      content: value.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setValue("");
    adjustHeight(true);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: value.trim() }),
      });

      const data = await res.json();

      // Add AI response to chat
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: res.ok
          ? data.response
          : "Bir hata oluştu: " + (data.error || "Bilinmeyen hata"),
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (err) {
      console.error(err);
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Üzgünüm, bir bağlantı hatası oluştu. Lütfen tekrar deneyin.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="relative h-full flex-1 flex overflow-x-hidden overflow-y-scroll pt-6">
      <div className="relative mx-auto flex h-full w-full max-w-3xl flex-1 flex-col md:px-2">
        {messages.length > 0 ? (
          /* Messages area with scroll inside the bordered container */
          <div className="flex-1 flex flex-col gap-3 px-4 max-w-3xl mx-auto w-full pt-1">
            <div style={{ height: "auto" }}>
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "py-2 px-4 mb-2 w-fit rounded-lg flex flex-row gap-5 items-center text-sm",
                      message.role === "user" ? "bg-card" : "",
                    )}
                  >
                    {message.role === "user" ? (
                      <Avatar>
                        <AvatarImage
                          src="/static/image/aiUser.svg"
                          alt="user"
                        />
                      </Avatar>
                    ) : (
                      <Avatar>
                        <AvatarImage
                          src="/static/image/kozmos.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                    )}

                    {message.content}
                  </div>
                ))}
                <div ref={messagesEndRef} className="h-4" />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          className={cn(
            "mx-auto w-full z-[5]",
            messages.length === 0
              ? "flex flex-col items-center justify-center flex-1 pb-32"
              : "sticky bottom-0 pt-6",
          )}
        >
          <fieldset className="flex w-full min-w-0 flex-col">
            {messages.length === 0 && (
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium mb-2">Welcome Samet</h2>
                <p className="text-gray-500 mb-6">
                  Sana nasıl yardımcı olabilirim?
                </p>
              </div>
            )}
            <div className="flex flex-col bg-card border-0.5 border mx-2 md:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/3.5%)] focus-within:shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/7.5%)] hover:border-border-200 focus-within:border-border-200 z-10 rounded-2xl">
              <div className="relative">
                {" "}
                <textarea
                  ref={textareaRef}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    adjustHeight();
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Kozmos'a bir soru sorun..."
                  className="resize-none w-full h-full bg-transparent p-3 text-sm outline-none ring-0 placeholder:text-gray-500"
                  disabled={loading}
                />
              </div>

              <div className="flex items-center justify-end p-3">
                <Button type="button" variant={"ghost"} disabled={loading}>
                  <Paperclip className="w-4 h-4 text-gray-500 dark:text-white" />
                </Button>
                <Button
                  size={"sm"}
                  disabled={loading || !value.trim()}
                  onClick={handleSubmit}
                  type="button"
                >
                  {loading ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <ArrowUp className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="h-2 w-full"></div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
