import { MoreHorizontal, Mail, Phone } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface TeamMembersProps {
  extended?: boolean
}

export function TeamMembers({ extended = false }: TeamMembersProps) {
  const members = [
    {
      name: "John Doe",
      initials: "JD",
      role: "Project Manager",
      email: "john@example.com",
      phone: "+1 234 567 890",
      status: "Active",
    },
    {
      name: "Alice Smith",
      initials: "AS",
      role: "Developer",
      email: "alice@example.com",
      phone: "+1 234 567 891",
      status: "Active",
    },
    {
      name: "Tom King",
      initials: "TK",
      role: "Designer",
      email: "tom@example.com",
      phone: "+1 234 567 892",
      status: "Away",
    },
    {
      name: "Sarah Johnson",
      initials: "SJ",
      role: "Marketing",
      email: "sarah@example.com",
      phone: "+1 234 567 893",
      status: "Active",
    },
    {
      name: "Mike Brown",
      initials: "MB",
      role: "Developer",
      email: "mike@example.com",
      phone: "+1 234 567 894",
      status: "Offline",
    },
  ]

  return (
    <div className="space-y-4">
      {members.map((member, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{member.name}</div>
              <div className="text-xs text-muted-foreground">{member.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {extended && (
              <>
                <Badge
                  variant={member.status === "Active" ? "default" : member.status === "Away" ? "outline" : "secondary"}
                >
                  {member.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Send Message</DropdownMenuItem>
                <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

