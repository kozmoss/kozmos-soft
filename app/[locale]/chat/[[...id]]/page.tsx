"use client";
import { KozmosChat } from "@/components/v0chat";
import React from "react";

export default function ChatPage({ params }: { params: { id?: string[] } }) {
  const { id } = params;
  if (id && id.length > 1) {
    return <div>404- Sayfa bulunamadı.</div>;
  }
  return (
    <div className="min-h-full w-full min-w-0 flex-1">
      <KozmosChat />
    </div>
  );
}
