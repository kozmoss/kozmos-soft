
import React from "react";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/__registry__/components/app-sidebar";
import { SiteHeader } from "@/__registry__/components/site-header";
import CrmDashboard from "@/__registry__/components/tabs-crm";

export default function CrmPage() {
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
                  <CrmDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}



