import React from 'react'
import { InventoryPageComponent } from '@/__registry__/components/inventorypage'
import { AppSidebar } from '@/__registry__/components/app-sidebar'

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { SiteHeader } from '@/__registry__/components/site-header'

export default function InventoryPage() {
  return (
<SidebarProvider>
<AppSidebar variant="inset" />
<SidebarInset>
  <SiteHeader title='Inventory Management' />
  <div className="flex flex-1 flex-col">
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="@container/page flex flex-1 flex-col gap-8 p-6">
          <div className="flex flex-1 flex-col">
          <InventoryPageComponent/>
          </div>
        </div>
      </div>
    </div>
  </div>
</SidebarInset>
</SidebarProvider>
  )
}


