"use client";

import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IssueCard } from "./issue-card";
import { SortableIssueCard } from "./sortable-issue-card";
import { Droppable } from "@/__registry__/components/drobable";
import { useTranslations } from "next-intl";

interface Issue {
  id: string;
  title: string;
  type: "bug" | "task" | "story" | "epic";
  priority: "low" | "medium" | "high";
  assignee: string;
  storyPoints: number;
}

interface Column {
  id: string;
  title: string;
  issues: Issue[];
}

export function KanbanBoard() {
  const t = useTranslations("Web.projectManager")
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "todo",
      title: "columns.todo",
      issues: [
        {
          id: "PROJ-123",
          title: "kanban.issues.implementAuth",
          type: "task",
          priority: "high",
          assignee: "AS",
          storyPoints: 5,
        },
        {
          id: "PROJ-124",
          title: "kanban.issues.designMockups",
          type: "task",
          priority: "medium",
          assignee: "TK",
          storyPoints: 3,
        },
        {
          id: "PROJ-125",
          title: "kanban.issues.researchPayments",
          type: "story",
          priority: "low",
          assignee: "JD",
          storyPoints: 2,
        },
      ],
    },
    {
      id: "in-progress",
      title: "columns.inProgress",
      issues: [
        {
          id: "PROJ-120",
          title: "kanban.issues.fixResponsiveness",
          type: "bug",
          priority: "high",
          assignee: "AS",
          storyPoints: 3,
        },
        {
          id: "PROJ-121",
          title: "kanban.issues.implementFiltering",
          type: "story",
          priority: "medium",
          assignee: "JD",
          storyPoints: 5,
        },
      ],
    },
    {
      id: "review",
      title: "columns.review",
      issues: [
        {
          id: "PROJ-118",
          title: "kanban.issues.addSearch",
          type: "story",
          priority: "high",
          assignee: "AS",
          storyPoints: 8,
        },
      ],
    },
    {
      id: "done",
      title: "columns.done",
      issues: [
        {
          id: "PROJ-115",
          title: "kanban.issues.setupRepo",
          type: "task",
          priority: "high",
          assignee: "JD",
          storyPoints: 1,
        },
        {
          id: "PROJ-116",
          title: "kanban.issues.createSchema",
          type: "task",
          priority: "medium",
          assignee: "AS",
          storyPoints: 3,
        },
        {
          id: "PROJ-117",
          title: "kanban.issues.implementRegistration",
          type: "story",
          priority: "high",
          assignee: "JD",
          storyPoints: 5,
        },
      ],
    },
  ]);

  const [activeIssue, setActiveIssue] = useState<Issue | null>(null);

  // Set up sensors for drag detection
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // Find an issue by its ID
  const findIssueById = (
    id: UniqueIdentifier,
  ): [Issue | null, string | null, number] => {
    for (const column of columns) {
      const issueIndex = column.issues.findIndex((issue) => issue.id === id);
      if (issueIndex !== -1) {
        return [column.issues[issueIndex], column.id, issueIndex];
      }
    }
    return [null, null, -1];
  };

  // Find column by ID
  const findColumnById = (id: UniqueIdentifier): Column | undefined => {
    return columns.find((column) => column.id === id);
  };

  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const [issue] = findIssueById(active.id);
    if (issue) {
      setActiveIssue(issue);
    }
  };

  // Handle drag over
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;

    const [activeIssue, activeColumnId, activeIndex] = findIssueById(active.id);

    // Check if we're dragging over a column
    const overColumn = findColumnById(over.id);

    if (overColumn) {
      // We're dragging over a column, not an issue
      if (activeColumnId !== overColumn.id && activeIssue) {
        setColumns((columns) => {
          // Remove from the original column
          const newColumns = columns.map((column) => {
            if (column.id === activeColumnId) {
              return {
                ...column,
                issues: column.issues.filter(
                  (issue) => issue.id !== activeIssue.id,
                ),
              };
            }
            return column;
          });

          // Add to the new column
          return newColumns.map((column) => {
            if (column.id === overColumn.id) {
              return {
                ...column,
                issues: [...column.issues, activeIssue],
              };
            }
            return column;
          });
        });
      }
      return;
    }

    // We're dragging over another issue
    const [overIssue, overColumnId, overIndex] = findIssueById(over.id);

    if (!activeIssue || !overIssue || activeColumnId !== overColumnId) return;

    // Reorder within the same column
    if (activeIndex !== overIndex) {
      setColumns((columns) => {
        return columns.map((column) => {
          if (column.id === activeColumnId) {
            const newIssues = [...column.issues];
            newIssues.splice(activeIndex, 1);
            newIssues.splice(overIndex, 0, activeIssue);
            return {
              ...column,
              issues: newIssues,
            };
          }
          return column;
        });
      });
    }
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveIssue(null);
      return;
    }

    const [activeIssue, activeColumnId, activeIndex] = findIssueById(active.id);

    // Check if we're dropping onto a column
    const overColumn = findColumnById(over.id);

    if (overColumn) {
      // We're dropping onto a column

      if (activeColumnId !== overColumn.id && activeIssue) {
        setColumns((columns) => {
          // Remove from the original column
          const newColumns = columns.map((column) => {
            if (column.id === activeColumnId) {
              return {
                ...column,
                issues: column.issues.filter(
                  (issue) => issue.id !== activeIssue.id,
                ),
              };
            }
            return column;
          });

          // Add to the new column
          return newColumns.map((column) => {
            if (column.id === overColumn.id) {
              return {
                ...column,
                issues: [...column.issues, activeIssue],
              };
            }
            return column;
          });
        });
      }
    } else {
      // We're dropping onto another issue
      const [overIssue, overColumnId, overIndex] = findIssueById(over.id);

      if (!activeIssue || !overIssue) {
        setActiveIssue(null);
        return;
      }

      if (activeColumnId !== overColumnId) {
        // Moving between columns
        setColumns((columns) => {
          return columns.map((column) => {
            if (column.id === activeColumnId) {
              return {
                ...column,
                issues: column.issues.filter(
                  (issue) => issue.id !== activeIssue.id,
                ),
              };
            }

            // Add to destination column
            if (column.id === overColumnId) {
              const newIssues = [...column.issues];
              const overIndex = newIssues.findIndex(
                (issue) => issue.id === overIssue.id,
              );
              newIssues.splice(overIndex, 0, activeIssue);
              return {
                ...column,
                issues: newIssues,
              };
            }

            return column;
          });
        });
      } else if (activeIndex !== overIndex) {
        // Reordering within the same column
        setColumns((columns) => {
          return columns.map((column) => {
            if (column.id === activeColumnId) {
              const newIssues = [...column.issues];
              newIssues.splice(activeIndex, 1);
              newIssues.splice(overIndex, 0, activeIssue);
              return {
                ...column,
                issues: newIssues,
              };
            }
            return column;
          });
        });
      }
    }

    setActiveIssue(null);
  };

  return (
    <div className="relative">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((column) => (
            <div key={column.id} className="flex-shrink-0 w-80">
              <Card className="h-full flex flex-col">
                <CardHeader className="px-4 py-3 flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle className="text-sm font-medium">
                    {t(`kanban.${column.title}`)}
                    </CardTitle>
                    <CardDescription className="text-xs">
                    {t('kanban.ui.issuesCount', { count: column.issues.length })}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">{t('kanban.ui.moreOptions')}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                      <DropdownMenuItem>{t('kanban.ui.addIssue')}</DropdownMenuItem>
                        <DropdownMenuItem>{t('kanban.ui.editColumn')}</DropdownMenuItem>
                        <DropdownMenuItem>{t('kanban.ui.clearColumn')}</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <Droppable  id={column.id}>
                  {" "}
                  <CardContent
                   
                    className="px-2 py-2 flex-1 min-h-[200px]"
                  >
                    <SortableContext
                      items={column.issues.map((issue) => issue.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-2">
                        {column.issues.map((issue) => (
                          <SortableIssueCard key={issue.id} issue={issue} />
                        ))}
                      </div>
                    </SortableContext>
                  </CardContent>
                </Droppable>

                <CardFooter className="px-4 py-3 border-t mt-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    {t('kanban.ui.addIssue')}

                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <DragOverlay>
          {activeIssue ? <IssueCard issue={activeIssue} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
