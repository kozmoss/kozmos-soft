"use client";

import Image from "next/image"; // For the company logo
import { Button } from "../ui/button";

export function SiteHeader() {
  return (
    <header className="flex h-14 shrink-0 z-50 items-center justify-between gap-3 px-3 py-2 mt-2 sm:h-11 sm:px-2">
      {/* Company Logo on the left */}
      <div className="flex min-w-0 flex-1 items-center pl-4">
        <Image
          src="/static/image/kozmos.png" // Replace with the actual path to your logo
          alt="Company Logo"
          width={32}
          height={36}
          className="object-contain"
        />
      </div>

      {/* Avatar on the right */}
      <div className="flex flex-1 items-center justify-end gap-2 pr-3">
        <Button
          size="sm"
          className="relative overflow-hidden w-7 h-7 rounded-full p-0"
          variant="ghost"
        >
          <Image
            fill
            src="/static/image/aiUser.svg"
            alt="User Avatar"
            className="object-cover"
          />
        </Button>
      </div>
    </header>
  );
}
