"use client";

import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import ReactMarkdown from "react-markdown";

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const { data: session } = useSession();
  const user = session?.user;

  const isUser = message.role === "user";

  return (
    <div className={"flex rounded-2xl "}>
      <div
        className={cn("flex gap-4 pl-2.5  py-2.5 pr-6 rounded-2xl ", isUser ? "bg-card" : "")}
      >
        {isUser ? (
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
            <AvatarFallback>
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Avatar className="h-8 w-8">
            <AvatarImage src={"/static/image/kozmos.png"} alt={"kozmos"} />
          </Avatar>
        )}
        <div className="min-w-0">
          <div className="prose dark:prose-invert max-w-none break-words">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
