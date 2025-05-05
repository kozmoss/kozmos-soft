"use client";
import { useTranslations } from "next-intl"; // veya kullandığın i18n hook
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



export default function BoardPage() {
  const t = useTranslations("Web.projectManager");

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title={t("siteHeaderTitle")} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-muted-foreground">
                        {t("currentSprintLabel")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        {t("createIssue")}
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 items-center gap-2">
                      <div className="relative flex-1 md:max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder={t("searchPlaceholder")}
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
                          <SelectValue placeholder={t("selectSprintPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">
                            {t("currentSprint")}
                          </SelectItem>
                          <SelectItem value="backlog">{t("backlog")}</SelectItem>
                          <SelectItem value="previous">
                            {t("previousSprint")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder={t("filterByAssignee")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t("allAssignees")}</SelectItem>
                          <SelectItem value="me">{t("assignedToMe")}</SelectItem>
                          <SelectItem value="unassigned">{t("unassigned")}</SelectItem>
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
