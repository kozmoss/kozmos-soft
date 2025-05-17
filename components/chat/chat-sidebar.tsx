"use client";

import * as React from "react";
import { CirclePlus, GalleryVerticalEnd } from "lucide-react";

import { NavMain } from "../chat/nav-main-chat";

import {
  Sidebar2,
  Sidebar2Content,
  Sidebar2Footer,
  Sidebar2Header,
} from "./chat-sideprovider";
import { NavUser } from "./nav-user-chat";
import { NavProjects2 } from "./nav-project";
import { TeamSwitcher } from "./teamSwitcher";
import { useSession } from "next-auth/react";

const data = {
  teams: {
    name: "Kozmos",
    logo: GalleryVerticalEnd,
    src: "/static/image/kozmos.png",
  },

  navMain: [
    {
      title: "newChat",
      url: "/chat",
      icon: CirclePlus,
      isActive: true,
    },
  ],
};

export function AppSidebar2({
  ...props
}: React.ComponentProps<typeof Sidebar2>) {
  const { data: session } = useSession();

  return (
    <Sidebar2 collapsible="icon" {...props}>
      <Sidebar2Header>
        <TeamSwitcher teams={data.teams} />
      </Sidebar2Header>
      <Sidebar2Content>
        <NavMain items={data.navMain} />
        <NavProjects2 />
      </Sidebar2Content>
      <Sidebar2Footer>
        {session?.user && <NavUser user={session.user} />}
      </Sidebar2Footer>
    </Sidebar2>
  );
}
