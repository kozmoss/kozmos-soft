"use client";

import * as React from "react";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const locales = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  ];

  const currentLocaleItem = locales.find((l) => l.code === locale) || locales[0];

  const onLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        { locale: newLocale }
      );
    });
  };

  return (
    <DropdownMenu >
      <DropdownMenuTrigger disabled={isPending} asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Globe className="text-gray-500" size={16} />
          <span className="mr-1">{currentLocaleItem.flag}</span>
          {currentLocaleItem.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((localeItem) => (
          <DropdownMenuItem
            key={localeItem.code}
            onSelect={() => onLocaleChange(localeItem.code)}
            className="flex items-center gap-2"
          >
            <span>{localeItem.flag}</span>
            {localeItem.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}