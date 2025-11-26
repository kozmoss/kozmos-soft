import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "dashboard",
      href: "/",
    },
    {
      title: "ai",
      href: "/ai",
    },
    {
      title: "plant-disease&pest-detection",
      href: "/plant-disease&pest-detection",
    },
    {
      title: "aboutUs",
      href: "/about-us",
    },
    {
      title: "contactUs",
      href: "/contact-us",
    },
  ],
  sidebarNav: [
    {
      title: "Wep Aplications",
      href: "",
      items: [
        {
          title: "3ddesign",
          href: "/products/web/design",
          items: [],
        },

        {
          title: "projectmanagment",
          href: "/products/web/projectmanagment",
          items: [],
        },
        {
          title: "ecommerce",
          href: "/products/web/e-commerce",
          items: [],
        },
        {
          title: "crm",
          href: "/products/web/crm",
          items: [],
        },
        {
          title: "erp",
          href: "/products/web/erp",
          items: [],
        },
      ],
    },
    {
      title: "Mobile Application",
      items: [
        { title: "Mobile Application", href: "/products/mobile", items: [] },
      ],
    },
    {
      title: "AI",
      items: [
        {
          title: "Ai-entegration",
          href: "/products/ai-entegration",
          items: [],
        },
        { title: "AI Agent", href: "/products/ai-agent", items: [] },
      ],
    },
  ],
};
