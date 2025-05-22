import { auth } from "@/app/api/(auth)/auth";
import { AppSidebar2 } from "@/components/chat/chat-sidebar";

import {
  Sidebar2Inset,
  Sidebar2Provider,
} from "@/components/chat/chat-sideprovider";
import { ReactNode } from "react";

export default async function ChatLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [session] = await Promise.all([auth()]);
  return (
    <Sidebar2Provider>
      <AppSidebar2 user={session?.user} />
      <Sidebar2Inset>{children}</Sidebar2Inset>
    </Sidebar2Provider>
  );
}
