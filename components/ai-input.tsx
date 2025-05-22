// app/page.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { BorderTrail } from "./border-beam";
import { useRouter } from "@/i18n/navigation";
import { LoginDialog } from "./chat/login-google-dialog";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    router.push("chat");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full flex flex-col h-full justify-center items-center">
      <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
      <div className="mb-5 text-3xl text-muted-foreground">
        What can I help with?
      </div>

      <form
        onSubmit={handleSubmit}
        className={"rounded-3xl  p-2 shadow-xs relative w-full max-w-md"}
      >
        <div className="flex flex-col bg-card border-0.5 border mx-2 md:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/3.5%)] focus-within:shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/7.5%)] hover:border-border-200 focus-within:border-border-200 z-10 rounded-2xl">
          <BorderTrail
            className="bg-gradient-to-l rounded-3xl from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            size={150}
          />
          <div className="">
            {" "}
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Kozmos'a bir soru sorun..."
              className="resize-none w-full h-full bg-transparent p-3 text-sm outline-none ring-0 placeholder:text-gray-500"
            />
          </div>

          <div className="flex items-center justify-end p-3">
            <Button type="button" variant={"ghost"}>
              <Paperclip className="w-4 h-4 text-gray-500 dark:text-white" />
            </Button>
            <Button size={"sm"} onClick={handleSubmit} type="button"></Button>
          </div>
        </div>
      </form>
    </div>
  );
}
