import { AppSidebar } from "@/__registry__/components/app-sidebar";
import { ErmDashboardPage } from "@/__registry__/components/erp-section";
import { SiteHeader } from "@/__registry__/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function ErpPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="@container/page flex flex-1 flex-col gap-8 p-6">
                <div className="flex flex-1 flex-col">
                  <ErmDashboardPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
