"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import kozmosPNG from "@/public/static/image/kozmos.png";
import kozmosDark from "@/public/static/image/darkKozmos.png"
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function MainNav() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Image src={kozmosDark} className="dark:hidden block" height={30} width={60} alt="" />
        <Image src={kozmosPNG} className="hidden dark:block" height={30} width={60} alt="" />
        <span className="hidden font-bold lg:inline-block">KozmosSoft</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/products/web"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products/web")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {t("web")}
        </Link>
        <Link
          href="/mobile"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products/mobile") ||
              pathname?.startsWith("/mobile")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {t("mobile")}
        </Link>
        <Link
          href="/ai"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/ai")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {t("ai")}
        </Link>
        <Link
          href="/about-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about-us")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {t("aboutUs")}
        </Link>
        <Link
          href="/contact-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact-us")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {t("contactUs")}
        </Link>
      </nav>
    </div>
  );
}