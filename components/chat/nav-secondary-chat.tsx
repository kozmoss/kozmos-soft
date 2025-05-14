import * as React from "react"
import { type LucideIcon } from "lucide-react"

import {
  Sidebar2Group,
  Sidebar2GroupContent,
  Sidebar2Menu,
  Sidebar2MenuButton,
  Sidebar2MenuItem,
} from "./chat-sideprovider"  



export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof Sidebar2Group>) {
  return (
    <Sidebar2Group {...props}>
      <Sidebar2GroupContent>
        <Sidebar2Menu>
          {items.map((item) => (
            <Sidebar2MenuItem key={item.title}>
              <Sidebar2MenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </Sidebar2MenuButton>
            </Sidebar2MenuItem>
          ))}
        </Sidebar2Menu>
      </Sidebar2GroupContent>
    </Sidebar2Group>
  )
}
