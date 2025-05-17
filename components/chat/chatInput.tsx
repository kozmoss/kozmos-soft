"use client"
import { Paperclip, ArrowUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

interface ChatInputProps {
  chatId?: string;
  messages: Message[];
}

export default function ChatInput({ chatId, messages }: ChatInputProps) {
  const t = useTranslations("Chat");
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    try {
      setIsLoading(true);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim(), chatId }),
      });

      if (!response.ok) {
        throw new Error("Mesaj gönderilemedi");
      }

      const data = await response.json();

      // Eğer yeni bir sohbet ise, ilgili sohbet sayfasına yönlendir
      if (!chatId && data.chatId) {
        router.push(`/chat/${data.chatId}`);
      } else {
        router.refresh();
      }

      setInput("");
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
            <h2 className="text-xl font-medium mb-2">{` ${t("welcome")} ${
              session?.user?.name?.split(" ")[0]
            }!`}</h2>
            <p className="text-gray-500 mb-6">{t("helpyou")}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col bg-card border-0.5 border mx-2 md:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/3.5%)] focus-within:shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/7.5%)] hover:border-border-200 focus-within:border-border-200 z-10 rounded-2xl">
            <div className="relative">
              <textarea
                value={input}
                placeholder={t("question")}
                onChange={(e) => setInput(e.target.value)}
                className="resize-none w-full h-full bg-transparent p-3 text-sm outline-none ring-0 placeholder:text-gray-500"
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
            </div>

            <div className="flex items-center justify-end p-3">
              <Button type="button" variant={"ghost"} disabled={isLoading}>
                <Paperclip className="w-4 h-4 text-gray-500 dark:text-white" />
              </Button>
              <Button
                size={"sm"}
                disabled={isLoading || !input.trim()}
                onClick={handleSubmit}
                type="button"
              >
                {isLoading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <ArrowUp className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </form>
        <div className="h-2 w-full"></div>
      </fieldset>
    </div>
  );
}
