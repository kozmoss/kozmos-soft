"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import kozmosPNG from "@/public/static/image/kozmos.png";
import kozmosDark from "@/public/static/image/darkKozmos.png";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Button } from "./button";
import { docsConfig } from "@/config/docs";

export function MainNav({ className, ...props }: React.ComponentProps<"nav">) {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  return (
    <nav className={cn("items-center gap-0.5", className)} {...props}>
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Image
          src={kozmosDark}
          className="dark:hidden block"
          height={30}
          width={60}
          alt=""
        />
        <Image
          src={kozmosPNG}
          className="hidden dark:block"
          height={30}
          width={60}
          alt=""
        />
        <span className="hidden font-bold lg:inline-block">KozmosSoft</span>
      </Link>
      {docsConfig.mainNav.slice(1).map((item) => (
        <Button key={item.href} variant="ghost" asChild size="sm">
          <Link
            href={item.href}
            className={cn(pathname === item.href && "text-primary")}
          >
            {t(item.title)}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
