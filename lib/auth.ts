// lib/auth-simplified.ts
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./firebase";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

// Daha basit bir NextAuth yapılandırması
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        // Firestore'da kullanıcıyı kontrol et veya oluştur
        try {
          // Önce e-posta ile kullanıcıyı ara
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);

          let userId = user.id;

          // Kullanıcı varsa ID'sini al, yoksa yeni kullanıcı oluştur
          if (querySnapshot.empty) {
            userId = user.id || user.email?.replace(/[^a-zA-Z0-9]/g, "_") || "";

            await setDoc(doc(db, "users", userId), {
              name: user.name,
              email: user.email,
              image: user.image,
              createdAt: serverTimestamp(),
              id: account.providerAccountId,
            });
          } else {
            userId = querySnapshot.docs[0].id;
          }

          // JWT'ye userId ekle
          token.userId = userId;
        } catch (error) {
          console.error("Kullanıcı oluşturma veya kontrol hatası:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      // JWT'den kullanıcı ID'sini session'a ekle
      if (token && session.user) {
        session.user.id = token.userId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/", // Giriş sayfası
  },
  session: {
    strategy: "jwt", // JWT stratejisini kullan (database yerine)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// JWT içerisine userId eklemek için tip tanımı
declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
  }
}
