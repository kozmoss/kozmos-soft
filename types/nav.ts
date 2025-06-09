import { Icons } from "@/components/ui/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MainNavItem extends NavItem {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SidebarNavItem extends NavItemWithChildren {}


export interface MainNavItem {
  title: string;
  href: string;
}

export interface SidebarNavItem {
  title: string;
  href?: string; // opsiyonel çünkü bazı item'larda yok
  items: SidebarNavItem[]; // recursive yapı
}