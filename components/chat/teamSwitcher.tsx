"use client";

import * as React from "react";

import Image from "next/image";

import {
  Sidebar2Menu,
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
        <div
       
          className="flex flex-row items-center justify-center gap-1"
        >
          <div className="flex aspect-square  items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Image src={teams.src} height={48} width={48} alt={"kozmos"} />
          </div>
          <div className="grid flex-1 text-left font-extrabold ">
            <span className="truncate ">{teams.name}</span>
          </div>
        </div>
      </Sidebar2MenuItem>
    </Sidebar2Menu>
  );
}
