import { AppSidebar } from "@/components/app-sidebar";


import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex  w-full overflow-x-hidden">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-background rounded-lg w-full relative">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 " />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
        
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
