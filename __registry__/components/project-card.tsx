import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


interface ProjectCardProps {
  title: string
  description: string
  progress: number
  dueDate: string
  team: string[]
}

export function ProjectCard({ title, description, progress, dueDate, team }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">Due: {dueDate}</div>
        <div className="flex -space-x-2">
          {team.map((member, i) => (
            <Avatar key={i} className="h-7 w-7 border-2 border-background">
              <AvatarFallback className="text-xs">{member}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

