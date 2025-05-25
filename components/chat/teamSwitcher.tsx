"use client";

import * as React from "react";

import Image from "next/image";

import { Sidebar2Menu, Sidebar2MenuItem } from "./chat-sideprovider";

export function TeamSwitcher() {
  return (
    <Sidebar2Menu>
      <Sidebar2MenuItem>
        <div className="flex flex-row items-center justify-center gap-1">
          <div className="flex aspect-square  items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Image
              src={"/static/image/kozmos.png"}
              height={48}
              width={48}
              alt={"kozmos"}
              className="hidden dark:block"
            />
            <Image
              src={"/static/image/darkKozmos.png"}
              className="dark:hidden"
              height={48}
              width={48}
              alt={"kozmos"}
            />
          </div>
          <div className="grid flex-1 text-left font-extrabold ">
            <span className="truncate ">Kozmos</span>
          </div>
        </div>
      </Sidebar2MenuItem>
    </Sidebar2Menu>
  );
}
