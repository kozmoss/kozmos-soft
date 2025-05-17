import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Firebase admin SDK'sını başlat
const apps = getApps();
const firebaseAdminApp = !apps.length
  ? initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    })
  : apps[0];

const adminAuth = getAuth(firebaseAdminApp);
const adminDb = getFirestore(firebaseAdminApp);

export { adminAuth, adminDb };
