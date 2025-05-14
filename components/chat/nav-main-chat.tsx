"use client";
import {
  Collapsible,
} from "@/components/ui/collapsible";
import {
  Sidebar2Group,
  Sidebar2Menu,
  Sidebar2MenuButton,
  Sidebar2MenuItem,

} from "./chat-sideprovider";
import {  LucideIcon } from "lucide-react";


export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <Sidebar2Group>
     
      <Sidebar2Menu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <Sidebar2MenuItem>
              <Sidebar2MenuButton className="bg-card" tooltip={item.title}>
                {item.icon && <item.icon />}
                {item.title}
              </Sidebar2MenuButton>
            </Sidebar2MenuItem>
          </Collapsible>
        ))}
      </Sidebar2Menu>
    </Sidebar2Group>
  );
}
