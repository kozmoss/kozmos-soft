import { AppSidebar } from "./components/app-sidebar";
import React from "react";
import { SidebarInset, SidebarProvider } from "./components/sidebar";
import { SiteHeader } from "./components/site-header";

export default function WebLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      <SidebarProvider>
        <AppSidebar collapsible="none" />
        <SidebarInset>
          <SiteHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
