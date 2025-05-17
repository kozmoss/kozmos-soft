"use client"

import ChatInput from '@/components/chat/chatInput'
import ChatMessages from '@/components/chat/chatMessages'
import React from 'react'

export default function ChatPageMain() {
  return (
    <div className="relative h-full flex-1 flex overflow-x-hidden overflow-y-scroll pt-6">
    <div className="relative mx-auto flex h-full w-full max-w-3xl flex-1 flex-col md:px-2">
      <ChatMessages messages={[]} />
      <ChatInput messages={[]} />
    </div>
  </div>
  )
}
