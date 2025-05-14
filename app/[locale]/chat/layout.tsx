import { AppSidebar2 } from "@/components/chat/chat-sidebar";

import {
  Sidebar2Inset,
  Sidebar2Provider,
  Sidebar2Trigger,
} from "@/components/chat/chat-sideprovider";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <Sidebar2Provider>
      <AppSidebar2 />
      <Sidebar2Inset>
        <Sidebar2Trigger className="p-4 m-3"/>
      </Sidebar2Inset>

      <div className="h-screen flex flex-col overflow-hidden w-full">
        <div className="flex min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </Sidebar2Provider>
  );
}
