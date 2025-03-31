"use client";

import * as React from "react";
import {
  BookOpen,
  Globe,
  LifeBuoy,
  Send,
  Palette,
  Smartphone,
  Bot,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Wep Aplications",
      url: "",
      icon: Globe,
      isActive: true,
      items: [
        {
          title: "3ddesign",
          url: "/products/web/design",
        },

        {
          title: "projectmanagment",
          url: "/products/web/projectmanagment",
        },
        {
          title: "ecommerce",
          url: "/products/web/e-commerce",
        },
        {
          title: "crm",
          url: "/products/web/crm",
        },
        {
          title: "erp",
          url: "/products/web/erp",
        },
      ],
    },
    {
      title: "Mobile",
      url: "/products/mobile",
      icon: Smartphone,
    },
    {
      title: "AI integration",
      url: "/products/ai-entegration",
      icon: BookOpen,
    },
    {
      title: "UI/UX Design",
      url: "/products/ui-ux",
      icon: Palette,
    },
    {
      title: "AI Agent",
      url: "/products/ai-agent",
      icon: Bot,
    },
  ],
  navSecondary: [
    {
      title: "Contact",
      url: "contact",
      icon: Send,
    },
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem></SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
