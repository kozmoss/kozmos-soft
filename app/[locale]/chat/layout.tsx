import { auth } from "@/app/api/(auth)/auth";
import { AppSidebar2 } from "@/components/chat/chat-sidebar";

import {
  Sidebar2Inset,
  Sidebar2Provider,
} from "@/components/chat/chat-sideprovider";
import { DataStreamProvider } from "@/components/data-stream-provider";
import { cookies } from "next/headers";
import Script from "next/script";
import { ReactNode } from "react";

export default async function ChatLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const isCollapsed = cookieStore.get("sidebar_state")?.value !== "true";
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <DataStreamProvider>
        <Sidebar2Provider defaultOpen={!isCollapsed}>
          <AppSidebar2 user={session?.user} />
          <Sidebar2Inset>{children}</Sidebar2Inset>
        </Sidebar2Provider>
      </DataStreamProvider>
    </>
  );
}
