import { v4 as uuidv4 } from "uuid";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  updateDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import { ChatMain } from "@/types/chat";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

export interface Chat {
  id: string;
  userId: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export const createChat = async (
  userId: string,
  title: string = "Yeni Sohbet",
): Promise<Chat> => {
  const chatId = uuidv4();
  const newChat: Chat = {
    id: chatId,
    userId,
    title,
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await setDoc(doc(db, "chats", chatId), newChat);
  return newChat;
};

export const getChatById = async (
  chatId: string,
  userId: string,
): Promise<Chat | null> => {
  const chatRef = doc(db, `users/${userId}/chats`, chatId);
  const chatSnap = await getDoc(chatRef);

  if (!chatSnap.exists()) return null;

  const chatData = chatSnap.data() as Chat;

  return chatData;
};

export const getUserChats = async (userId: string): Promise<ChatMain[]> => {
  const chatsRef = collection(db, `users/${userId}/chats`);
  const chatsQuery = query(chatsRef, orderBy("updatedAt", "desc"), limit(20));
  const chatsSnap = await getDocs(chatsQuery);

  const fetchedChats: ChatMain[] = chatsSnap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "Yeni Sohbet",
      updatedAt: data.updatedAt?.toDate() || new Date(),
      lastMessage: data.lastMessage || "",
    };
  });

  return fetchedChats;
};

export const updateChatTitle = async (
  chatId: string,
  userId: string,
  title: string,
): Promise<void> => {
  const chat = await getChatById(chatId, userId);
  if (!chat) throw new Error("Sohbet bulunamadı veya erişim izniniz yok");

  await updateDoc(doc(db, "chats", chatId), {
    title,
    updatedAt: new Date(),
  });
};

export const deleteChat = async ({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}): Promise<void> => {
  if (!userId) return;
  const chat = await getChatById(chatId, userId);
  if (!chat) throw new Error("Sohbet bulunamadı veya erişim izniniz yok");
  const chatDocRef = doc(db, `users/${userId}/chats`, chatId);

  await deleteDoc(chatDocRef);
};
