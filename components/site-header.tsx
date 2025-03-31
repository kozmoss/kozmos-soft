import { SearchForm } from "@/components/search-form";
import { NavigationMenuDemo } from "@/layout/navbar";
import { ThemeToggle } from "./model-toggle";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4 justify-between">
        <NavigationMenuDemo />
        <div className="flex flex-row gap-5">
          <ThemeToggle />
          <LanguageSwitcher />
          <SearchForm className="w-full sm:ml-auto sm:w-auto" />
        </div>
      </div>
    </header>
  );
}
