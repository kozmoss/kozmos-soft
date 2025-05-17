/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatInput from "@/components/chat/chatInput";
import ChatMessages from "@/components/chat/chatMessages";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { Message } from "@/types/chat";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { getServerSession } from "next-auth/next";
import { notFound, redirect } from "next/navigation";
import React from "react";

interface ChatPageProps {
  params: {
    id: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = await getServerSession(authOptions);
  const { id } = await params;

  if (!session?.user) {
    redirect("/");
  }

  // Get the chat document
  const chatRef = doc(db, `users/${session.user.id}/chats`, id);
  const chatSnap = await getDoc(chatRef);

  if (!chatSnap.exists()) {
    notFound();
  }

  // Get messages from subcollection
  const messagesRef = collection(db, `users/${session.user.id}/chats/${id}/messages`);
  const messagesQuery = query(messagesRef, orderBy("createdAt", "asc"));
  const messagesSnap = await getDocs(messagesQuery);
  
  // Map the message documents to your Message type
  const messages: Message[] = messagesSnap.docs.map(doc => {
    const data = doc.data();
    return {
      ...data,
      createdAt: data.createdAt?.toDate() || new Date(),
    } as Message;
  });

  return (
    <div className="relative h-full flex-1 flex overflow-x-hidden overflow-y-scroll pt-6">
      <div className="relative mx-auto flex h-full w-full max-w-3xl flex-1 flex-col md:px-2">
        <ChatMessages messages={messages} />
        <ChatInput chatId={id} messages={messages} />
      </div>
    </div>
  );
}