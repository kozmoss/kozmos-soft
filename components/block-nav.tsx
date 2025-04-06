"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

import { ScrollArea, ScrollBar } from "./ui/scroll-area";

import { registryCategories } from "@/contants/web";

export function BlocksNav() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center">
          <BlocksNavLink
            category={{ name: "E Commerce", slug: "e-commerce", hidden: false }}
            isActive={pathname === `/${locale}/products/web/e-commerce`}
          />
          {registryCategories.map((category) => (
            <BlocksNavLink
              key={category.slug}
              category={category}
              isActive={pathname === `/${locale}/products/web/${category.slug}`}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

function BlocksNavLink({
  category,
  isActive,
}: {
  category: (typeof registryCategories)[number];
  isActive: boolean;
}) {
  if (category.hidden) {
    return null;
  }

  return (
    <Link
      href={`/products/web/${category.slug}`}
      key={category.slug}
      className="flex h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
      data-active={isActive}
    >
      {category.name}
    </Link>
  );
}
