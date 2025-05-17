

  // types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: Date;
}

export interface Chat {
  id: string;
  title: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  messages: Message[];
}

export interface ChatMain {
  id: string;
  title: string;
  updatedAt: Date;
  lastMessage: string;
}