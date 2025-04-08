import { Bug, CheckCircle2, Circle, Clock, MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Issue {
  id: string
  title: string
  type: "bug" | "task" | "story" | "epic"
  priority: "low" | "medium" | "high"
  assignee: string
  storyPoints: number
}

interface IssueCardProps {
  issue: Issue
}

export function IssueCard({ issue }: IssueCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "bug":
        return <Bug className="h-3 w-3 text-red-500" />
      case "task":
        return <CheckCircle2 className="h-3 w-3 text-blue-500" />
      case "story":
        return <Circle className="h-3 w-3 text-green-500" />
      case "epic":
        return <Clock className="h-3 w-3 text-purple-500" />
      default:
        return <Circle className="h-3 w-3" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-orange-500"
      case "low":
        return "text-green-500"
      default:
        return ""
    }
  }

  return (
    <Card className="p-3 hover:shadow-md transition-shadow bg-background">
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1">
            {getTypeIcon(issue.type)}
            <span className="text-xs font-medium text-muted-foreground">{issue.id}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-3 w-3" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Issue</DropdownMenuItem>
              <DropdownMenuItem>Assign Issue</DropdownMenuItem>
              <DropdownMenuItem>Change Status</DropdownMenuItem>
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-sm font-medium">{issue.title}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-[10px] h-5 px-1">
              {issue.storyPoints} pts
            </Badge>
            <span className={`text-xs ${getPriorityColor(issue.priority)}`}>
              {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
            </span>
          </div>
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-[10px]">{issue.assignee}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Card>
  )
}

