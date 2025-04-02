"use client";
import { useCallback, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  DragOverlay,
  type DragStartEvent,
  useSensor,
  useSensors,
  KeyboardSensor,
  TouchSensor,
  MouseSensor,
  Active,
  Over,
  DataRef,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import {
  Column,
  BoardColumn,
  BoardContainer,
  ColumnDragData,
} from "./BoardColumn";
import { coordinateGetter } from "./multipleContainersKeyboardPreset";
import { Task, TaskCard, TaskDragData } from "./Card";

type NestedColumn = Column & {
  children?: NestedColumn[];
};

export type ColumnId = string;

const initialTasks: Task[] = [
  { id: "task-1f", columnId: "to-do", content: "Implement authentication" },
  { id: "task-2a", columnId: "to-do", content: "Implement authentication" },
  { id: "task-3c", columnId: "to-do", content: "Implement authentication" },
  { id: "task-5d", columnId: "to-do", content: "Implement authentication" },
  { id: "task-2", columnId: "in-progress", content: "Fix UI bugs" },
  { id: "task-3", columnId: "code-review", content: "Refactor API calls" },
  { id: "task-4", columnId: "done", content: "Update documentation" },
];

const fixedColumns: Column[] = [
  { id: "to-do", title: "TO DO" },
  { id: "in-progress", title: "IN PROGRESS" },
  { id: "code-review", title: "CODE REVIEW" },
  { id: "done", title: "DONE" },
];

export function KanbanBoard() {
  const [columns, setColumns] = useState<NestedColumn[]>(fixedColumns);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const dndContextId = useId();

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: coordinateGetter,
    }),
  );

  const hasDraggableData = <T extends Active | Over>(
    entry: T | null | undefined,
  ): entry is T & {
    data: DataRef<TaskDragData | ColumnDragData>;
  } => {
    if (!entry) {
      return false;
    }

    const data = entry.data.current;

    if (data?.type === "Column" || data?.type === "Task") {
      return true;
    }

    return false;
  };

  // Helper function to flatten nested columns
  const flattenColumns = useCallback((cols: NestedColumn[]): Column[] => {
    return cols.flatMap((col) =>
      col.children
        ? [{ id: col.id, title: col.title }, ...flattenColumns(col.children)]
        : [col],
    );
  }, []);

  const flatColumns = useMemo(
    () => flattenColumns(columns),
    [columns, flattenColumns],
  );
  
  const columnsId = useMemo(
    () => flatColumns.map((col) => col.id),
    [flatColumns],
  );

  // recursively render nested columns
  const renderNestedColumns = (cols: NestedColumn[]) => {
    return cols.map((col) => {
      const tasksInColumn = tasks.filter((task) => task.columnId === col.id);

      if (col.children && col.children.length > 0) {
        return (
          <div key={col.id} className="flex flex-col">
            {tasksInColumn.length > 0 && (
              <BoardColumn column={col} tasks={tasksInColumn} />
            )}
            <div className={tasksInColumn.length > 0 ? "ml-4 mt-2" : ""}>
              {renderNestedColumns(col.children)}
            </div>
          </div>
        );
      } else {
        return <BoardColumn key={col.id} column={col} tasks={tasksInColumn} />;
      }
    });
  };

  const onDragStart = (event: DragStartEvent) => {
    if (!hasDraggableData(event.active)) return;
    const data = event.active.data.current;
    if (data?.type === "Column") {
      return;
    }

    if (data?.type === "Task") {
      setActiveTask(data.task);
      return;
    }
  };

  const onDragEnd = async (event: DragEndEvent) => {
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (!hasDraggableData(active)) return;

    const activeData = active.data.current;

    if (activeId === overId) return;

    const isActiveAColumn = activeData?.type === "Column";
    if (isActiveAColumn) {
      setColumns((columns) => {
        const activeColumnIndex = columns.findIndex(
          (col) => col.id === activeId,
        );
        const overColumnIndex = columns.findIndex((col) => col.id === overId);
        return arrayMove(columns, activeColumnIndex, overColumnIndex);
      });
    } else if (activeData?.type === "Task") {
      const newColumnId = hasDraggableData(over)
        ? over.data.current?.type === "Column"
          ? (over.id as ColumnId)
          : over.data.current?.task.columnId
        : (over.id as ColumnId);

      const oldColumnId = activeData.task.columnId;

      if (oldColumnId !== newColumnId) {
        setTasks((tasks) => {
          return tasks.map((task) =>
            task.id === activeId && newColumnId
              ? { ...task, columnId: newColumnId }
              : task,
          );
        });
      }
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveATask = activeData?.type === "Task";
    const isOverATask = overData?.type === "Task";

    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.id === activeId);
        const overIndex = tasks.findIndex((task) => task.id === overId);
        const activeTask = tasks[activeIndex];
        const overTask = tasks[overIndex];
        if (activeTask && overTask && activeTask.columnId !== overTask.columnId) {
          activeTask.columnId = overTask.columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = overData?.type === "Column";

    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.id === activeId);
        const activeTask = tasks[activeIndex];
        if (activeTask) {
          activeTask.columnId = overId as ColumnId;
          return arrayMove(tasks, activeIndex, activeIndex);
        }
        return tasks;
      });
    }
  };

  return (
    <DndContext
      id={dndContextId}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <BoardContainer>
        <SortableContext items={columnsId}>
          {renderNestedColumns(columns)}
        </SortableContext>
      </BoardContainer>

      {typeof window !== "undefined" &&
        createPortal(
          <DragOverlay>
        
            {activeTask && <TaskCard task={activeTask} isOverlay />}
          </DragOverlay>,
          document.body,
        )}
    </DndContext>
  );
}