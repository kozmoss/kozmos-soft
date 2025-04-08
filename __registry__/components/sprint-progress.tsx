import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SprintProgress() {
  const issues = [
    {
      id: "PROJ-120",
      title: "Fix login page responsiveness",
      type: "bug",
      priority: "high",
      assignee: "AS",
      status: "in-progress",
    },
    {
      id: "PROJ-118",
      title: "Add product search functionality",
      type: "story",
      priority: "high",
      assignee: "AS",
      status: "review",
    },
    {
      id: "PROJ-121",
      title: "Implement product filtering",
      type: "story",
      priority: "medium",
      assignee: "JD",
      status: "in-progress",
    },
    {
      id: "PROJ-115",
      title: "Setup project repository",
      type: "task",
      priority: "high",
      assignee: "JD",
      status: "done",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Sprint Progress</span>
          <span className="font-medium">65%</span>
        </div>
        <Progress value={65} />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Recent Issues</h3>
        <div className="space-y-2">
          {issues.map((issue) => (
            <div key={issue.id} className="flex items-center justify-between rounded-md border p-2">
              <div className="flex items-center gap-2">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-muted-foreground">{issue.id}</span>
                    <Badge
                      variant={
                        issue.status === "done" ? "default" : issue.status === "review" ? "outline" : "secondary"
                      }
                      className="text-[10px]"
                    >
                      {issue.status === "in-progress" ? "In Progress" : issue.status === "review" ? "Review" : "Done"}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{issue.title}</div>
                </div>
              </div>
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">{issue.assignee}</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

