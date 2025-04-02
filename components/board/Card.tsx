import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { GripVertical, Tag } from "lucide-react";
import { ColumnId } from "./KanbanBoard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type Task = {
  id: UniqueIdentifier;
  columnId: ColumnId;
  content: string;
};

type TaskCardProps = {
  task: Task;
  isOverlay?: boolean;
};

export type TaskType = "Task";

export type TaskDragData = {
  type: TaskType;
  task: Task;
};

export function TaskCard({ task, isOverlay }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: "Task",
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("bg-background", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });

  return (
    <Card
    ref={setNodeRef}
    style={style}
    className={variants({
      dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
    })}
  >
    <CardContent className="p-4 flex flex-col text-left whitespace-pre-wrap h-full">
      <div className="flex items-center h-full">
        <Button
          variant="ghost"
          {...attributes}
          {...listeners}
          className="p-1 text-secondary-foreground/50 -ml-2 h-auto cursor-grab"
        >
          <span className="sr-only">Move task</span>
          <GripVertical />
        </Button>
        <span className="ml-2">{task.content}</span>
      </div>

      {/* İçeriğin yukarıda kalmasını sağlar */}
      <div className="flex-grow"></div>

      {/* Avatar ve Label en alta sabitlendi */}
      <div className="flex justify-between items-center mt-2 h-full">
        <div className="flex gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-600">Admin</span>
        </div>

        <div className="flex items-center gap-1 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">
          <Tag size={12} />
          <span>{"label"}</span>
        </div>
      </div>
    </CardContent>
  </Card>
  );
}
