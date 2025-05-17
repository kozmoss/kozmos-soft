"use client";

import { useState, useEffect } from "react";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
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
import { Chat } from "@/types/chat";
import { deleteChat, getUserChats } from "@/lib/chat-service";

export function NavProjects2({}) {
  const { isMobile } = useSidebar2();
  const { data: session } = useSession();
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      if (!session?.user?.id) return;
      try {
        const fetchedChats = await getUserChats(session.user.id);
        setChats(fetchedChats);
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [session]);

  return (
    <Sidebar2Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar2GroupLabel>Recent</Sidebar2GroupLabel>
      <Sidebar2Menu>
        {loading ? (
          <div className="px-2 py-1 text-sm text-muted-foreground">
            Loading...
          </div>
        ) : chats.length > 0 ? (
          chats.map((chat) => (
            <Sidebar2MenuItem key={chat.id}>
              <Sidebar2MenuButton asChild>
                <a href={`/chat/${chat.id}`}>
                  <span>{chat.title}</span>
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
                  onClick={() =>
                    deleteChat({ chatId: chat.id, userId: session?.user?.id })
                  }
                  className="w-48 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuItem>
                    <Trash2 className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Sidebar2MenuItem>
          ))
        ) : (
          <div className="px-2 py-1 text-sm text-muted-foreground">
            No recent chats
          </div>
        )}
      </Sidebar2Menu>
    </Sidebar2Group>
  );
}
