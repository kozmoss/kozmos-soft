import type { Metadata } from "next";
import { PlusCircle, Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KanbanBoard } from "@/components/board/kanban-board";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/__registry__/components/app-sidebar";
import { SiteHeader } from "@/__registry__/components/site-header";

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "Manage your issues with a kanban board",
};

export default function BoardPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Board" />
        <div className="flex flex-1 flex-col  overflow-hidden">
          <div className="@container/main flex flex-1 flex-col gap-2 ">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                    
                      <p className="text-muted-foreground">
                        Current Sprint: Sprint #24 (April 5 - April 19)
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create Issue
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 items-center gap-2">
                      <div className="relative flex-1 md:max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search issues..."
                          className="pl-8"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="current">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Sprint" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">
                            Current Sprint
                          </SelectItem>
                          <SelectItem value="backlog">Backlog</SelectItem>
                          <SelectItem value="previous">
                            Previous Sprint
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Filter by Assignee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Assignees</SelectItem>
                          <SelectItem value="me">Assigned to Me</SelectItem>
                          <SelectItem value="unassigned">Unassigned</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <KanbanBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
