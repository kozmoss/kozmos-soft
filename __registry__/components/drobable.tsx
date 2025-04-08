"use client"

import { useDroppable } from "@dnd-kit/core"
import type { ReactNode } from "react"

interface DroppableProps {
  id: string
  children: ReactNode
}

export function Droppable({ id, children }: DroppableProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  })

  return (
    <div
      ref={setNodeRef}
      className={`h-full ${isOver ? "bg-accent/50" : ""}`}
      style={{ transition: "background-color 0.2s" }}
    >
      {children}
    </div>
  )
}
