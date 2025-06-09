"use client";

import * as React from "react";
import { CirclePlus } from "lucide-react";

import { NavMain } from "../chat/nav-main-chat";

import {
  Sidebar2,
  Sidebar2Content,
  Sidebar2Footer,
  Sidebar2Header,
} from "./chat-sideprovider";
import { NavUser } from "./nav-user-chat";
import { SidebarHistory } from "../sidebar-history";
import { TeamSwitcher } from "./teamSwitcher";
import { User } from "next-auth";

const data = {
  navMain: [
    {
      title: "New Chat",
      url: "/chat",
      icon: CirclePlus,
      isActive: true,
    },
  ],
};

export function AppSidebar2({ user }: { user: User | undefined }) {
  return (
    <Sidebar2 className="group-data-[side=left]:border-r-1 border border-dashed">
      <Sidebar2Header>
        <TeamSwitcher />
      </Sidebar2Header>
      <Sidebar2Content>
        <NavMain items={data.navMain} />
        <SidebarHistory user={user} />
      </Sidebar2Content>
      <Sidebar2Footer>{user && <NavUser user={user} />}</Sidebar2Footer>
    </Sidebar2>
  );
}
