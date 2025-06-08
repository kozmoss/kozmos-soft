import { CommandMenu } from "@/components/command-menu";
import { MainNav } from "./ui/main-nav";
import { MobileNav } from "./ui/mobile-nav";
import { ThemeToggle } from "./model-toggle";
import { LocaleSwitcherSelect } from "./ui/select-lang";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 border-b bg-background ">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
      <div className="3xl:fixed:container flex h-14 items-center gap-2 **:data-[slot=separator]:!h-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 gap-3 md:flex md:w-auto md:flex-none">
              <CommandMenu />
              <LocaleSwitcherSelect />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
