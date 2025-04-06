"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import kozmosPNG from "@/public/image/kozmos.png";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Image src={kozmosPNG} height={30} width={60} alt="" />
        <span className="hidden font-bold lg:inline-block">KozmosSoft</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/products/web"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products/web")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Web
        </Link>
        <Link
          href="/mobile"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products/mobile") ||
              pathname?.startsWith("/mobile")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Mobile
        </Link>
        <Link
          href="/design"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/design")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          AI
        </Link>
        <Link
          href="/ai"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/ai")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          AI
        </Link>
        <Link
          href="/about-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about-us")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          About Us
        </Link>
      </nav>
    </div>
  );
}
