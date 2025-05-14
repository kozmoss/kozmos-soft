"use client";

import { MoreHorizontal, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar2Group,
  Sidebar2GroupLabel,
  Sidebar2Menu,
  Sidebar2MenuAction,
  Sidebar2MenuItem,
  useSidebar2,
  Sidebar2MenuButton,
} from "./chat-sideprovider";

export function NavProjects2({
  projects,
}: {
  projects: {
    name: string;
    url: string;
  }[];
}) {
  const { isMobile } = useSidebar2();

  return (
    <Sidebar2Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar2GroupLabel>Recent</Sidebar2GroupLabel>
      <Sidebar2Menu>
        {projects.map((item) => (
          <Sidebar2MenuItem key={item.name}>
            <Sidebar2MenuButton asChild>
              <a href={item.url}>
                <span>{item.name}</span>
              </a>
            </Sidebar2MenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Sidebar2MenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </Sidebar2MenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Sidebar2MenuItem>
        ))}
      </Sidebar2Menu>
    </Sidebar2Group>
  );
}
