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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Kozmos",
    logo: GalleryVerticalEnd,
    src: "/static/image/kozmos.png",
  },

  navMain: [
    {
      title: "New Chat",
      url: "#",
      icon: CirclePlus,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
    },
    {
      name: "Sales & Marketing",
      url: "#",
    },
    {
      name: "Travel",
      url: "#",
    },
  ],
};

export function AppSidebar2({
  ...props
}: React.ComponentProps<typeof Sidebar2>) {
  return (
    <Sidebar2 collapsible="icon" {...props}>
      <Sidebar2Header>
        <TeamSwitcher teams={data.teams} />
      </Sidebar2Header>
      <Sidebar2Content>
        <NavMain items={data.navMain} />
        <NavProjects2 projects={data.projects} />
      </Sidebar2Content>
      <Sidebar2Footer>
        <NavUser user={data.user} />
      </Sidebar2Footer>
    </Sidebar2>
  );
}
