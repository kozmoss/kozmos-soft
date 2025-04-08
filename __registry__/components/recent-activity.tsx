import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      user: "John Doe",
      userInitials: "JD",
      action: "completed a task",
      project: "Website Redesign",
      time: "2 hours ago",
    },
    {
      user: "Alice Smith",
      userInitials: "AS",
      action: "added a comment",
      project: "Mobile App Development",
      time: "3 hours ago",
    },
    {
      user: "Tom King",
      userInitials: "TK",
      action: "created a new task",
      project: "Marketing Campaign",
      time: "5 hours ago",
    },
    {
      user: "John Doe",
      userInitials: "JD",
      action: "updated project status",
      project: "Website Redesign",
      time: "1 day ago",
    },
    {
      user: "Alice Smith",
      userInitials: "AS",
      action: "uploaded a file",
      project: "Mobile App Development",
      time: "1 day ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, i) => (
        <div key={i} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{activity.userInitials}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <div>
              <span className="font-medium">{activity.user}</span>{" "}
              <span className="text-muted-foreground">{activity.action}</span>
            </div>
            <div className="text-xs">
              <span className="font-medium">{activity.project}</span>{" "}
              <span className="text-muted-foreground">• {activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

