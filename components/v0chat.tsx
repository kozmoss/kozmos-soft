"use client";

import type React from "react";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpIcon, Paperclip } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  const CodeBlock = ({
    language,
    value,
  }: {
    language: string;
    value: string;
  }) => {
    return (
      <SyntaxHighlighter
        language={language || "javascript"}
        style={vscDarkPlus}
        className="rounded-md my-2"
      >
        {value}
      </SyntaxHighlighter>
    );
  };

  return (
    <div
      className={cn(
        "flex h-screen",
        messages.length === 0 ? "items-center justify-center" : "flex-col",
      )}
    >
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 w-full">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "p-4 rounded-lg shadow-sm flex gap-5 ",
                  message.role === "user"
                    ? "bg-card items-center text-black dark:text-white"
                    : "bg-white dark:bg-neutral-900 text-black dark:text-white",
                )}
              >
                <Avatar>
                  <AvatarImage
                    src={
                      message.role === "user"
                        ? "/static/image/aiUser.svg"
                        : "/static/image/kozmos.png"
                    }
                  />
                </Avatar>

                {message.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      code: ({ inline, className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <CodeBlock
                            language={match[1]}
                            value={String(children).replace(/\n$/, "")}
                            {...props}
                          />
                        ) : (
                          <code
                            className="bg-gray-200 px-1 py-0.5 rounded"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  <p className="whitespace-pre-wrap">{message.content}</p>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input area */}
      <div className={"p-4 w-full mx-auto max-w-4xl"}>
        {messages.length === 0 && (
          <div className="text-center mb-4 text-gray-400">
            Nasıl yardımcı olabilirim?
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-background-subtle border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
        >
          <div className=" bg-background-subtle relative z-10 grid min-h-[100px] rounded-xl">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask Kozmos a question..."
              className="resize-none w-full h-full bg-transparent p-3 text-sm outline-none ring-0 placeholder:text-gray-500"
              disabled={loading}
            />
            <div className="flex items-center justify-end p-3">
              <button
                type="button"
                disabled={loading}
                className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <Paperclip className="w-4 h-4 text-gray-500 dark:text-white" />
              </button>
              <Button
                className="ml-2"
                size="icon"
                disabled={loading || !value.trim()}
                type="submit"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <ArrowUpIcon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
