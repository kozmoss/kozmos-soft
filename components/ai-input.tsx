"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp, Paperclip } from "lucide-react";
import { BorderTrail } from "./border-beam";
import { useRouter } from "@/i18n/navigation";

export default function ChatPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("chat");
  };

  return (
    <div className="w-full flex flex-col h-full justify-center items-center">
      <div className="mb-5 text-3xl text-muted-foreground">
        What can I help with?
      </div>

      <div
        onClick={handleClick}
        className="rounded-3xl p-2 w-[1440px] relative max-w-md cursor-pointer"
      >
        <div className="flex flex-col bg-card border-0.5 border mx-2 md:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/3.5%)] hover:shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/7.5%)] hover:border-border-200 z-10 rounded-2xl">
          <BorderTrail
            className="bg-gradient-to-l rounded-3xl from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            size={150}
          />
          <div className="">
            <div className="resize-none w-full h-full bg-transparent p-3 text-sm outline-none ring-0 text-gray-500">
              Kozmos&apos;a bir soru sorun...
            </div>
          </div>

          <div className="flex items-center justify-end p-3">
            <Button type="button" variant={"ghost"}>
              <Paperclip className="w-4 h-4 text-gray-500 dark:text-white" />
            </Button>
            <Button size={"sm"} type="button">
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
