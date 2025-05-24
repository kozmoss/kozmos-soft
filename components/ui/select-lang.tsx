"use client"
import { Locale, useLocale } from "next-intl";
import React from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useParams } from "next/navigation";

export function LocaleSwitcherSelect() {

  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onLocaleChange(nextLocale: string) {
    const locale = nextLocale as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale },
      );
    });
  }

  return (
    <Select  defaultValue={locale} onValueChange={onLocaleChange} disabled={isPending}>
    <SelectTrigger size="sm">
      <SelectValue placeholder={locale.toUpperCase()} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {routing.locales.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
  );
}
