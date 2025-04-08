import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IssueCard } from "./issue-card";

interface Issue {
  id: string;
  title: string;
  type: "bug" | "task" | "story" | "epic";
  priority: "low" | "medium" | "high";
  assignee: string;
  storyPoints: number;
}

interface SortableIssueCardProps {
  issue: Issue;
}

export function SortableIssueCard({ issue }: SortableIssueCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: issue.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <IssueCard issue={issue} />
    </div>
  );
}
