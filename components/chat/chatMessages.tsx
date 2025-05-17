"use client"
import { Message } from "@/types/chat";
import React, { useRef } from "react";
import MessageItem from "./chatMessageItem";
import { Skeleton } from "../ui/skeleton";

interface ChatMessagesProps {
  messages: Message[];
  isLoading?: boolean;
}

export default function ChatMessages({
  messages,
  isLoading = false,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col gap-3 px-4 max-w-3xl mx-auto w-full pt-1">
      <div style={{ height: "auto" }}>
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>
    </div>
  );
}
