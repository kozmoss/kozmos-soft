"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, ArrowUp, Paperclip } from "lucide-react";
import { MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import { BorderTrail } from "../border-beam";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;

  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({ badge, title }: HeroProps) {
  const t = useTranslations("Dashboard");
  const router = useRouter();

  const handleClick = async () => {
    const response = await fetch("/api/auth/session");
    const session = await response.json();

    if (session?.user) {
      router.push("/chat");
    } else {
      window.location.href = "/api/auth/guest?redirectUrl=/chat";
    }
  };

  return (
    <section
      className={cn(
        "text-foreground h-full dark",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
      )}
    >
      <div className="mx-auto flex max-w-none flex-col gap-12 pt-16 sm:gap-24 px-4">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300"></div>
          </div>

          {/* Image with Glow */}
          <div className="relative pt-12 w-full max-w-none">
            <MockupFrame
              className="animate-appear opacity-0 delay-700 w-full max-w-none"
              size="large"
            >
              <div
                onClick={handleClick}
                className="rounded-3xl p-2 shadow-xs relative w-full max-w-5xl mx-auto h-auto min-h-[180px] sm:min-h-[200px] cursor-pointer"
              >
                <div className="flex flex-col w-full h-full bg-card border-0.5 border mx-2 md:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/3.5%)] hover:shadow-[0_0.25rem_1.25rem_hsl(var(--always-black)/7.5%)] hover:border-border-200 z-10 rounded-2xl">
                  <BorderTrail
                    className="bg-gradient-to-l rounded-3xl from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                    size={150}
                  />
                  <div className="flex-1 p-4">
                    <div className="resize-none w-full h-full bg-transparent text-base outline-none ring-0 text-gray-500 flex items-start">
                      {t("sendMessage")}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 p-4 pt-0">
                    <Button type="button" variant={"ghost"} size="sm">
                      <Paperclip className="w-4 h-4 text-white" />
                    </Button>
                    <Button size={"sm"} type="button">
                      <ArrowUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
