import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Web",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Colors",
      href: "/colors",
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
      items: [{ title: "Mobile Application", href: "/products/mobile", items: [] }],
    },
    {
      title: "AI",
      items: [
        { title:"Ai-entegration",
          href: "/products/ai-entegration",
         items:[]},
        {   title: "AI Agent",
          href: "/products/ai-agent",
          items: [],}
      ],
    },
    {
      title: "UI/UX Design",
      items: [
       { href: "/products/ui-ux",
         title:"Designs",
         items:[]
       }
      ],
    },
  ],

  chartsNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/charts",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/charts/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/charts/theming",
          items: [],
        },
      ],
    },
    {
      title: "Charts",
      items: [
        {
          title: "Area Chart",
          href: "/docs/charts/area",
          items: [],
        },
        {
          title: "Bar Chart",
          href: "/docs/charts/bar",
          items: [],
        },
        {
          title: "Line Chart",
          href: "/docs/charts/line",
          items: [],
        },
        {
          title: "Pie Chart",
          href: "/docs/charts/pie",
          items: [],
        },
        {
          title: "Radar Chart",
          href: "/docs/charts/radar",
          items: [],
        },
        {
          title: "Radial Chart",
          href: "/docs/charts/radial",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Tooltip",
          href: "/docs/charts/tooltip",
          items: [],
        },
        {
          title: "Legend",
          href: "/docs/charts/legend",
          items: [],
        },
      ],
    },
  ],
};
