import * as React from "react";

import Textarea from "react-textarea-autosize";
import { UseChatHelpers } from "ai/react";



import { Button } from "@/components/ui/button";

import { ArrowUp, Paperclip } from "lucide-react";

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "setInput"> {
  onSubmit: (value: string) => Promise<void>;
  isLoading: boolean;
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
}: PromptProps) {

  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput("");
        await onSubmit(input);
      }}
      ref={formRef}
    >
      <div className="flex flex-col bg-card border-0.5 border mx-2 md:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/3.5%)] focus-within:shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/7.5%)] hover:border-border-200 focus-within:border-border-200 z-10 rounded-2xl">
        <div className="relative">
          <Textarea
            ref={inputRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message."
            spellCheck={false}
            className="min-h-[60px] w-full resize-none bg-transparent px-4  py-[1.3rem] focus-within:outline-none sm:text-sm"
          />
        </div>
        <div className="flex items-center justify-end p-3">
          <Button type="button" variant={"ghost"} disabled={isLoading}>
            <Paperclip className="w-4 h-4 text-gray-500 dark:text-white" />
          </Button>
          <Button
            size={"sm"}
            disabled={isLoading || !input.trim()}
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
  );
}
