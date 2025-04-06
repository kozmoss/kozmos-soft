import { KanbanBoard } from "@/components/board/KanbanBoard";
import React from "react";

export default function ProjectManager() {
  return (
    <div className="@container/page flex flex-1 flex-col gap-8 p-6">
      <KanbanBoard />
    </div>
  );
}
