"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"
import { useTranslations } from "next-intl"

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("Web.sidebar")

  const data = {
    navMain: [
      {
        title: t("navMain.dashboard"),
        url: "#",
        icon: LayoutDashboardIcon,
      },
      {
        title: t("navMain.lifecycle"),
        url: "#",
        icon: ListIcon,
      },
      {
        title: t("navMain.analytics"),
        url: "#",
        icon: BarChartIcon,
      },
      {
        title: t("navMain.projects"),
        url: "#",
        icon: FolderIcon,
      },
      {
        title: t("navMain.team"),
        url: "#",
        icon: UsersIcon,
      },
    ],
    navClouds: [
      {
        title: t("navClouds.capture"),
        icon: CameraIcon,
        isActive: true,
        url: "#",
        items: [
          {
            title: t("navClouds.activeProposals"),
            url: "#",
          },
          {
            title: t("navClouds.archived"),
            url: "#",
          },
        ],
      },
      {
        title: t("navClouds.proposal"),
        icon: FileTextIcon,
        url: "#",
        items: [
          {
            title: t("navClouds.activeProposals"),
            url: "#",
          },
          {
            title: t("navClouds.archived"),
            url: "#",
          },
        ],
      },
      {
        title: t("navClouds.prompts"),
        icon: FileCodeIcon,
        url: "#",
        items: [
          {
            title: t("navClouds.activeProposals"),
            url: "#",
          },
          {
            title: t("navClouds.archived"),
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: t("navSecondary.settings"),
        url: "#",
        icon: SettingsIcon,
      },
      {
        title: t("navSecondary.getHelp"),
        url: "#",
        icon: HelpCircleIcon,
      },
      {
        title: t("navSecondary.search"),
        url: "#",
        icon: SearchIcon,
      },
    ],
    documents: [
      {
        name: t("documents.dataLibrary"),
        url: "#",
        icon: DatabaseIcon,
      },
      {
        name: t("documents.reports"),
        url: "#",
        icon: ClipboardListIcon,
      },
      {
        name: t("documents.wordAssistant"),
        url: "#",
        icon: FileIcon,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">
                  {t("companyName")}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}