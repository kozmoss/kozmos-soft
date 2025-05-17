// app/api/chat/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  collection,
  query,
  orderBy,
  getDocs,
  limit,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { generateResponse } from "@/lib/aiModel/model";

export async function POST(req: Request) {
  try {
    // Kullanıcı oturumunu kontrol et
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 },
      );
    }

    const { message, chatId } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Mesaj içeriği gerekli" },
        { status: 400 },
      );
    }

    const userId = session.user.id;
    const messageId = uuidv4();
    const timestamp = new Date();

    // Eğer yeni bir sohbet ise, yeni bir sohbet oluştur
    let currentChatId = chatId;

    try {
      if (!currentChatId) {
        currentChatId = uuidv4();

        // Kullanıcı-bazlı yapı: users/{userId}/chats/{chatId}
        const chatRef = doc(db, `users/${userId}/chats`, currentChatId);

        // Chat metadatasını ana koleksiyonda da saklama (global erişim için)
        const chatMetaRef = doc(db, "chatsMeta", currentChatId);

        // İlk mesajı oluştur
        const initialMessage = {
          id: messageId,
          content: message,
          role: "user",
          createdAt: timestamp,
        };

        // Chat oluştur
        await setDoc(chatRef, {
          id: currentChatId,
          title: message.substring(0, 30) + "...",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          lastMessage: message.substring(0, 50),
          messageCount: 1,
        });

        // Chat meta bilgilerini global koleksiyona ekle
        await setDoc(chatMetaRef, {
          id: currentChatId,
          userId,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        // Mesajı ayrı bir koleksiyonda sakla
        const messageRef = doc(
          db,
          `users/${userId}/chats/${currentChatId}/messages`,
          messageId,
        );
        await setDoc(messageRef, initialMessage);
      } else {
        // Var olan sohbete mesaj ekle
        const chatRef = doc(db, `users/${userId}/chats`, currentChatId);
        const chatSnap = await getDoc(chatRef);

        if (!chatSnap.exists()) {
          return NextResponse.json(
            { error: "Sohbet bulunamadı" },
            { status: 404 },
          );
        }

        // Kullanıcı mesajını ekle
        const messageRef = doc(
          db,
          `users/${userId}/chats/${currentChatId}/messages`,
          messageId,
        );
        await setDoc(messageRef, {
          id: messageId,
          content: message,
          role: "user",
          createdAt: timestamp,
        });

        // Chat meta verilerini güncelle
        await updateDoc(chatRef, {
          updatedAt: serverTimestamp(),
          lastMessage: message.substring(0, 50),
          messageCount: chatSnap.data().messageCount + 1,
        });
      }

      // AI yanıtı al
      const aiResponse = await generateResponse(message);
      const aiMessageId = uuidv4();

      // AI yanıtını sohbete ekle
      const aiMessageRef = doc(
        db,
        `users/${userId}/chats/${currentChatId}/messages`,
        aiMessageId,
      );
      await setDoc(aiMessageRef, {
        id: aiMessageId,
        content: aiResponse,
        role: "assistant",
        createdAt: new Date(),
      });

      // Chat meta verilerini güncelle
      const chatRef = doc(db, `users/${userId}/chats`, currentChatId);
      const chatSnap = await getDoc(chatRef);

      await updateDoc(chatRef, {
        updatedAt: serverTimestamp(),
        lastMessage: aiResponse.substring(0, 50) + "...",
        messageCount: chatSnap.data().messageCount + 1,
      });

      return NextResponse.json({
        chatId: currentChatId,
        message: {
          id: aiMessageId,
          content: aiResponse,
          role: "assistant",
          createdAt: new Date(),
        },
      });
    } catch (error) {
      console.error("Database operation error:", error);
      throw error;
    }
  } catch (error) {
    console.error("Chat API hatası:", error);
    return NextResponse.json(
      { error: "İşlem sırasında bir hata oluştu" },
      { status: 500 },
    );
  }
}

// Kullanıcının sohbetlerini getir
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 },
      );
    }

    const userId = session.user.id;
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    // Belirli bir sohbetin tüm mesajlarını getir
    if (chatId) {
      const messagesRef = collection(
        db,
        `users/${userId}/chats/${chatId}/messages`,
      );
      const messagesQuery = query(messagesRef, orderBy("createdAt", "asc"));
      const messagesSnap = await getDocs(messagesQuery);

      const messages = messagesSnap.docs.map((doc) => doc.data());

      // Sohbet detaylarını getir
      const chatRef = doc(db, `users/${userId}/chats`, chatId);
      const chatSnap = await getDoc(chatRef);

      if (!chatSnap.exists()) {
        return NextResponse.json(
          { error: "Sohbet bulunamadı" },
          { status: 404 },
        );
      }

      return NextResponse.json({
        chat: chatSnap.data(),
        messages,
      });
    }

    // Kullanıcının tüm sohbetlerini getir
    const chatsRef = collection(db, `users/${userId}/chats`);
    const chatsQuery = query(chatsRef, orderBy("updatedAt", "desc"), limit(20));
    const chatsSnap = await getDocs(chatsQuery);

    const chats = chatsSnap.docs.map((doc) => doc.data());

    return NextResponse.json({ chats });
  } catch (error) {
    console.error("Sohbet getirme hatası:", error);
    return NextResponse.json(
      { error: "Sohbetler getirilirken bir hata oluştu" },
      { status: 500 },
    );
  }
}
