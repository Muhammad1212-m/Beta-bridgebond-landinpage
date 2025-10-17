import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyT-bFHPdBwMSS-y6AgZYUhj54ZC93OJY",
  authDomain: "bridgbond-v2.firebaseapp.com",
  projectId: "bridgbond-v2",
  storageBucket: "bridgbond-v2.firebasestorage.app",
  messagingSenderId: "972607309620",
  appId: "1:972607309620:web:15b31b238fd2b0ad6e4761",
  measurementId: "G-D3LQPLXEVH"
};

// ✅ Initialize app only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Optional: enable analytics on client only
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) getAnalytics(app);
  });
}

// ✅ Export initialized services
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };

