"use client";

import * as React from "react";

import Image from "next/image";

import {
  Sidebar2Menu,
  Sidebar2MenuButton,
  Sidebar2MenuItem,
} from "./chat-sideprovider";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    src: string;
  };
}) {
  if (!teams) {
    return null;
  }

  return (
    <Sidebar2Menu>
      <Sidebar2MenuItem>
        <Sidebar2MenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Image src={teams.src} height={24} width={24} alt={"kozmos"} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{teams.name}</span>
          </div>
        </Sidebar2MenuButton>
      </Sidebar2MenuItem>
    </Sidebar2Menu>
  );
}
